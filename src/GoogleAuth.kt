package com.ktor.Assignment

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.client.*
import io.ktor.client.engine.jetty.*
import io.ktor.client.request.*
import io.ktor.features.*
import io.ktor.freemarker.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.routing.header
import io.ktor.sessions.*
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction

val httpClient = HttpClient(Jetty)
val dbUrl=System.getenv("DATABASE_URL")
val mysqlUser=System.getenv("MYSQL_USER")
val mysqlPassword=System.getenv("MYSQL_PASSWORD");
val googleClientId=System.getenv("CLIENT_ID")
val googleClientSecret=System.getenv("CLIENT_SECRET")
var googleOAuthProvider= OAuthServerSettings.OAuth2ServerSettings(
    name = "google",
    authorizeUrl = "https://accounts.google.com/o/oauth2/auth",
    accessTokenUrl = "https://www.googleapis.com/oauth2/v3/token",
    requestMethod = HttpMethod.Post,

    clientId = googleClientId,
    clientSecret = googleClientSecret,
    defaultScopes = listOf("profile","email")
)

fun Application.authenticationModule(){
    install(Authentication) {
        oauth ("GoogleAuth"){
            client=httpClient
            providerLookup= { googleOAuthProvider}
            urlProvider={redirectUrl("/login")}
        }
    }

    var conn= Database.connect(dbUrl,
            "org.mariadb.jdbc.Driver",mysqlUser,mysqlPassword)

    routing {
        authenticate("GoogleAuth") {
            route("/login") {
                handle{
                    val principal = call.authentication.principal<OAuthAccessTokenResponse.OAuth2>()
                    if (principal!=null) {
                        val json = httpClient.get<String>("https://www.googleapis.com/userinfo/v2/me") {
                            header("Authorization", "Bearer ${principal.accessToken}")
                        }

                        var user=Gson().fromJson(json,UserResponse::class.java)
                        var dbUser: User? =null
                        if (user.id != null) {
                            var profileLock:Boolean=true
                            transaction {
                                val userQuery=User.find{(Users.email eq user.email) and (Users.name eq user.name)}
                                if (userQuery.empty()){
                                    dbUser=User.new{
                                        name=user.name
                                        email=user.email
                                        username=user.email
                                        accessToken=principal.accessToken
                                        profilePicture=user.picture
                                    }
                                    profileLock= dbUser!!.profileLock
                                } else {
                                    dbUser=userQuery.iterator().next()
                                    dbUser!!.accessToken=principal.accessToken
                                    profileLock=dbUser!!.profileLock
                                }
                            }
                            call.sessions.set<AuthSession>(AuthSession(json))

                            if(!profileLock)
                            {
                                call.respond(FreeMarkerContent("setup.ftl",mapOf("user" to dbUser,"locked" to profileLock),""))
                                return@handle
                            }


                        }
                        call.respondRedirect("/")
                    }
                }
            }
        }

        route ("/logout") {
            handle {
                call.sessions.clear<AuthSession>()
                call.respondRedirect("/")
            }
        }
        route("/setup" ) {
            post {
                val auth=call.sessions.get<AuthSession>()
                if (auth!=null) {
                    var user=Gson().fromJson(auth.userId,UserResponse::class.java)
                    var params=call.receiveParameters()
                    transaction{
                    var dbUserList=User.find((Users.email eq user.email) and (Users.name eq user.name))
                    if(!dbUserList.empty()){
                        var dbUser=dbUserList.iterator().next()

                        params["mobile-number"]?.let{ dbUser.mobileNumber=it }
                        if (params["username"]!=null && !dbUser.profileLock)
                        {
                            params["username"]?.let{ dbUser.email =it }
                            dbUser.profileLock=true
                        }
                    }
                    }
                }
                call.respondRedirect("/")
            }
        }


    }

}


private fun ApplicationCall.redirectUrl(path:String):String {
    val defaultPort=  if (request.origin.scheme=="http") 80 else 443
    val hostPort=request.host()!!+request.port().let{ port -> if (port == defaultPort) "" else ":$port"}
    val protocol = request.origin.scheme
    return "$protocol://$hostPort$path"
}

data class UserResponse(val id:String,val email:String,val name:String,val picture:String)
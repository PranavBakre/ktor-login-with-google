(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/background.29a7fea0.jpg"},40:function(e,t,n){e.exports=n(54)},45:function(e,t,n){},46:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(25),c=n.n(o),i=(n(45),n(46),n(47),n(36)),s=n.n(i),u=n(11),l=n(12),g=n(14),d=n(15),p=n(56),f=n(57),m=n(58),h=n(13),b=n(28),L=n(55),O={LOGIN_SUCCESS:"LoginSuccess",LOGIN_FAILED:"LoginFailure",LOGGING_IN:"LoggingIn",LOGOUT_SUCCESS:"LogoutSuccess",LOGOUT_FAILED:"LogoutFailure"},E=function(e){return{type:O.LOGINFAILURE,payload:e.error}},I="550834628183-e6b28mho8aka4u3587li44oc9crhk2dd.apps.googleusercontent.com",j=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).logout=function(e){console.log(e),r.props.LogoutSuccess()},r.logoutfail=function(){r.props.LogoutFailure()},r.state={isLoggedIn:e.isLoggedIn},r}return Object(l.a)(n,[{key:"render",value:function(){return this.props.isLoggedIn?a.a.createElement(b.GoogleLogout,{clientId:I,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.logoutfail,render:function(e){return a.a.createElement(L.a,{onClick:e.onClick,disabled:e.disabled},"Logout")}}):a.a.createElement(a.a.Fragment,null)}}]),n}(a.a.Component),v=Object(h.b)((function(e){return{isLoggedIn:e.login.isLoggedIn}}),{LogoutSuccess:function(){return{type:O.LOGOUT_SUCCESS}},LogoutFailure:function(e){return{type:O.LOGOUT_FAILED,payload:e.error}}})(j),S=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("header",null,a.a.createElement(p.a,{light:!0,expand:"md",color:"white",className:"border-bottom box-shadow mb-3"},a.a.createElement(f.a,{className:"text-center"},a.a.createElement(m.a,{href:"/"},"KTorAssignment")),a.a.createElement(v,null)))}}]),n}(a.a.Component),y=Object(h.b)((function(e){return{isLoggedIn:e.isLoggedIn}}))(S),k=n(9),U=n(60),C=n(61),G=n(59),w=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).login=function(e){r.props.LoggingIn(e),console.log(r.props.isLoggedIn)},r.handleLoginFailure=function(e){console.log(e),r.props.LoginFailure(e)},r}return Object(l.a)(n,[{key:"render",value:function(){return this.props.isLoggedIn?null:a.a.createElement(b.GoogleLogin,{clientId:I,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,render:function(e){return a.a.createElement(G.a,{color:"primary",outline:!0,style:{width:"100%"},onClick:e.onClick,disabled:e.disabled},"Sign In with Google")}})}}]),n}(a.a.Component),_=Object(h.b)((function(e){return{isLoggedIn:e.login.isLoggedIn}}),(function(e){return{LoggingIn:function(t){e({type:O.LOGGING_IN,payload:t.accessToken})},LoginFailure:function(t){e(E(t))}}}))(w),x=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return console.log(this.props.isLoggedIn),this.props.isLoggedIn?a.a.createElement(k.a,{to:"/home"}):a.a.createElement(f.a,null,a.a.createElement(U.a,null,a.a.createElement(C.a,{className:"pt-3",xs:{size:8,offset:2},sm:7,md:{size:4,offset:8},style:{textAlign:"center",backgroundColor:"white",height:"300px"}},a.a.createElement(_,null))))}}]),n}(a.a.Component),N=Object(k.g)(Object(h.b)((function(e){return{isLoggedIn:e.login.isLoggedIn}}))(x)),A={LOAD_USER_SUCCESS:"LoadUserSuccess",LOAD_USER_FAILED:"LoadUserFailure",LOADING_USER:"LoadingUser"},F=function(e){return{type:A.LOAD_USER_SUCCESS,payload:e}},T=n(62),D=n(63),R=n(64),z=n(65),M=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.LoadUser()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(f.a,{className:"bg-white"},a.a.createElement("div",{class:"d-inline"},a.a.createElement("a",{href:"/profile"},"Profile"))),a.a.createElement(f.a,null,a.a.createElement(U.a,null,a.a.createElement(C.a,{xs:{size:8,offset:2},sm:{size:7},md:{size:4,offset:8},className:"justify-content-center"},a.a.createElement(T.a,null,a.a.createElement(D.a,null,a.a.createElement(R.a,null,"$",this.props.user.name)),a.a.createElement(z.a,null,a.a.createElement("img",{src:this.props.user.profilePicture,width:"100%"})))))))}}]),n}(a.a.Component),J=Object(k.g)(Object(h.b)((function(e){return{user:e.user.user,error:e.user.error}}),{LoadUser:function(){return{type:A.LOADING_USER}}})(M)),P=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,"Profile")}}]),n}(a.a.Component),W=Object(k.g)(P),B=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.isLoggedIn?a.a.createElement(k.b,this.props):a.a.createElement(k.a,{to:"/"})}}]),n}(a.a.Component),$=Object(h.b)((function(e){return{isLoggedIn:e.login.isLoggedIn}}))(B);var K=function(){return a.a.createElement("div",{className:"App",style:{backgroundImage:"url(".concat(s.a,")"),backgroundSize:"cover",height:"100vh"}},a.a.createElement(y,null),a.a.createElement(k.d,null,a.a.createElement($,{path:"/home",component:J}),a.a.createElement($,{path:"/profile",component:W}),a.a.createElement(k.b,{path:"/",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=n(17),H=n.n(q),Q=n(21),V=n(39),X=n(19),Y=n(20),Z={isLoggedIn:!1,accessToken:"",errorMsg:null,loggingIn:!1},ee=n(38),te=n.n(ee),ne=H.a.mark(ae),re=H.a.mark(oe);function ae(e){var t;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({"access-token":e.payload})}).then((function(e){return e.json()})).catch((function(e){throw e}));case 3:return t=n.sent,localStorage.setItem("AuthorizationJWT",t),n.next=7,Object(X.b)({type:O.LOGIN_SUCCESS,payload:t["access-token"]});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(X.b)(E(n.t0));case 13:case"end":return n.stop()}}),ne,null,[[0,9]])}function oe(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.c)(O.LOGGING_IN,ae);case 2:case"end":return e.stop()}}),re)}var ce=oe,ie=H.a.mark(ue),se=H.a.mark(le);function ue(e){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthorizationJWT"))},method:"get"}).then((function(e){return e.json()})).catch((function(e){throw e}));case 3:return t=e.sent,e.next=6,Object(X.b)(F(t));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(X.b)((n=e.t0,{type:A.LoadUserFailure,payload:n.error}));case 12:case"end":return e.stop()}var n}),ie,null,[[0,8]])}function le(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.c)(A.LOADING_USER,ue);case 2:case"end":return e.stop()}}),se)}var ge=le,de={user:{name:"",username:"",profilePic:""},isUserLoading:!1,error:null},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.LOAD_USER_SUCCESS:return Object(Y.a)({},e,{isUserLoading:!0,user:t.payload,error:null});case A.LOAD_USER_FAILED:return Object(Y.a)({},e,{isUserLoading:!1,error:t.payload,user:""});case A.LOADING_USER:return Object(Y.a)({},e,{isUserLoading:!0,error:null,user:""});default:return e}},fe=Object(V.a)(),me=Object(Q.e)(Object(Q.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.LOGIN_SUCCESS:return Object(Y.a)({},e,{isLoggedIn:!0,accessToken:t.payload,errorMsg:null,loggingIn:!1});case O.LOGIN_FAILED:return Object(Y.a)({},e,{isLoggedIn:!1,accessToken:"",errorMsg:t.payload,loggingIn:!1});case O.LOGGING_IN:return Object(Y.a)({},e,{isLoggedIn:!1,accessToken:"",errorMsg:null,loggingIn:!0});case O.LOGOUT_SUCCESS:return Object(Y.a)({},e,{isLoggedIn:!1,accessToken:"",errorMsg:null,loggingIn:!1});case O.LOGOUT_FAILED:return Object(Y.a)({},e,{isLoggedIn:!0,errorMsg:t.payload});default:return e}},user:pe}),Object(Q.a)(fe,te.a)),he=H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([ce(),ge()]);case 2:case"end":return e.stop()}}),e)}));fe.run(he);var be=me,Le=n(22);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h.a,{store:be},a.a.createElement(Le.a,null,a.a.createElement(K,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.afa30542.chunk.js.map
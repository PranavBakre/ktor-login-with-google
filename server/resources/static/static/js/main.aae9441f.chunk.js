(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,n,t){e.exports=t.p+"static/media/background.29a7fea0.jpg"},40:function(e,n,t){e.exports=t(55)},45:function(e,n,t){},46:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(24),c=t.n(a),i=(t(45),t(46),t(47),t(36)),u=t.n(i),s=t(11),l=t(12),g=t(13),p=t(14),d=t(57),b=t(58),f=t(59),h=t(17),O=t(27),L=t(56),m={LOGIN_SUCCESS:"LoginSuccess",LOGIN_FAILED:"LoginFailure",LOGGING_IN:"LoggingIn",LOGOUT_SUCCESS:"LogoutSuccess",LOGOUT_FAILED:"LogoutFailure"},I=function(e){return{type:m.LOGINFAILURE,payload:e.error}},j="550834628183-e6b28mho8aka4u3587li44oc9crhk2dd.apps.googleusercontent.com",E=function(e){Object(p.a)(t,e);var n=Object(g.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=n.call(this,e)).logout=function(e){console.log(e),o.props.LogoutSuccess()},o.logoutfail=function(){o.props.LogoutFailure()},o.state={isLoggedIn:e.isLoggedIn},o}return Object(l.a)(t,[{key:"render",value:function(){return this.props.isLoggedIn?r.a.createElement(O.GoogleLogout,{clientId:j,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.logoutfail,render:function(e){return r.a.createElement(L.a,{onClick:e.onClick,disabled:e.disabled},"Logout")}}):r.a.createElement(r.a.Fragment,null)}}]),t}(r.a.Component),v=Object(h.b)((function(e){return{isLoggedIn:e.login.isLoggedIn}}),{LogoutSuccess:function(){return{type:m.LOGOUT_SUCCESS}},LogoutFailure:function(e){return{type:m.LOGOUT_FAILED,payload:e.error}}})(E),S=function(e){Object(p.a)(t,e);var n=Object(g.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(d.a,{light:!0,expand:"md",color:"white",className:"border-bottom box-shadow mb-3"},r.a.createElement(b.a,{className:"text-center"},r.a.createElement(f.a,{href:"/"},"KTorAssignment")),r.a.createElement(v,null)))}}]),t}(r.a.Component),y=Object(h.b)((function(e){return{isLoggedIn:e.isLoggedIn}}))(S),k=t(8),C=t(61),G=t(62),w=t(60),x=function(e){Object(p.a)(t,e);var n=Object(g.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=n.call(this,e)).login=function(e){o.props.LoggingIn(e),console.log(o.props.isLoggedIn)},o.handleLoginFailure=function(e){console.log(e),o.props.LoginFailure(e)},o}return Object(l.a)(t,[{key:"render",value:function(){return this.props.isLoggedIn?null:r.a.createElement(O.GoogleLogin,{clientId:j,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,render:function(e){return r.a.createElement(w.a,{color:"primary",outline:!0,style:{width:"100%"},onClick:e.onClick,disabled:e.disabled},"Sign In with Google")}})}}]),t}(r.a.Component),U=Object(h.b)((function(e){return{isLoggedIn:e.login.isLoggedIn}}),(function(e){return{LoggingIn:function(n){e({type:m.LOGGING_IN,payload:n.accessToken})},LoginFailure:function(n){e(I(n))}}}))(x),_=function(e){Object(p.a)(t,e);var n=Object(g.a)(t);function t(e){return Object(s.a)(this,t),n.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props.isLoggedIn),this.props.isLoggedIn?r.a.createElement(k.a,{to:"/home"}):r.a.createElement(b.a,null,r.a.createElement(C.a,null,r.a.createElement(G.a,{className:"pt-3",xs:{size:8,offset:2},sm:7,md:{size:4,offset:8},style:{textAlign:"center",backgroundColor:"white",height:"300px"}},r.a.createElement(U,null))))}}]),t}(r.a.Component),N=Object(k.g)(Object(h.b)((function(e){return{isLoggedIn:e.login.isLoggedIn}}))(_)),F=function(e){Object(p.a)(t,e);var n=Object(g.a)(t);function t(e){return Object(s.a)(this,t),n.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Home")}}]),t}(r.a.Component),A=Object(k.g)(F),T=function(e){Object(p.a)(t,e);var n=Object(g.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Profile")}}]),t}(r.a.Component),D=Object(k.g)(T),M=function(e){Object(p.a)(t,e);var n=Object(g.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return this.props.isLoggedIn?r.a.createElement(k.b,this.props):r.a.createElement(k.a,{to:"/"})}}]),t}(r.a.Component),z=Object(h.b)((function(e){return{isLoggedIn:e.login.isLoggedIn}}))(M);var R=function(){return r.a.createElement("div",{className:"App",style:{backgroundImage:"url(".concat(u.a,")"),backgroundSize:"cover",height:"100vh"}},r.a.createElement(y,null),r.a.createElement(k.d,null,r.a.createElement(z,{path:"/home",component:A}),r.a.createElement(z,{path:"/profile",component:D}),r.a.createElement(k.b,{path:"/",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(16),W=t.n(J),B=t(20),H=t(39),K=t(19),P=t(22),$={isLoggedIn:!1,accessToken:"",errorMsg:null,loggingIn:!1},q=t(38),Q=t.n(q),V=(t(54),W.a.mark(Y)),X=W.a.mark(Z);function Y(e){var n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({"access-token":e.payload})}).then((function(e){return e.json()})).catch((function(e){throw e}));case 3:return n=t.sent,localStorage.setItem("AuthorizationJWT",n),t.next=7,Object(K.b)({type:m.LOGIN_SUCCESS,payload:n["access-token"]});case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(K.b)(I(t.t0));case 13:case"end":return t.stop()}}),V,null,[[0,9]])}function Z(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)(m.LOGGING_IN,Y);case 2:case"end":return e.stop()}}),X)}var ee=Z,ne={LOAD_USER_SUCCESS:"LoadUserSuccess",LOAD_USER_FAILED:"LoadUserFailure",LOADING_USER:"LoadingUser"},te=function(e){return{type:ne.LOAD_USER_SUCCESS,payload:e}},oe=W.a.mark(ae),re=W.a.mark(ce);function ae(e){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthorizationJWT"))},method:"get"}).then((function(e){return e.json()})).catch((function(e){throw e}));case 3:return n=e.sent,e.next=6,Object(K.b)(te(n));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(K.b)((t=e.t0,{type:ne.LoadUserFailure,payload:t.error}));case 12:case"end":return e.stop()}var t}),oe,null,[[0,8]])}function ce(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)(ne.LOADING_USER,ae);case 2:case"end":return e.stop()}}),re)}var ie=ce,ue=Object(H.a)(),se=Object(B.e)(Object(B.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.LOGIN_SUCCESS:return Object(P.a)({},e,{isLoggedIn:!0,accessToken:n.payload,errorMsg:null,loggingIn:!1});case m.LOGIN_FAILED:return Object(P.a)({},e,{isLoggedIn:!1,accessToken:"",errorMsg:n.payload,loggingIn:!1});case m.LOGGING_IN:return Object(P.a)({},e,{isLoggedIn:!1,accessToken:"",errorMsg:null,loggingIn:!0});case m.LOGOUT_SUCCESS:return Object(P.a)({},e,{isLoggedIn:!1,accessToken:"",errorMsg:null,loggingIn:!1});case m.LOGOUT_FAILED:return Object(P.a)({},e,{isLoggedIn:!0,errorMsg:n.payload});default:return e}}}),Object(B.a)(ue,Q.a)),le=W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([ee(),ie()]);case 2:case"end":return e.stop()}}),e)}));ue.run(le);var ge=se,pe=t(21);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:ge},r.a.createElement(pe.a,null,r.a.createElement(R,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.aae9441f.chunk.js.map
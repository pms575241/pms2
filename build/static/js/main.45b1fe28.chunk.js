(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{43:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(0),a=c.n(n),s=c(19),i=c.n(s),o=(c(43),c(16)),j=c.n(o),d=c(18),u=c(8),l=c(58),b=c(56),O=c(57),p=c(54),h=c(33),x=(c(45),h.a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID})),m=x.auth(),f=a.a.createContext();function S(){return Object(n.useContext)(f)}function v(e){var t=e.children,c=Object(n.useState)(),a=Object(u.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)(!0),j=Object(u.a)(o,2),d=j[0],l=j[1];Object(n.useEffect)((function(){return m.onAuthStateChanged((function(e){i(e),l(!1)}))}),[]);var b={currentUser:s,login:function(e,t){return m.signInWithEmailAndPassword(e,t)},signup:function(e,t){return m.createUserWithEmailAndPassword(e,t)},logout:function(){return m.signOut()},resetPassword:function(e){return m.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(r.jsx)(f.Provider,{value:b,children:!d&&t})}var E=c(7),_=c(10);function P(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),a=S().signup,s=Object(n.useState)(""),i=Object(u.a)(s,2),o=i[0],h=i[1],x=Object(n.useState)(!1),m=Object(u.a)(x,2),f=m[0],v=m[1],P=Object(E.g)();function w(){return(w=Object(d.a)(j.a.mark((function r(n){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),t.current.value===c.current.value){r.next=3;break}return r.abrupt("return",h("Passwords do not match"));case 3:return r.prev=3,h(""),v(!0),r.next=8,a(e.current.value,t.current.value);case 8:P.push("/"),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),h("Failed to create an account");case 14:v(!1);case 15:case"end":return r.stop()}}),r,null,[[3,11]])})))).apply(this,arguments)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{children:Object(r.jsxs)(l.a.Body,{children:[Object(r.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),o&&Object(r.jsx)(b.a,{variant:"danger",children:o}),Object(r.jsxs)(O.a,{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(r.jsxs)(O.a.Group,{id:"email",children:[Object(r.jsx)(O.a.Label,{children:"Email"}),Object(r.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(r.jsxs)(O.a.Group,{id:"password",children:[Object(r.jsx)(O.a.Label,{children:"Password"}),Object(r.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(r.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(r.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(r.jsx)(O.a.Control,{type:"password",ref:c,required:!0})]}),Object(r.jsx)(p.a,{disabled:f,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(r.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(r.jsx)(_.b,{to:"/login",children:"Log In"})]})]})}var w=c(55);function g(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=S(),i=s.currentUser,o=s.logout,O=Object(E.g)();function h(){return(h=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),e.prev=1,e.next=4,o();case 4:O.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{children:Object(r.jsxs)(l.a.Body,{children:[Object(r.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),c&&Object(r.jsx)(b.a,{variant:"danger",children:c}),Object(r.jsx)("strong",{children:"Email:"})," ",i.email,Object(r.jsx)(_.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(r.jsx)("div",{className:"w-100 text-center mt-2",children:Object(r.jsx)(p.a,{variant:"link",onClick:function(){return h.apply(this,arguments)},children:"Log Out"})})]})}function T(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=S().login,a=Object(n.useState)(""),s=Object(u.a)(a,2),i=s[0],o=s[1],h=Object(n.useState)(!1),x=Object(u.a)(h,2),m=x[0],f=x[1],v=Object(E.g)();function P(){return(P=Object(d.a)(j.a.mark((function r(n){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.prev=1,o(""),f(!0),r.next=6,c(e.current.value,t.current.value);case 6:v.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),o("Failed to log in");case 12:f(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{children:Object(r.jsxs)(l.a.Body,{children:[Object(r.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),i&&Object(r.jsx)(b.a,{variant:"danger",children:i}),Object(r.jsxs)(O.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(r.jsxs)(O.a.Group,{id:"email",children:[Object(r.jsx)(O.a.Label,{children:"Email"}),Object(r.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(r.jsxs)(O.a.Group,{id:"password",children:[Object(r.jsx)(O.a.Label,{children:"Password"}),Object(r.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(r.jsx)(p.a,{disabled:m,className:"w-100",type:"submit",children:"Log In"})]}),Object(r.jsx)("div",{className:"w-100 text-center mt-3",children:Object(r.jsx)(_.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(r.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(r.jsx)(_.b,{to:"/signup",children:"Sign Up"})]})]})}var R=c(23),C=c(37);function A(e){var t=e.component,c=Object(C.a)(e,["component"]),n=S().currentUser;return Object(r.jsx)(E.b,Object(R.a)(Object(R.a)({},c),{},{render:function(e){return n?Object(r.jsx)(t,Object(R.a)({},e)):Object(r.jsx)(E.a,{to:"/login"})}}))}function N(){var e=Object(n.useRef)(),t=S().resetPassword,c=Object(n.useState)(""),a=Object(u.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)(""),h=Object(u.a)(o,2),x=h[0],m=h[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),E=v[0],P=v[1];function w(){return(w=Object(d.a)(j.a.mark((function c(r){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,m(""),i(""),P(!0),c.next=7,t(e.current.value);case 7:m("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),i("Failed to reset password");case 13:P(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{children:Object(r.jsxs)(l.a.Body,{children:[Object(r.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),s&&Object(r.jsx)(b.a,{variant:"danger",children:s}),x&&Object(r.jsx)(b.a,{variant:"success",children:x}),Object(r.jsxs)(O.a,{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(r.jsxs)(O.a.Group,{id:"email",children:[Object(r.jsx)(O.a.Label,{children:"Email"}),Object(r.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(r.jsx)(p.a,{disabled:E,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(r.jsx)("div",{className:"w-100 text-center mt-3",children:Object(r.jsx)(_.b,{to:"/login",children:"Login"})})]})}),Object(r.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(r.jsx)(_.b,{to:"/signup",children:"Sign Up"})]})]})}function y(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),a=S(),s=a.currentUser,i=a.updatePassword,o=a.updateEmail,j=Object(n.useState)(""),d=Object(u.a)(j,2),h=d[0],x=d[1],m=Object(n.useState)(!1),f=Object(u.a)(m,2),v=f[0],P=f[1],w=Object(E.g)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{children:Object(r.jsxs)(l.a.Body,{children:[Object(r.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),h&&Object(r.jsx)(b.a,{variant:"danger",children:h}),Object(r.jsxs)(O.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==c.current.value)return x("Passwords do not match");var n=[];P(!0),x(""),e.current.value!==s.email&&n.push(o(e.current.value)),t.current.value&&n.push(i(t.current.value)),Promise.all(n).then((function(){w.push("/")})).catch((function(){x("Failed to update account")})).finally((function(){P(!1)}))},children:[Object(r.jsxs)(O.a.Group,{id:"email",children:[Object(r.jsx)(O.a.Label,{children:"Email"}),Object(r.jsx)(O.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(r.jsxs)(O.a.Group,{id:"password",children:[Object(r.jsx)(O.a.Label,{children:"Password"}),Object(r.jsx)(O.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(r.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(r.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(r.jsx)(O.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(r.jsx)(p.a,{disabled:v,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(r.jsx)("div",{className:"w-100 text-center mt-2",children:Object(r.jsx)(_.b,{to:"/",children:"Cancel"})})]})}var D=function(){return Object(r.jsx)(w.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(r.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(r.jsx)(_.a,{children:Object(r.jsx)(v,{children:Object(r.jsxs)(E.d,{children:[Object(r.jsx)(A,{exact:!0,path:"/",component:g}),Object(r.jsx)(A,{path:"/update-profile",component:y}),Object(r.jsx)(E.b,{path:"/signup",component:P}),Object(r.jsx)(E.b,{path:"/login",component:T}),Object(r.jsx)(E.b,{path:"/forgot-password",component:N})]})})})})})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(D,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.45b1fe28.chunk.js.map
(this.webpackJsonptypezilla=this.webpackJsonptypezilla||[]).push([[6],{423:function(e,r,n){"use strict";n.r(r);var t,a,s,i,c,o,d,b=n(24),u=n(0),j=n(419),p=n(8),l=n.n(p),m=n(31),O=n(29),h=n(390),g=n(391),x=n(106),w=n(108),f=n(162),y=n(395),v=n(396),k=n(164),S=Object(v.a)(k.a)(t||(t=Object(y.a)(["\n  width: 100%;\n  padding: 0;\n"]))),z=n(6),I=function(e){var r=e.onError;Object(x.b)("Log in");var n=Object(w.a)().login,t=Object(f.a)(void 0,{throwOnError:!0}),a=t.asyncRun,s=t.isLoading,i=function(){var e=Object(O.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(m.a)(Object(m.a)({},t),{},{username:t.username.trim(),password:t.password.trim()}),e.prev=1,e.next=4,a(n(s));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),r(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(r){return e.apply(this,arguments)}}();return Object(z.jsxs)(h.a,{onFinish:i,children:[Object(z.jsx)(h.a.Item,{name:"username",rules:[{required:!0,message:"Please enter your username"}],children:Object(z.jsx)(g.a,{type:"text",id:"username",placeholder:"Username",style:{fontSize:14}})}),Object(z.jsx)(h.a.Item,{name:"password",rules:[{required:!0,message:"Please enter your password"}],children:Object(z.jsx)(g.a,{type:"password",id:"password",placeholder:"Password",style:{fontSize:14}})}),Object(z.jsx)(h.a.Item,{children:Object(z.jsx)(S,{type:"primary",htmlType:"submit",loading:s,children:"Sign In"})})]})},P=n(107),E=Object(v.a)(k.a)(a||(a=Object(y.a)(["\n  width: 100%;\n  padding: 0;\n"]))),U=function(e){var r=e.onError;Object(x.b)("Sign Up");var n=Object(w.a)().register,t=Object(f.a)(void 0,{throwOnError:!0}),a=t.asyncRun,s=t.isLoading,i=function(){var e=Object(O.a)(l.a.mark((function e(t){var s,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.confirm_password,i=Object(P.a)(t,["confirm_password"]),c=Object(m.a)(Object(m.a)({},i),{},{username:i.username.trim(),password:i.password.trim()}),(s=s.trim())===c.password){e.next=6;break}return r(new Error("Passwords do not match")),e.abrupt("return");case 6:return e.prev=6,e.next=9,a(n(c));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),r(e.t0);case 14:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(r){return e.apply(this,arguments)}}();return Object(z.jsxs)(h.a,{onFinish:i,children:[Object(z.jsx)(h.a.Item,{name:"username",rules:[{required:!0,message:"Please enter your username"}],children:Object(z.jsx)(g.a,{type:"text",id:"username",placeholder:"Username",style:{fontSize:14}})}),Object(z.jsx)(h.a.Item,{name:"password",rules:[{required:!0,message:"Please enter your password"}],children:Object(z.jsx)(g.a,{type:"password",id:"password",placeholder:"Password",style:{fontSize:14}})}),Object(z.jsx)(h.a.Item,{name:"confirm_password",rules:[{required:!0,message:"Please confirm your password"}],children:Object(z.jsx)(g.a,{type:"password",id:"confirm_password",placeholder:"Confirm Password",style:{fontSize:14}})}),Object(z.jsx)(h.a.Item,{children:Object(z.jsx)(E,{type:"primary",htmlType:"submit",loading:s,children:"Sign Up"})})]})},q=n(426),L=n.p+"static/media/logo.efdfa8ed.svg",_=n.p+"static/media/right.050a1bf6.svg",C=n.p+"static/media/left.5a513e4f.svg",F=v.a.div(s||(s=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n"]))),J=Object(v.a)(q.a)(i||(i=Object(y.a)(["\n  width: 40rem;\n  min-height: 56rem;\n  padding: 3.2rem 4rem;\n  border-radius: 0.3rem;\n  box-sizing: border-box;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;\n  text-align: center;\n"]))),R=v.a.header(c||(c=Object(y.a)(["\n  background: url(",") no-repeat center;\n  padding: 5rem;\n  background-size: 16rem;\n  background-position-x: 49%;\n  width: 100%;\n"])),L),T=v.a.div(o||(o=Object(y.a)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: left bottom, right top;\n  background-size: 35%, 35%, contain;\n  background-image: url(","), url(",");\n  opacity: 0.55;\n"])),C,_),A=v.a.h2(d||(d=Object(y.a)(["\n  margin-bottom: 2.4rem;\n  color: rgb(94, 108, 132);\n"]))),N=n(165);r.default=function(){var e=Object(u.useState)(!1),r=Object(b.a)(e,2),n=r[0],t=r[1],a=Object(u.useState)(null),s=Object(b.a)(a,2),i=s[0],c=s[1];return Object(z.jsxs)(F,{children:[Object(z.jsx)(R,{}),Object(z.jsx)(T,{}),Object(z.jsxs)(J,{children:[Object(z.jsx)(A,{children:n?"Sign Up":"Log In"}),i&&Object(z.jsx)(N.a,{error:i}),n?Object(z.jsx)(U,{onError:c}):Object(z.jsx)(I,{onError:c}),Object(z.jsx)(j.a,{}),Object(z.jsx)("span",{children:n?"Already a user?":"Not a user?"}),Object(z.jsx)(k.a,{type:"link",size:"small",onClick:function(){t(!n)},children:n?"Sign In":"Sign Up"})]})]})}}}]);
//# sourceMappingURL=6.b0f7f581.chunk.js.map
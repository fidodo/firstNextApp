(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{8096:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return e(8310)}])},8310:function(n,r,e){"use strict";e.r(r);var t=e(4051),i=e.n(t),s=e(5893),c=e(1664),a=e(1704),o=e(4968),u=e(1395),h=e(2154),l=e(824),d=e(6029),f=e(8534),x=e(8100),m=e(1163);function j(n,r,e,t,i,s,c){try{var a=n[s](c),o=a.value}catch(u){return void e(u)}a.done?r(o):Promise.resolve(o).then(t,i)}var g=function(){var n,r=(n=i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(r);case 2:if((e=n.sent).ok){n.next=5;break}throw Error("NO that's NOT OK!!!");case 5:return n.next=7,e.json();case 7:return t=n.sent,n.abrupt("return",t);case 9:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(t,i){var s=n.apply(r,e);function c(n){j(s,t,i,c,a,"next",n)}function a(n){j(s,t,i,c,a,"throw",n)}c(void 0)}))});return function(n){return r.apply(this,arguments)}}(),v=function(){var n=(0,m.useRouter)().query.id,r=(0,x.ZP)("/api/user/".concat(n),g),e=r.data,t=r.error;return t?(0,s.jsxs)(a.bZ,{status:"error",children:["Loading failed: ",t.message]}):e?(0,s.jsxs)(o.Z,{columns:2,width:"2xs",spacingY:4,children:[(0,s.jsx)(u.Z,{fontWeight:"bold",marginRight:4,children:"UserID"}),(0,s.jsx)(u.Z,{children:e.id}),(0,s.jsx)(u.Z,{fontWeight:"bold",marginRight:4,children:"Name"}),(0,s.jsx)(u.Z,{children:e.name}),(0,s.jsx)(u.Z,{fontWeight:"bold",marginRight:4,children:"Email"}),(0,s.jsx)(u.Z,{children:e.email})]}):(0,s.jsx)(a.bZ,{status:"info",children:"Loading..."})};r.default=function(){return(0,s.jsx)(h.ZP,{children:(0,s.jsxs)(l.Z,{flexDirection:"column",alignItems:"center",children:[(0,s.jsx)(d.Z,{marginY:"2rem",children:"User"}),(0,s.jsx)(v,{}),(0,s.jsx)(c.default,{href:"/",children:(0,s.jsx)(f.Z,{marginY:"2rem",children:(0,s.jsx)(u.Z,{fontStyle:"italic",children:"Go back home"})})})]})})}}},function(n){n.O(0,[226,265,774,888,179],(function(){return r=8096,n(n.s=r);var r}));var r=n.O();_N_E=r}]);
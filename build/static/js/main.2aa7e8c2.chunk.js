(this["webpackJsonptwig-coding-challenge"]=this["webpackJsonptwig-coding-challenge"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(16),i=n.n(s),u=n(7),o=n.n(u),j=n(17),l=n(3),b=(n(26),n(27),function(){return Object(r.jsxs)("section",{className:"Header",children:[Object(r.jsx)("h1",{children:"Twig Education"}),Object(r.jsx)("h2",{children:"Coding Challenge - Jakub Czaja"})]})}),m=(n(28),n(19));function O(e,t){if(!/^\+?(1|[1-9]\d*)$/.test(t))return e;for(var n=Object(m.a)(e),r=[],c=Math.ceil(e.length/t),a=0;a<t;a++)r.push(n.splice(0,c));return r}var d=function(e){var t=e.items,n=e.isLoading,c=e.rows;return console.log(c),n?Object(r.jsx)("h3",{children:"loading..."}):Object(r.jsx)("section",{className:"UserList",children:Object(r.jsx)("ul",{children:O(t,c).map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))})})},f=(n(29),function(e){var t=e.getNames,n=e.getRows,a=Object(c.useState)(5),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(3),j=Object(l.a)(o,2),b=j[0],m=j[1];return Object(r.jsx)("section",{className:"Controls",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{htmlFor:"numberOfNames",children:"Number of random names "}),Object(r.jsx)("input",{type:"number",name:"Number of Names",id:"numberOfNames",min:"1",max:"99",value:i,onChange:function(e){return n=e.target.value,u(n),void t(n);var n}}),Object(r.jsx)("label",{htmlFor:"numberOfNames",children:"Number of rows "}),Object(r.jsx)("input",{type:"number",name:"Number of Rows",id:"numberOfRows",min:"1",max:"99",value:b,onChange:function(e){return t=e.target.value,m(t),void n(t);var t}})]})})}),h=n(18),g=n.n(h),x=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!0),i=Object(l.a)(s,2),u=i[0],m=i[1],O=Object(c.useState)(5),h=Object(l.a)(O,2),x=h[0],p=h[1],v=Object(c.useState)(3),w=Object(l.a)(v,2),N=w[0],C=w[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.request({url:"https://randomuser.me/api",method:"get",params:{inc:"name,login",results:x}});case 2:t=e.sent,a(t.data.results.map((function(e){return Object(r.jsxs)("span",{children:[e.name.title," ",e.name.first," ",e.name.last]})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){return m(!1)}))}),[x,N]),Object(r.jsxs)("div",{className:"Container",children:[Object(r.jsx)(b,{}),Object(r.jsx)(f,{getNames:function(e){return p(e)},getRows:function(e){return C(e)}}),Object(r.jsx)(d,{isLoading:u,items:n,rows:N})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.2aa7e8c2.chunk.js.map
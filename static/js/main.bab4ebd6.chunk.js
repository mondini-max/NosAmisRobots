(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),c=r(7),a=r.n(c),i=(r(12),r(2)),o=r(3),h=r(5),l=r(4),j=r(0),d=function(e){var t=e.id,r=e.name,n=e.email;return Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"profil"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:r}),Object(j.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(j.jsx)("div",{children:t.map((function(e,r){return Object(j.jsx)(d,{id:t[r].id,name:t[r].name,username:t[r].username,email:t[r].email},r)}))})},u=function(e){var t=e.searchChange;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"retrouvez votre amis",onChange:t})})},f=(r(14),function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(i.a)(this,r),(e=t.call(this)).state={hasError:!1},e}return Object(o.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"Oops, Quelques chose ne va pas ! "}):this.props.children}}]),r}(n.Component)),m=function(e){return Object(j.jsx)("div",{style:{overflowY:"scroll",border:"1px dashed black",height:"600px"},children:e.children})},O=function(){return Object(j.jsxs)("footer",{className:"pv4 ph3 ph5-m ph6-l mid-gray",children:[Object(j.jsxs)("small",{className:"f6 db tc",children:["\xa9 2021"," ",Object(j.jsxs)("b",{className:"ttu",children:["made by \ud83d\udc96"," ",Object(j.jsx)("a",{href:"https://github.com/moshtaghfr",title:"juste for fun",className:"f6 dib ph2 link mid-gray dim",target:"_blank",rel:"noreferrer",children:"moshtagh"})," "]})," ","All Rights Reserved"]}),Object(j.jsx)("div",{className:"tc mt3",children:Object(j.jsx)("a",{href:"/",title:"juste for fun",className:"f6 dib ph2 link mid-gray dim",children:"just for fun \ud83d\ude05"})})]})},p=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(i.a)(this,r),(e=t.call(this)).onSearchChange=function(t){var r=t.target.value;e.setState({searchfield:r})},e.state={robots:[],searchfield:""},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,r=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return t.length?Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{className:"f2",children:"Nos amis robots"}),Object(j.jsx)(u,{searchChange:this.onSearchChange}),Object(j.jsx)(m,{children:Object(j.jsx)(f,{children:Object(j.jsx)(b,{robots:n})})}),Object(j.jsx)(O,{})]}):Object(j.jsx)("h1",{children:"Loading"})}}]),r}(n.Component);r(15);a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bab4ebd6.chunk.js.map
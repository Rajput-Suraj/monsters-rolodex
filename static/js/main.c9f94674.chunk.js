(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),r=n.n(s),a=n(12),o=n.n(a),i=(n(23),n(13)),h=n(14),l=n(17),u=n(16),d=n(15),j=n.n(d),m=(n(41),n(42),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:e.monster.username}),Object(c.jsx)("h2",{children:e.monster.name}),Object(c.jsx)("p",{children:e.monster.email})]})}),b=(n(43),function(e){return Object(c.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(c.jsx)(m,{monster:e},e.id)}))})}),f=(n(44),function(e){var t=e.placeholder,n=e.handleSearch;return Object(c.jsx)("input",{className:"search",type:"search",onChange:n,placeholder:t})}),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e.setState({monsters:t.data})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Monster Rolodex"}),Object(c.jsx)(f,{handleSearch:this.handleChange,placeholder:"Search monsters"}),Object(c.jsx)(b,{monsters:s})]})}}]),n}(s.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.c9f94674.chunk.js.map
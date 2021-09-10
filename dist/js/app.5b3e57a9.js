(function(t){function e(e){for(var a,n,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark"},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/create"}},[t._v("Create Post")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/posts"}},[t._v("Posts")])],1)])]),s("br"),s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1)},r=[],n={},i=n,l=(s("034f"),s("2877")),c=Object(l["a"])(i,o,r,!1,null,null,null),u=c.exports,p=(s("ab8b"),s("8c4f")),d=s("130e"),v=s("bc3a"),m=s.n(v),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[t._v("Home Component")]),s("div",{staticClass:"card-body"},[t._v(" I'm the Home Component component. ")])])])])}],b={},_=b,C=Object(l["a"])(_,f,h,!1,null,null,null),y=C.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Create A Post")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addPost.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Post Title:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Post Body:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),s("br"),t._m(0)])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary"},[t._v("Create")])])}],P={data(){return{post:{}}},methods:{addPost(){let t="http://localhost:4000/posts/add";this.axios.post(t,this.post).then(()=>{this.$router.push({name:"posts"})})}}},w=P,$=Object(l["a"])(w,g,x,!1,null,null,null),O=$.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Posts")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10"}),s("div",{staticClass:"col-md-2"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"create"}}},[t._v("Create Post")])],1)]),s("br"),s("table",{staticClass:"table table-hover"},[t._m(0),s("tbody",t._l(t.posts,(function(e){return s("tr",{key:e._id},[s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.body))]),s("td",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edit",params:{id:e._id}}}},[t._v("Edit")])],1),s("td",[s("button",{staticClass:"btn btn-danger",on:{click:function(s){return s.preventDefault(),t.deletePost(e._id)}}},[t._v("Delete")])])])})),0)])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Title")]),s("th",[t._v("Body")]),s("th",[t._v("Actions")])])])}],E={data(){return{posts:[]}},created(){let t="http://localhost:4000/posts";this.axios.get(t).then(t=>{this.posts=t.data})},methods:{deletePost(t){let e="http://localhost:4000/posts/delete/"+t;this.axios.delete(e).then(e=>{this.posts.splice(this.posts.indexOf(t),1)})}}},T=E,S=Object(l["a"])(T,j,k,!1,null,null,null),D=S.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Edit Post")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.updatePost.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Post Title: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Post Body: ")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),s("br"),t._m(0)])])},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary"},[t._v("Update")])])}],B={data(){return{post:{}}},created(){let t="http://localhost:4000/posts/edit/"+this.$route.params.id;this.axios.get(t).then(t=>{this.post=t.data})},methods:{updatePost(){let t="http://localhost:4000/posts/update/"+this.$route.params.id;this.axios.post(t,this.post).then(()=>{this.$router.push({name:"posts"})})}}},H=B,A=Object(l["a"])(H,M,N,!1,null,null,null),J=A.exports;a["a"].use(p["a"]),a["a"].use(d["a"],m.a),a["a"].config.productionTip=!1;const I=[{name:"home",path:"/",component:y},{name:"create",path:"/create",component:O},{name:"posts",path:"/posts",component:D},{name:"edit",path:"/edit/:id",component:J}],U=new p["a"]({mode:"history",routes:I});new a["a"](a["a"].util.extend({router:U},u)).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.5b3e57a9.js.map
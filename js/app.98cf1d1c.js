(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function i(t){return s.p+"js/"+({about:"about","back-news":"back-news",backside:"backside",contact:"contact",home:"home",infor:"infor",news:"news",shop:"shop"}[t]||t)+"."+{about:"a409f812","back-news":"d1f493bb",backside:"24172284",contact:"ef53e9ba",home:"f4380d1c",infor:"a70ff006",news:"35f700d8",shop:"1ddb238a"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{id:"aa",toggleable:"lg",type:"dark",variant:"danger"}},[n("b-container",[n("router-link",{staticClass:"d-flex align-items-center col-8 col-lg-11",attrs:{to:"/"}},[n("img",{attrs:{src:"./assets/breakfast.svg"}}),n("b-navbar-brand",{attrs:{href:"/"}},[n("h2",{staticClass:"ml-3"},[t._v("家榮早餐")]),n("h5",{staticClass:"ml-3"},[t._v("J.R breakfast")])])],1)],1)],1),n("div",{attrs:{id:"aa"}},[n("b-navbar",{staticClass:"pb-2",attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("b-navbar-brand"),n("b-container",[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/about"}},[t._v("關於我們")]),n("b-nav-item",{attrs:{to:"/news"}},[t._v("活動消息")]),n("b-nav-item",{attrs:{to:"/shop"}},[t._v("產品介紹")]),n("b-nav-item",{attrs:{to:"/contact"}},[t._v("聯絡我們")])],1)],1),n("b-collapse",{staticClass:"justify-content-end",attrs:{"is-nav":""}},[n("b-navbar-nav",[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("span",[t._v("管理選項")])]},proxy:!0}])},[0===t.user.length?n("b-dropdown-item",{attrs:{to:"/login"}},[t._v("登入")]):n("b-dropdown-item",{attrs:{to:"/backside"}},[t._v("後台管理")]),n("b-dropdown-item",{attrs:{to:"/back-news"}},[t._v("消息管理")]),0===t.user.length?n("b-dropdown-item",{attrs:{to:"/reg"}},[t._v("註冊")]):n("b-dropdown-item",{on:{click:t.logout}},[t._v("登出")])],1)],1)],1)],1)],1)],1),n("router-view"),n("div",{staticClass:"float p-1"},[n("p",{staticClass:"text-white text-center mt-3"},[t._v("Copyright © 2020 J.R breakfast All Rights Reserved")]),n("p",{staticClass:"text-white text-center m-2"},[n("a",{attrs:{href:"https://zh-tw.facebook.com/"}},[n("font-awesome-icon",{staticClass:"mr-5",attrs:{icon:["fab","facebook-square"],size:"3x"}})],1),n("a",{attrs:{href:"https://line.me/zh-hant/"}},[n("font-awesome-icon",{attrs:{icon:["fab","line"],size:"3x"}})],1)])])],1)},r=[],i={name:"App",data:function(){return{Height:0}},computed:{user:function(){return this.$store.getters.user}},methods:{logout:function(){var t=this;this.axios.delete("https://jrbreakfast.herokuapp.com/logout").then((function(e){var n=e.data;n.success?(alert("登出成功"),t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/")):alert(n.message)})).catch((function(t){alert(t.response.data.message)}))},heartbeat:function(){var t=this;this.axios.get("https://jrbreakfast.herokuapp.com/heartbeat").then((function(e){var n=e.data;t.user.length>0&&(n||(alert("登入時效已過"),t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/")))})).catch((function(){alert("發生錯誤"),t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/")}))}},mounted:function(){var t=this;this.Height=document.documentElement.clientHeight-100,window.onresize=function(){t.Height=document.documentElement.clientHeight-100},this.heartbeat(),setInterval((function(){t.heartbeat()}),5e3)}},s=i,c=n("2877"),u=Object(c["a"])(s,a,r,!1,null,null,null),l=u.exports,f=(n("b0c0"),n("d3b7"),n("8c4f")),d=n("2f62"),p=n("0e44");o["default"].use(d["a"]);var b=new d["a"].Store({state:{user:""},mutations:{login:function(t,e){t.user=e},logout:function(t){t.user=""}},getters:{user:function(t){return t.user}},plugins:[Object(p["a"])()]});o["default"].use(f["a"]);var h=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))},meta:{title:"家榮早餐"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{title:"家榮早餐"}},{path:"/shop",name:"Shop",component:function(){return n.e("shop").then(n.bind(null,"0fa5"))},meta:{title:"家榮早餐"}},{path:"/news",name:"News",component:function(){return n.e("news").then(n.bind(null,"a2f9"))},meta:{title:"家榮早餐"}},{path:"/back-news",name:"Back-news",component:function(){return n.e("back-news").then(n.bind(null,"c438"))},meta:{login:!0,title:"最新消息管理"}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))},meta:{title:"聯絡我們"}},{path:"/login",name:"Login",component:function(){return n.e("contact").then(n.bind(null,"a55b"))},meta:{login:!1,title:"管理 | 登入"}},{path:"/reg",name:"Reg",component:function(){return n.e("contact").then(n.bind(null,"b8b8"))},meta:{login:!1,title:"家榮早餐"}},{path:"/backside",name:"Backside",component:function(){return n.e("backside").then(n.bind(null,"d1de"))},meta:{title:"家榮早餐",login:!0}},{path:"/infor",name:"Infor",component:function(){return n.e("infor").then(n.bind(null,"e252"))},meta:{title:"家榮早餐"}}],m=new f["a"]({routes:h});m.beforeEach((function(t,e,n){t.meta.login&&!b.state.user?n("/login"):n()})),m.afterEach((function(t,e){document.title="Backside"!==t.name?t.meta.title:"後臺管理"}));var g=m,v=n("bc3a"),w=n.n(v),k=n("a7fe"),y=n.n(k),_=n("fb9a"),j=n.n(_),x=n("0edc"),C=n.n(x),O=n("77ed"),$=n.n(O),E=n("ad3d"),P=n("ecee"),S=n("b702"),A=n("c074"),H=n("f2d1"),z=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(z["a"]);n("0cdd"),n("fe75");var R=n("9483");Object(R["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("04f2"),n("c789");P["c"].add(S["a"],A["b"],S["b"],H["a"],H["b"],A["a"]),o["default"].component("font-awesome-icon",E["a"]),o["default"].config.productionTip=!1,w.a.defaults.withCredentials=!0,o["default"].use(y.a,w.a),o["default"].use(j.a),o["default"].use(C.a),o["default"].use($.a),new o["default"]({router:g,store:b,render:function(t){return t(l)}}).$mount("#app")},fe75:function(t,e,n){}});
//# sourceMappingURL=app.98cf1d1c.js.map
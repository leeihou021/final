(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{a55b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"login"}},[s("div",{attrs:{id:"top"}},[s("div",{attrs:{id:"title-back"}}),s("h1",{staticClass:"m-0"},[t._v("管理登入")]),s("img",{attrs:{src:"/img/carousel_04.jpg"}})]),s("b-container",{staticClass:"mt-5"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"text-center"},[t._v("登入")]),s("div",{staticClass:"d-flex justify-content-center"},[s("b-form",{on:{submit:t.submit}},[s("b-form-group",{attrs:{label:"帳號","label-for":"input-account",description:"帳號長度為 4 - 20 個字","invalid-feedback":"帳號格式不符",state:t.state("account")}},[s("b-form-input",{attrs:{id:"input-account",type:"text",state:t.state("account")},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}})],1),s("b-form-group",{attrs:{label:"密碼","label-for":"input-password",description:"密碼長度為 4 - 20 個字","invalid-feedback":"密碼格式不符",state:t.state("password")}},[s("b-form-input",{attrs:{id:"input-password",type:"password",state:t.state("password")},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("登入")])],1)],1)])],1)],1)],1)},n=[],c={name:"login",data:function(){return{account:"",password:""}},methods:{state:function(t){return"account"===t?0===this.account.length?null:!(this.account.length<4||this.account.length>20):"password"===t?0===this.account.length?null:!(this.password.length<4||this.password.length>20):void 0},submit:function(t){var a=this;t.preventDefault(),this.account.length<4||this.account.length>20?alert("帳號格式不符"):(this.password.length<4||this.password.length>20)&&alert("密碼格式不符"),this.axios.post("https://jrbreakfast.herokuapp.com/login",{account:this.account,password:this.password}).then((function(t){var s=t.data;s.success?(alert("登入成功"),a.$store.commit("login",a.account),a.$router.push("backside")):alert(s.message)})).catch((function(t){alert(t.response.data.message)}))}}},i=c,o=s("2877"),r=Object(o["a"])(i,e,n,!1,null,null,null);a["default"]=r.exports},b8b8:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"reg"}},[s("div",{attrs:{id:"top"}},[s("div",{attrs:{id:"title-back"}}),s("h1",{staticClass:"m-0"},[t._v("後台註冊")]),s("img",{staticClass:"top-img",attrs:{src:"/img/carousel_03.jpg"}})]),s("b-container",{staticClass:"mt-5"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"text-center"},[t._v("註冊")]),s("div",{staticClass:"line d-flex justify-content-center"},[s("b-form",{on:{submit:t.submit}},[s("b-form-group",{attrs:{label:"帳號","label-for":"input-account",description:"帳號長度為 4 - 20 個字","invalid-feedback":"帳號格式不符",state:t.state("account")}},[s("b-form-input",{attrs:{id:"input-account",type:"text",state:t.state("account")},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}})],1),s("b-form-group",{attrs:{label:"密碼","label-for":"input-password",description:"密碼長度為 4 - 20 個字","invalid-feedback":"密碼格式不符",state:t.state("password")}},[s("b-form-input",{attrs:{id:"input-password",type:"password",state:t.state("password")},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("註冊")])],1)],1)])],1)],1)],1)},n=[],c={name:"reg",data:function(){return{account:"",password:""}},methods:{state:function(t){return"account"===t?0===this.account.length?null:!(this.account.length<4||this.account.length>20):"password"===t?0===this.account.length?null:!(this.password.length<4||this.password.length>20):void 0},submit:function(t){var a=this;t.preventDefault(),this.account.length<4||this.account.length>20?alert("帳號格式不符"):(this.password.length<4||this.password.length>20)&&alert("密碼格式不符"),this.axios.post("https://jrbreakfast.herokuapp.com/users",{account:this.account,password:this.password}).then((function(t){var s=t.data;s.success?(alert("註冊成功"),a.$store.commit("login",a.account),a.$router.push("/login")):alert(s.message)})).catch((function(t){alert(t.response.data.message)}))}}},i=c,o=s("2877"),r=Object(o["a"])(i,e,n,!1,null,null,null);a["default"]=r.exports},b8fa:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"contact"}},[s("div",{attrs:{id:"top"}},[s("div",{attrs:{id:"title-back"}}),s("h1",{staticClass:"m-0"},[t._v("聯絡我們")]),s("img",{attrs:{src:"/img/carousel_04.jpg"}})]),s("div",{attrs:{id:"contact-box"}},[s("div",{staticClass:"container mt-5 p-5"},[s("h3",[t._v("若有任何問題或建議，歡迎隨時來信與我們聯繫，我們會儘快處理並回覆您的意見 !")]),s("div",{staticClass:"d-flex flex-wrap mb-3"}),s("div",{staticClass:"d-flex flex-wrap"},[s("div",{staticClass:"mr-2"},[s("font-awesome-icon",{attrs:{icon:["far","clock"],size:"lg"}})],1),s("p",[t._v("客服時間：週一至週五 10:00至12:00 / 13:00至16:00")])]),s("div",[s("div",{staticClass:"d-flex flex-wrap"},[s("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas","phone-square-alt"],size:"lg"}}),s("p",[t._v("TEL：02-4953-6511")])],1),s("div",{staticClass:"d-flex flex-wrap"},[s("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["far","envelope"],size:"lg"}}),s("p",[t._v("Email：contact@JRbreakfast.com.tw")])],1),s("div",{staticClass:"contact-table"},[s("div",{staticClass:"container p-0"},[s("img",{attrs:{src:"/img/contact.png",alt:""}})])])])])])])},n=[],c=(s("b0c0"),{computed:{state:function(){return this.name.length>=3},invalidFeedback:function(){return this.name.length>3?"":this.name.length>0?"Enter at least 4 characters":"Please enter something"},validFeedback:function(){return!0===this.state?"Thank you":""}},data:function(){return{name:"",selected:""}}}),i=c,o=s("2877"),r=Object(o["a"])(i,e,n,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=contact.ef53e9ba.js.map
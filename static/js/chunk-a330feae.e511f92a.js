(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a330feae"],{2017:function(t,e,n){"use strict";n("cafe")},"9a27":function(t,e,n){},"9c21":function(t,e,n){"use strict";n("9a27")},"9ed6":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-card",{staticClass:"login-card"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v("账户登录")])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("i",{staticClass:"el-icon-message"})]),n("el-input",{ref:"username",attrs:{placeholder:"Tongji Email",name:"email",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.loginForm.email,callback:function(e){t.$set(t.loginForm,"email",e)},expression:"loginForm.email"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),n("div",[n("a",{staticStyle:{color:"white"}},[t._v("忘记密码？")])]),n("el-button",{staticStyle:{float:"left",width:"48%","margin-top":"10px","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("Login")]),n("el-button",{staticStyle:{width:"48%","margin-top":"10px","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.studentRegister(e)}}},[t._v("StudentRegister")]),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("Tongji Email: 请输入同济邮箱")])])],1)],1)],1)},o=[],i=n("61f7"),a={name:"Login",data:function(){var t=function(t,e,n){Object(i["b"])(e)?n():n(new Error("Please enter the correct user name"))},e=function(t,e,n){e.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"admin",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1})).catch((function(){t.loading=!1}))}))},studentRegister:function(){this.$router.push("/Register")}}},r=a,l=(n("2017"),n("9c21"),n("2877")),c=Object(l["a"])(r,s,o,!1,null,"6158dc50",null);e["default"]=c.exports},cafe:function(t,e,n){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ba6315f"],{"0d97":function(t,e,r){"use strict";r("63ea")},4565:function(t,e,r){"use strict";r("6bec")},"49e5":function(t,e,r){"use strict";r.d(e,"e",(function(){return a})),r.d(e,"f",(function(){return s})),r.d(e,"g",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return c})),r.d(e,"d",(function(){return d}));r("d3b7"),r("3ca3"),r("ddb0"),r("9861");var n=r("b775");function a(t){var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/student/sendRegisterEmail",method:"post",data:e})}function s(t){t.studentPassword=r("6c27").sha256(t.studentPassword);var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/student/updateInformation",method:"post",data:e})}function i(t){return Object(n["a"])({url:"/api/student/submitReport",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:JSON.stringify(t)})}function o(t){return Object(n["a"])({url:"/api/student/getReportState",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/api/student/getLabReportId",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/api/student/addStudent",method:"post",params:t})}function d(t){return Object(n["a"])({url:"/api/student/getStudentList",method:"get",params:t})}},"63ea":function(t,e,r){},"6bec":function(t,e,r){},d5c2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-container"},[r("el-card",{staticClass:"login-card"},[r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.registerForm,"auto-complete":"on","label-position":"left"}},[r("div",{staticClass:"title-container"},[r("h3",{staticClass:"title"},[t._v("账户注册")])]),r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{ref:"username",attrs:{placeholder:"请输入您的Tongji邮箱",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.registerForm.email,callback:function(e){t.$set(t.registerForm,"email",e)},expression:"registerForm.email"}})],1),r("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleRegister(e)}}},[t._v("发送注册邮件")]),r("div",{staticClass:"tips"},[r("span",{staticStyle:{"margin-right":"20px"}},[t._v("请不要输入其他邮箱哦！")])])],1)],1)],1)},a=[],s=r("61f7"),i=r("49e5"),o={name:"Register",data:function(){var t=function(t,e,r){Object(s["b"])(e)?r():r(new Error("Please enter the correct user name"))},e=function(t,e,r){e.length<6?r(new Error("The password can not be less than 6 digits")):r()};return{registerForm:{email:""},registerRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleRegister:function(){var t=this;Object(i["e"])(this.registerForm).then((function(e){var r=e;console.log(r),"success"==r.sentState?(console.log("注册邮件已发送"),t.$message({message:"注册邮件已发送至"+r.email,type:"success"}),window.open("https://mail.tongji.edu.cn","_blank")):t.$message.error(r.sentState)}))}}},u=o,c=(r("4565"),r("0d97"),r("2877")),d=Object(c["a"])(u,n,a,!1,null,"d5a34aa2",null);e["default"]=d.exports}}]);
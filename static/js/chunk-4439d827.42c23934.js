(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4439d827"],{"04c5":function(t,e,s){},"49e5":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return a})),s.d(e,"d",(function(){return o})),s.d(e,"a",(function(){return i}));s("d3b7"),s("3ca3"),s("ddb0"),s("9861");var r=s("b775");function n(t){var e=new URLSearchParams(t);return Object(r["a"])({url:"/api/student/sendRegisterEmail",method:"post",data:e})}function a(t){t.studentPassword=s("6c27").sha256(t.studentPassword);var e=new URLSearchParams(t);return Object(r["a"])({url:"/api/student/updateInformation",method:"post",data:e})}function o(t){return Object(r["a"])({url:"/api/student/submitReport",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:JSON.stringify(t)})}function i(t){return Object(r["a"])({url:"/api/student/getReportState",method:"get",params:t})}},"4e8b":function(t,e,s){},a48c:function(t,e,s){"use strict";s("04c5")},dfb0:function(t,e,s){"use strict";s("4e8b")},eb69:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-container"},[s("el-card",{staticClass:"login-card"},[s("el-form",{ref:"registerForm",staticClass:"login-form",attrs:{model:t.registerForm,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[t._v("账户注册")])]),s("span",{staticClass:"word-title"},[t._v("真实姓名")]),s("el-form-item",{attrs:{prop:"studentName"}},[s("el-input",{ref:"studentName",attrs:{placeholder:"请输入您的学生姓名",name:"studentName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.registerForm.studentName,callback:function(e){t.$set(t.registerForm,"studentName",e)},expression:"registerForm.studentName"}})],1),s("span",{staticClass:"word-title"},[t._v("昵称")]),s("el-form-item",{attrs:{prop:"studentNickname"}},[s("el-input",{ref:"studentNickname",attrs:{placeholder:"请输入您的昵称",name:"studentNickname",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.registerForm.studentNickname,callback:function(e){t.$set(t.registerForm,"studentNickname",e)},expression:"registerForm.studentNickname"}})],1),s("span",{staticClass:"word-title"},[t._v("密码")]),s("el-form-item",{attrs:{prop:"studentPassword"}},[s("el-input",{ref:"studentPassword",attrs:{placeholder:"请输入您的注册密码",name:"studentPassword",type:"password",tabindex:"1","auto-complete":"on"},model:{value:t.registerForm.studentPassword,callback:function(e){t.$set(t.registerForm,"studentPassword",e)},expression:"registerForm.studentPassword"}})],1),s("span",{staticClass:"word-title"},[t._v("学号")]),s("el-form-item",{attrs:{prop:"studentId"}},[s("el-input",{ref:"studentId",attrs:{placeholder:"请输入您的学号",name:"studentId",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.registerForm.studentId,callback:function(e){t.$set(t.registerForm,"studentId",e)},expression:"registerForm.studentId"}})],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleRegister(e)}}},[t._v("完成注册")]),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"20px"}},[t._v("请不要输入其他邮箱哦！")])])],1)],1)],1)},n=[],a=s("61f7"),o=s("49e5"),i={name:"UpdateInformation",data:function(){var t=function(t,e,s){Object(a["b"])(e)?s():s(new Error("Please enter the correct user name"))},e=function(t,e,s){e.length<6?s(new Error("The password can not be less than 6 digits")):s()};return{registerForm:{email:"",studentName:"",studentNickname:"",studentPassword:"",code:"",studentId:""},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{setSha:function(){this.registerForm.studentPassword=s("6c27").sha256(this.registerForm.studentPassword)},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleRegister:function(){var t=this;console.log(this.registerForm.studentPassword),this.registerForm.code=this.$route.query.code,this.registerForm.email=this.$route.query.email,Object(o["c"])(this.registerForm).then((function(e){var s=e;console.log(s),"success"===s.status?(t.$message({message:"注册已完成！",type:"success"}),t.$router.push("/login")):t.$message.error("注册失败，请重试")}))}}},d=i,u=(s("dfb0"),s("a48c"),s("2877")),c=Object(u["a"])(d,r,n,!1,null,"000b8bf7",null);e["default"]=c.exports}}]);
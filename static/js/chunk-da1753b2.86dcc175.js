(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da1753b2"],{2636:function(t,e,a){"use strict";a("a74f")},"6ea0":function(t,e,a){},"8c97":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",[a("Navbar"),a("el-header",{staticClass:"fontTitle",staticStyle:{"background-position":"center","background-repeat":"no-repeat","background-size":"cover",opacity:"0.8","font-size":"24px"}},[t._v(" 个 人 信 息 ")]),a("el-main",{staticClass:"el-main",staticStyle:{"background-image":"url('http://121.5.175.203:8080/api/File/getfile/background2.jpg')","background-position":"center","background-repeat":"no-repeat","background-size":"cover","z-index":"0",opacity:"1"}},[a("el-form",{ref:"personalData",staticClass:"mainBorder",staticStyle:{background:"rgba(0,0,0,.5)","box-sizing":"border-box","box-shadow":"0 15px 25px rgba(0，0，0, 0.5)","border-radius":"10px"},attrs:{"label-position":"right",model:t.personalData,rules:t.rules,"label-width":"100px"}},[a("el-row",{attrs:{gutter:10}},[a("el-form-item",[a("el-col",{attrs:{span:12,offset:6}},[a("p",{staticClass:"fontNormal"})]),a("el-col",{attrs:{offset:8,span:12}},[a("div",{staticClass:"block"},[a("el-avatar",{attrs:{size:150,src:t.circleUrl,fit:"contain"}})],1)])],1),a("el-row",[a("el-col",{attrs:{span:5,offset:11}},[a("div",{staticClass:"file-upload"},[a("div",{staticClass:"file-upload-text"},[t._v("更新头像")]),a("input",{staticClass:"file-upload-input",attrs:{id:"upfile",name:"upfile",type:"file",accept:"image/*"},on:{change:function(e){return t.getFile(e)}}})])])],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-form-item",[a("el-col",{attrs:{span:2,offset:5}},[a("p",{staticClass:"fontNormal"},[t._v("邮箱:")])]),a("el-col",{attrs:{span:3,offset:0}},[a("p",{staticClass:"fontWrite"},[t._v(" "+t._s(t.personalData.email)+" ")])])],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-form-item",[a("el-col",{attrs:{span:2,offset:5}},[a("p",{staticClass:"fontNormal"},[t._v("昵称:")])]),a("el-col",{attrs:{span:8,offset:0}},[a("el-input",{staticClass:"fontWrite",staticStyle:{"margin-top":"20px"},attrs:{maxlength:"10","show-word-limit":""},model:{value:t.personalData.nickname,callback:function(e){t.$set(t.personalData,"nickname",e)},expression:"personalData.nickname"}})],1)],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-form-item",[a("el-col",{attrs:{span:2,offset:5}},[a("p",{staticClass:"fontNormal",staticStyle:{width:"60px"}},[t._v("学工号:")])]),a("el-col",{attrs:{span:3,offset:0}},[a("p",{staticClass:"fontWrite"},[t._v(" "+t._s(t.personalData.email)+" ")])])],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-form-item",{attrs:{prop:"newNickname"}},[a("el-col",{attrs:{span:2,offset:5}},[a("p",{staticClass:"fontNormal"},[t._v("身份:")])])],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-form-item",[a("el-col",{attrs:{span:2,offset:6}},[a("label",{staticClass:"fontNormal"},[t._v("性别:")])]),a("el-col",{attrs:{span:8,offset:0}},[a("el-radio-group",{model:{value:t.personalData.sex,callback:function(e){t.$set(t.personalData,"sex",e)},expression:"personalData.sex"}},[a("el-radio",{attrs:{label:"male"}},[t._v("男")]),a("el-radio",{attrs:{label:"female"}},[t._v("女")]),a("el-radio",{attrs:{label:"secret"}},[t._v("保密")])],1)],1)],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-form-item",[a("el-col",{attrs:{span:2,offset:6}},[a("label",{staticClass:"fontNormal"},[t._v("密码:")])]),t.isClickPwd?a("el-col",{attrs:{span:3,offset:0}},[a("label",{staticClass:"fontPwd",on:{click:function(e){return t.changePwd()}}},[t._v("取消")])]):a("el-col",{attrs:{span:3,offset:0}},[a("label",{staticClass:"fontPwd",on:{click:function(e){return t.changePwd()}}},[t._v("修改密码")])]),t.isClickPwd?a("el-col",{attrs:{span:3,offset:0}},[a("label",{staticClass:"fontPwd",on:{click:function(e){return t.reset()}}},[t._v("重置密码")])]):t._e()],1)],1),t.isClickPwd?a("el-row",{attrs:{gutter:10}},[a("el-form-item",[a("el-col",{attrs:{span:4,offset:5}},[a("label",{staticClass:"fontNormal"},[t._v("旧密码:")])]),a("el-col",{attrs:{span:8,offset:0}},[a("el-input",{staticClass:"fontWrite",model:{value:t.oldPwd,callback:function(e){t.oldPwd=e},expression:"oldPwd"}})],1),t.pwdSame?t._e():a("el-col",{attrs:{span:12,offset:5}},[a("el-alert",{staticStyle:{height:"30px"},attrs:{title:"与原密码不符",type:"error"}})],1)],1)],1):t._e(),t.isClickPwd?a("el-row",{attrs:{gutter:10}},[a("el-form-item",[a("el-col",{attrs:{span:4,offset:5}},[a("label",{staticClass:"fontNormal"},[t._v("新密码:")])]),a("el-col",{attrs:{span:8,offset:0}},[a("el-input",{staticClass:"fontWrite",model:{value:t.newPwd,callback:function(e){t.newPwd=e},expression:"newPwd"}})],1)],1)],1):t._e(),t.isClickPwd?a("el-row",{attrs:{gutter:10}},[a("el-form-item",[a("el-col",{attrs:{span:4,offset:5}},[a("label",{staticClass:"fontNormal"},[t._v("请再次密码:")])]),a("el-col",{attrs:{span:8,offset:0}},[a("el-input",{staticClass:"fontWrite",model:{value:t.newPwd2,callback:function(e){t.newPwd2=e},expression:"newPwd2"}})],1),t.newSame?t._e():a("el-col",{attrs:{span:12,offset:5}},[a("el-alert",{staticStyle:{height:"30px"},attrs:{title:"两次输入密码不一致",type:"error"}})],1)],1)],1):t._e(),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:2,offset:11}},[a("el-button",{attrs:{type:"success",plain:"",icon:"el-icon-check"},on:{click:function(e){return t.confirme()}}},[t._v("确认修改")])],1)],1),a("el-row",{attrs:{gutter:10}})],1)],1)],1)],1)},i=[],l=a("ade3"),o=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("div",{staticClass:"right-menu"},[a("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[a("div",{staticClass:"avatar-wrapper"},[a("img",{staticClass:"user-avatar",attrs:{src:t.avatar+"?imageView2/1/w/80/h/80"}}),a("i",{staticClass:"el-icon-caret-bottom"})]),a("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.Personal(e)}}},[t._v(" 个人主页 ")]),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.Home(e)}}},[t._v("首页")]),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.SignIn(e)}}},[a("span",{staticStyle:{display:"block"}},[t._v("登录")])])],1)],1)],1)])}),n=[],r=a("5530"),c=a("2f62"),p=a("6350"),d=a("4f1e"),f={components:{Breadcrumb:p["a"],Hamburger:d["a"]},computed:Object(r["a"])({},Object(c["b"])(["sidebar","avatar"])),methods:{toggleSideBar:function(){this.$store.dispatch("app/toggleSideBar")},SignIn:function(){this.$router.push({path:"/SignIn"})},Personal:function(){this.$router.push({path:"/Personal"})},Home:function(){this.$router.push({path:"/"})}}},u=f,m=(a("f0b1"),a("2877")),h=Object(m["a"])(u,o,n,!1,null,"25e0f432",null),w=h.exports,g={name:"PersonalInfo",components:{Navbar:w},data:function(){var t;return t={imgAdd1:"1",userName1:"1",isLogIn1:"1",email1:"",isClickPwd:!1,file:"",oldPwd:"",newPwd:"",newPwd2:"",pwdSame:!0,newSame:!0,personalData:"",isSelect:!1,aaa:"contain",circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"},Object(l["a"])(t,"personalData",[{id:"idididid",email:"1953603@tongji.edu.cn",nickname:"candy",avatarUrl:"http://121.5.175.203:8080/api/File/getfile/chain.jpg",password:"thisispwd",sex:"male"}]),Object(l["a"])(t,"rules",{nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}]}),t},mounted:function(){var t=this,e="http://121.5.175.203:8080/api/Students/getInfo/"+this.email1;this.$axios.get(e).then((function(e){t.personalData=e.data}))},created:function(){this.imgAdd1=this.$route.query.imgAdd12,this.userName1=this.$route.query.userName12,this.isLogIn1=this.$route.query.isLogIn12,this.email1=this.$route.query.email12},methods:{changePwd:function(){this.isClickPwd=!this.isClickPwd,console.log(this.isClickPwd),console.log(this.imgAdd1),console.log(this.userName1),console.log(this.isLogIn1)},getFile:function(t){this.isSelect=!0,this.file=t.target.files[0],console.log(this.file),t.preventDefault();var e=new FormData;e.append("file",this.file);var a={headers:{"Content-Type":"multipart/form-data"}};console.log(this.file.name),this.$axios.post("http://121.5.175.203:8080/api/file/upload",e,a).then((function(t){200===t.status&&console.log(t.data)})),this.personalData.head_pic="http://121.5.175.203:8080/api/File/getfile/"+this.file.name,console.log(this.personalData.head_pic)},confirme:function(){var t=this,e=!0;if(1==this.isClickPwd&&(this.oldPwd!=this.personalData.password?this.pwdSame=!1:this.pwdSame=!0,this.newPwd!=this.newPwd2?this.newSame=!1:this.newSame=!0,this.pwdSame&&this.newSame||(e=!1)),e){this.$alert("您的个人信息已经修改成功","修改完成",{confirmButtonText:"确定",callback:function(e){t.$message({type:"success",message:"修改完成!"})}});var a="http://121.5.175.203:8080/api/students/changeInfo",s=new Object;if(s.name=this.personalData.nickname,1==this.isSelect?s.pic=this.file.name:s.pic=this.personalData.head_pic,s.email=this.personalData.email,s.sex=this.personalData.sex,console.log(this.personalData.nickname),console.log(this.personalData.sex),this.$axios.post(a,s).then((function(t){console.log(t.data)})),1==this.isClickPwd){var i="http://121.5.175.203:8080/api/students/changePwd",l=new Object;l.email=this.personalData.email,l.pwd=this.newPwd,this.$axios.post(i,l).then((function(t){console.log(t.data)}))}}},reset:function(){this.pwdSame=!0,this.newSame=!0,this.oldPwd="",this.newPwd="",this.newPwd2=""},log1:function(){console.log(this.imgAdd1),console.log(this.userName1),console.log(this.isLogIn1),console.log(this.email1)}}},b=g,v=(a("2636"),Object(m["a"])(b,s,i,!1,null,"01569007",null));e["default"]=v.exports},a74f:function(t,e,a){},f0b1:function(t,e,a){"use strict";a("6ea0")}}]);
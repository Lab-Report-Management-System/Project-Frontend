(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-377492d0"],{"373d":function(t,e,i){"use strict";i("fe72")},4950:function(t,e,i){"use strict";i("a7f6")},"6a4b":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("img",{staticClass:"backgroud",attrs:{alt:"background",src:"http://121.5.175.203:8080/api/File/getfile/background.png"}}),i("div",[i("signin",{staticClass:"signin1"})],1)])},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("login-box",{staticClass:"lg1"},[i("h2",{staticStyle:{font:"italic 1em Georgia, serif","font-size":"30px",position:"absolute",top:"7%",left:"25%","text-align":"center"}},[t._v("Welcome to Tribe!")]),i("form",{staticStyle:{padding:"10px",top:"12%",position:"absolute",width:"80%"}},[i("div",{staticClass:"user-box",staticStyle:{padding:"20px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),i("label",{staticStyle:{color:"#aaa","font-size":"20px","text-transform":"uppercase","letter-spacing":"2px","font-weight":"bold",padding:"15px"}},[t._v("Email/Username")])]),i("div",{staticClass:"user-box",staticStyle:{padding:"20px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),i("label",{staticStyle:{color:"#aaa","font-size":"20px","text-transform":"uppercase","letter-spacing":"2px","font-weight":"bold",padding:"15px"}},[t._v("Password")])]),t.passwordError?i("div",{staticClass:"error"},[t._v(t._s(t.passwordError))]):t._e(),i("div",{staticClass:"div1"},[i("router-link",{staticStyle:{height:"20px",width:"60px",background:"rgba(0,0,0,.5)"},attrs:{target:"_blank",to:{path:"/Register",query:{email:t.email,password:t.password}}}},[i("p",{staticStyle:{position:"absolute",left:"5%",height:"20px",font:"Georgia, serif",width:"60px","text-align":"center","font-size":"8px",color:"#666666"},attrs:{type:"info"}},[t._v(" 注册 ")])]),i("a",{staticClass:"wordPosition",staticStyle:{position:"absolute",top:"100%",left:"5%",height:"10px",width:"60px",color:"#666666",font:"Georgia, serif","text-align":"center","font-size":"8px"},attrs:{type:"info"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(" 忘记密码 ")])],1)]),i("el-dialog",{staticStyle:{width:"1200px",height:"1200px",position:"absolute",left:"-100%"},attrs:{visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{staticStyle:{width:"300px",height:"300px"},attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"邮箱账号","label-width":t.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),i("el-form-item",{staticClass:"Acode",attrs:{label:"验证码","label-width":t.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.identify,callback:function(e){t.$set(t.form,"identify",e)},expression:"form.identify"}}),i("el-button",{staticStyle:{position:"absolute",top:"55%",left:"120%"},attrs:{type:"primary",plain:"",disabled:t.flag},on:{click:t.getCaptcha}},[t._v(t._s(t.content))])],1),i("el-form-item",{attrs:{label:"新密码","label-width":t.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.pwd,callback:function(e){t.$set(t.form,"pwd",e)},expression:"form.pwd"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.dialogForm}},[t._v("确 定")])],1)],1),i("button",{staticClass:"button1",staticStyle:{padding:"10px",position:"absolute",top:"43%",width:"50%",left:"30%"},on:{click:function(e){return t.login()}}},[i("span"),i("span"),i("span"),i("span"),t._v(" Submit ")])],1)],1)},l=[],n={data:function(){return{email:"",password:"",role:"designer",term:!1,temSkill:"",skills:[],passwordError:"",dialogFormVisible:!1,form:{email:"",identify:"",pwd:""},active:0,flag:!1,content:"发送验证码",totalTime:60,icode:"",nameUser:"",picName:""}},methods:{login:function(){this.$router.push({path:"/"})},dialogForm:function(){if(""==this.form.email||""==this.form.pwd||""==this.form.identify)alert("信息错误");else{console.log(this.icode,"  ",this.form.identify);var t=parseInt(this.form.identify);if(console.log(this.icode,"  ",t),this.icode===t){console.log("yes");var e="http://121.5.175.203:8080/api/students/changePwd",i=new Object;i.email=this.form.email,i.pwd=this.form.pwd,this.$axios.post(e,i).then((function(t){console.log(t.data)})),this.dialogFormVisible=!1,this.form.identify="",this.form.email="",this.form.pwd=""}else alert("验证码错误")}},next:function(){this.active++>2&&(this.active=0)},getCaptcha:function(){var t=this;this.flag=!0,this.content=this.totalTime+"s后重新发送";var e=window.setInterval((function(){t.totalTime--,t.content=t.totalTime+"s后重新发送",t.totalTime<0&&(window.clearInterval(e),t.content="重新发送验证码",t.totalTime=60,t.flag=!1)}),1e3),i="http://121.5.175.203:8080/api/Students/forget/"+this.form.email;this.$axios.get(i).then((function(e){t.icode=e.data}))}}},r=n,c=(i("4950"),i("2877")),p=Object(c["a"])(r,s,l,!1,null,"cb32183c",null),d=p.exports,f={components:{signin:d},data:function(){return{name1:"",pwd:"",content:"123"}},methods:{}},m=f,u=(i("373d"),Object(c["a"])(m,o,a,!1,null,"16949d7a",null));e["default"]=u.exports},a7f6:function(t,e,i){},fe72:function(t,e,i){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7609"],{"770c":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",{attrs:{id:"greetings"}},[e._v("你好,")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}}),t("el-button",{nativeOn:{click:function(s){return s.preventDefault(),e.sendMessage(s)}}},[e._v("发送")]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.buttonVisible,expression:"buttonVisible"},{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{id:"match"},nativeOn:{click:function(s){return s.preventDefault(),e.match(s)}}},[e._v("点击匹配")]),t("div",{staticClass:"textarea scroll",attrs:{id:"responseContent"}}),t("div",{attrs:{id:"output"}})],1)},i=[],a=t("c24f"),o=t("5f87"),r=t("b775"),c=t("5c96"),d={name:"Socket",data:function(){return{message:"",socket:"",me:null,loading:!1,buttonVisible:!0,PRIVATE_CHAT_MESSAGE_CODE:1,GROUP_CHAT_MESSAGE_CODE:2,PING_MESSAGE_CODE:3,SYSTEM_MESSAGE_CODE:5,MATCHING_MESSAGE_CODE:6,MATCH_SUCCESS_MESSAGE_CODE:7,MATCH_REVOKE_CODE:8,LOGIN_CODE:1e3,LOGOUT_CODE:1001}},destroyed:function(){this.quitSend(),location.reload()},created:function(){this.initMe()},methods:{initMe:function(){var e=this;this.me=new Object,Object(a["b"])(Object(o["a"])()).then((function(s){e.me.username=s.data.userNickname,e.me.userId=s.data.userName,e.websocket()}))},websocket:function(){var e=this;return window.WebSocket?(this.socket=new WebSocket(r["b"]+this.me.userId),console.log("当前用户是"+this.me.username),document.getElementById("greetings").append(decodeURI(decodeURI(this.me.username))),this.socket.onmessage=function(s){var t=JSON.parse(s.data);switch(console.log(JSON.stringify(t)),t.code){case e.GROUP_CHAT_MESSAGE_CODE:document.getElementById("output").append(t.msg);break;case e.SYSTEM_MESSAGE_CODE:break;case e.PING_MESSAGE_CODE:e.sendPong();break;case e.PRIVATE_CHAT_MESSAGE_CODE:break;case e.MATCH_SUCCESS_MESSAGE_CODE:c["MessageBox"].close(),e.loading=!1,e.buttonVisible=!1,e.$message({type:"success",message:"匹配成功"});break;case e.MATCH_REVOKE_CODE:c["MessageBox"].close(),e.loading=!1,e.$message({type:"error",message:"没有找到对手捏，请稍后重新匹配~"})}},this.socket.onopen=function(){e.loginSend()},this.socket.onclose=function(){e.quitSend()},!0):(alert("您的浏览器不支持WebSocket"),!1)},sendPong:function(){var e={code:4};this.send(JSON.stringify(e))},send:function(e){window.WebSocket&&(this.socket.readyState===WebSocket.OPEN||(this.socket.readyState=WebSocket.OPEN),this.socket.send(e))},loginSend:function(){var e={};e.code=this.LOGIN_CODE,e.username=this.me.username,e.userId=this.me.userId,this.send(JSON.stringify(e))},quitSend:function(){var e={};e.code=this.LOGOUT_CODE,e.username=this.me.username,e.userId=this.me.userId,this.send(JSON.stringify(e))},sendMessage:function(){if(""!==this.message&&null!=this.message){var e={};e.code=this.GROUP_CHAT_MESSAGE_CODE,e.username=this.me.username,e.msg=this.message,e.sendUserId=this.me.userId,this.send(JSON.stringify(e))}else alert("信息不能为空~")},match:function(){var e=this;this.loading=!0,c["MessageBox"].confirm("匹配中......","对战练习",{confirmButtonText:"隐藏",cancelButtonText:"取消",type:"info"}).then((function(){e.$message({type:"info",message:"正在帮您匹配，匹配框已帮您自动隐藏"})})).catch((function(){e.loading=!1,e.revokeMatch(),e.$message({type:"error",message:"已取消匹配"})}));var s={};s.code=this.MATCHING_MESSAGE_CODE,s.username=this.me.username,s.sendUserId=this.me.userId,console.log(JSON.stringify(s)),this.send(JSON.stringify(s))},revokeMatch:function(){var e={};e.code=this.MATCH_REVOKE_CODE,e.username=this.me.username,e.sendUserId=this.me.userId,console.log(JSON.stringify(e)),this.send(JSON.stringify(e))}}},u=d,m=t("2877"),l=Object(m["a"])(u,n,i,!1,null,"2bcfa0c8",null);s["default"]=l.exports}}]);
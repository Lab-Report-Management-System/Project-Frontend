(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4898a5a"],{1148:function(e,t,i){"use strict";var s=i("a691"),n=i("1d80");e.exports="".repeat||function(e){var t=String(n(this)),i="",a=s(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(i+=t);return i}},"408a":function(e,t,i){var s=i("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=s(e))throw TypeError("Incorrect invocation");return+e}},"75f0":function(e,t,i){},"770c":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",{staticStyle:{"text-align":"center"},attrs:{id:"greetings"}},[e._v("欢迎进入答题对战,")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:e.buttonVisible,expression:"buttonVisible"},{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-top":"5px","margin-left":"45%"},attrs:{id:"match"},nativeOn:{click:function(t){return t.preventDefault(),e.match(t)}}},[e._v("点击匹配")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.buttonVisible,expression:"buttonVisible"}]},[i("h2",{staticStyle:{"text-align":"center","margin-top":"50px"}},[e._v("聊天区")]),i("div",{staticStyle:{"margin-top":"5px","margin-left":"30%"}},[i("el-input",{staticStyle:{width:"500px"},attrs:{clearable:""},model:{value:e.chatContent,callback:function(t){e.chatContent=t},expression:"chatContent"}}),i("el-button",{nativeOn:{click:function(t){return t.preventDefault(),e.sendChatMessage(t)}}},[e._v("发送")]),i("el-button",{nativeOn:{click:function(t){return t.preventDefault(),e.clearText(t)}}},[e._v("清空")])],1),e._m(0)]),i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.timeVisible,expression:"timeVisible"}],staticStyle:{"margin-left":"15px"}},[e._v("总用时:"+e._s(this.answeringTotalTime.toFixed(2)))]),i("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.questionVisible,expression:"questionVisible"}],attrs:{"text-inside":!0,"show-text":!1,"stroke-width":10,percentage:e.getTime(),color:e.colors}}),i("el-card",{directives:[{name:"show",rawName:"v-show",value:e.questionVisible,expression:"questionVisible"}],staticStyle:{height:"225px"}},[i("div",{staticStyle:{"text-align":"center"}},[e._v("题目"+e._s(this.pageNumber+1)+" / "+e._s(this.questions.length))]),i("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[e._v(e._s(this.title))]),i("div",{staticStyle:{"text-align":"center"}},[i("el-radio-group",{staticStyle:{"margin-top":"10px"},attrs:{align:"left"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[i("ul",{staticClass:"question"},[i("li",[i("el-radio",{attrs:{label:0}},[e._v("A. "+e._s(this.answerA))])],1),i("li",[i("el-radio",{staticStyle:{"margin-top":"10px"},attrs:{label:1}},[e._v("B. "+e._s(this.answerB))])],1),i("li",[i("el-radio",{staticStyle:{"margin-top":"10px"},attrs:{label:2}},[e._v("C. "+e._s(this.answerC))])],1),i("li",[i("el-radio",{staticStyle:{"margin-top":"10px"},attrs:{label:3}},[e._v("D."+e._s(this.answerD))])],1)])])],1),i("div",{staticStyle:{"align-items":"center",display:"flex","margin-top":"7px"}},[i("el-button",{staticClass:"question",staticStyle:{margin:"0 auto",position:"relative"},nativeOn:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("提交")])],1)]),i("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.questionVisible,expression:"questionVisible"}],staticStyle:{"margin-left":"150px",top:"40px"},attrs:{type:"circle",percentage:e.getRate()}}),i("el-table",{directives:[{name:"show",rawName:"v-show",value:e.timeVisible,expression:"timeVisible"}],staticStyle:{position:"absolute",top:"60%","margin-left":"500px",width:"500px"},attrs:{stripe:"",data:e.tableData,border:""}},[i("el-table-column",{attrs:{prop:"index",label:"序号",width:"180"}}),i("el-table-column",{attrs:{prop:"userName",label:"用户昵称",width:"180"}}),i("el-table-column",{attrs:{prop:"finishNumber",label:"正确题目数"}})],1),i("el-card",{directives:[{name:"show",rawName:"v-show",value:e.resultVisible,expression:"resultVisible"}],staticStyle:{height:"225px"}},[i("div",{staticStyle:{"text-align":"center"}},[i("div",[e._v("题目总数: "+e._s(this.questions.length))]),i("div",[e._v("回答正确: "+e._s(this.correctNumber))]),i("div",[e._v("回答错误: "+e._s(this.wrongNumber))]),i("div",[e._v("正确率: ")]),i("el-progress",{attrs:{type:"circle",percentage:e.getRate()}})],1)]),i("div",{staticStyle:{"align-items":"center",display:"flex","margin-top":"7px"}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:e.finishVisible&&e.resultVisible,expression:"finishVisible && resultVisible"}],nativeOn:{click:function(t){return t.preventDefault(),e.exitAnswer(t)}}},[e._v("结束答题")])],1),i("el-dialog",{attrs:{title:"答题结束",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("span",[e._v("您的最终得分为: "+e._s(this.score))]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.submitScore(t)}}},[e._v("确 定")])],1)])],1)],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"text-align":"center"}},[i("div",{attrs:{id:"output"}})])}],a=(i("b680"),i("c24f")),r=i("5f87"),o=i("b775"),l=i("5c96"),c=i("adfa"),u={name:"Socket",data:function(){return{message:"",socket:"",me:null,loading:!1,buttonVisible:!0,questionVisible:!1,resultVisible:!1,timeVisible:!1,finishVisible:!1,dialogVisible:!1,userList:[],tableData:[{index:1,userName:"",finishNumber:0},{index:2,userName:"",finishNumber:0}],questions:[],radio:-1,correctNumber:0,wrongNumber:0,title:"",answerA:"",answerB:"",answerC:"",answerD:"",pageNumber:0,totalTime:100,answeringTotalTime:0,colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}],clock:"",score:0,chatContent:"",PRIVATE_CHAT_MESSAGE_CODE:1,GROUP_CHAT_MESSAGE_CODE:2,PING_MESSAGE_CODE:3,SYSTEM_MESSAGE_CODE:5,MATCHING_MESSAGE_CODE:6,MATCH_SUCCESS_MESSAGE_CODE:7,MATCH_REVOKE_CODE:8,MATCH_END_CODE:9,ANSWER_FINISH_CODE:10,CORRECT_ANSWER_CODE:100,WRONG_ANSWER_CODE:101,LOGIN_CODE:1e3,LOGOUT_CODE:1001}},destroyed:function(){this.quitSend(),location.reload()},created:function(){this.initMe()},methods:{clearText:function(){document.getElementById("output").innerText=""},sendChatMessage:function(){if(""!==this.chatContent&&null!=this.chatContent){var e={};e.type=this.GROUP_CHAT_MESSAGE_CODE,e.code=this.GROUP_CHAT_MESSAGE_CODE,e.username=this.me.username,e.sendUserId=this.me.userId,e.msg=this.chatContent,this.send(JSON.stringify(e))}else alert("信息不能为空~")},submitScore:function(){var e=this;this.dialogVisible=!1,this.finishVisible=!1;var t={score:this.score};Object(c["c"])(t).then((function(t){e.score=0}))},initMe:function(){var e=this;this.me=new Object,Object(a["b"])(Object(r["a"])()).then((function(t){e.me.username=t.data.userNickname,e.me.userId=t.data.userName,e.websocket()}))},websocket:function(){var e=this;return window.WebSocket?(this.socket=new WebSocket(o["b"]+this.me.userId),console.log("当前用户是"+this.me.username),document.getElementById("greetings").append(decodeURI(decodeURI(this.me.username))),this.socket.onmessage=function(t){var i=JSON.parse(t.data);switch(i.code){case e.GROUP_CHAT_MESSAGE_CODE:if("battle"!==i.msg){document.getElementById("output").append(i.username+" : "+i.msg);var s=document.createElement("br");document.getElementById("output").appendChild(s);break}for(var n=0;n<e.userList.length;n++)decodeURIComponent(e.userList[n])===i.sendUserId&&i.type===e.CORRECT_ANSWER_CODE&&(e.tableData[n].finishNumber+=1);break;case e.SYSTEM_MESSAGE_CODE:e.userList=i.ext.userList;for(var a=0;a<e.tableData.length;a++)e.tableData[a].userName=decodeURIComponent(e.userList[a]);for(var r=0;r<e.tableData.length;r++)e.tableData[r].finishNumber=0;break;case e.PING_MESSAGE_CODE:e.sendPong();break;case e.PRIVATE_CHAT_MESSAGE_CODE:break;case e.MATCH_SUCCESS_MESSAGE_CODE:l["MessageBox"].close(),e.loading=!1,e.buttonVisible=!1,e.timeVisible=!0,e.$message({type:"success",message:"匹配成功"}),e.getQuestion();break;case e.MATCH_REVOKE_CODE:l["MessageBox"].close(),e.loading=!1,e.$message({type:"error",message:"没有找到对手捏，请稍后重新匹配~"});break;case e.MATCH_END_CODE:e.finishVisible=!0;break}},this.socket.onopen=function(){e.loginSend()},this.socket.onclose=function(){e.quitSend()},!0):(alert("您的浏览器不支持WebSocket"),!1)},sendPong:function(){var e={code:4};this.send(JSON.stringify(e))},send:function(e){window.WebSocket&&(this.socket.readyState===WebSocket.OPEN||(this.socket.readyState=WebSocket.OPEN),this.socket.send(e))},loginSend:function(){var e={};e.code=this.LOGIN_CODE,e.username=this.me.username,e.userId=this.me.userId,this.send(JSON.stringify(e))},quitSend:function(){var e={};e.code=this.LOGOUT_CODE,e.username=this.me.username,e.userId=this.me.userId,this.send(JSON.stringify(e))},sendMessage:function(e){var t={};t.code=this.GROUP_CHAT_MESSAGE_CODE,t.type=e,t.username=this.me.username,t.sendUserId=this.me.userId,t.msg="battle",console.log(t),this.send(JSON.stringify(t))},match:function(){var e=this;this.loading=!0,l["MessageBox"].confirm("匹配中......","对战练习",{confirmButtonText:"隐藏",cancelButtonText:"取消",type:"info"}).then((function(){e.$message({type:"info",message:"正在帮您匹配，匹配框已帮您自动隐藏"})})).catch((function(){e.loading=!1,e.revokeMatch(),e.$message({type:"error",message:"已取消匹配"})}));var t={};t.code=this.MATCHING_MESSAGE_CODE,t.username=this.me.username,t.sendUserId=this.me.userId,console.log(JSON.stringify(t)),this.send(JSON.stringify(t))},revokeMatch:function(){var e={};e.code=this.MATCH_REVOKE_CODE,e.username=this.me.username,e.sendUserId=this.me.userId,console.log(JSON.stringify(e)),this.send(JSON.stringify(e))},getQuestion:function(){var e=this;Object(c["a"])().then((function(t){e.questions=t.questions,e.pageNumber=0,e.correctNumber=0,e.wrongNumber=0,e.answeringTotalTime=0,e.title=e.questions[e.pageNumber].title,e.answerA=e.questions[e.pageNumber].answerA,e.answerB=e.questions[e.pageNumber].answerB,e.answerC=e.questions[e.pageNumber].answerC,e.answerD=e.questions[e.pageNumber].answerD,e.questionVisible=!0,e.countDown()}))},submit:function(){var e;switch(this.radio){case 0:e="A";break;case 1:e="B";break;case 2:e="C";break;case 3:e="D";break;default:e=NaN}e===this.questions[this.pageNumber]["correctAnswer"]?(this.correctNumber++,this.$message({message:"恭喜你，回答成功",type:"success"}),this.sendMessage(this.CORRECT_ANSWER_CODE)):(this.wrongNumber++,this.$message.error("很遗憾，回答失败"),this.sendMessage(this.WRONG_ANSWER_CODE)),this.nextQuestion()},nextQuestion:function(){window.clearInterval(this.clock),this.radio=-1,this.totalTime=100;var e=this.questions.length,t=this.pageNumber+1;t>=e?this.finishAnswer():(this.pageNumber++,this.title=this.questions[this.pageNumber].title,this.answerA=this.questions[this.pageNumber].answerA,this.answerB=this.questions[this.pageNumber].answerB,this.answerC=this.questions[this.pageNumber].answerC,this.answerD=this.questions[this.pageNumber].answerD,this.countDown())},getRate:function(){return this.correctNumber/this.questions.length*100},finishAnswer:function(){this.questionVisible=!1,this.resultVisible=!0,window.clearInterval(this.clock);var e={};e.code=this.ANSWER_FINISH_CODE,e.username=this.me.username,e.userId=this.me.userId,this.send(JSON.stringify(e)),this.$message({message:"已完成答题，待房间内的所有用户结束答题之后即可退出",type:"success"})},exitAnswer:function(){this.resultVisible=!1,this.questionVisible=!1,this.timeVisible=!1,this.$message({message:"感谢参与本轮答题匹配，欢迎下次再来~",type:"success"}),this.buttonVisible=!0;for(var e=0;e<this.tableData.length;e++)this.tableData[e].finishNumber=0;var t=(this.correctNumber/this.questions.length*100*1e6+1010*(100-this.answeringTotalTime))/1e8*5;this.score=t<0?0:t.toFixed(2),this.dialogVisible=!0},countDown:function(){var e=this;this.content=this.totalTime,this.clock=window.setInterval((function(){e.totalTime--,e.answeringTotalTime+=.2,e.content=e.totalTime,e.totalTime<1&&(window.clearInterval(e.clock),e.totalTime=100,e.submit())}),200)},getTime:function(){return this.totalTime}}},h=u,m=(i("8721"),i("2877")),d=Object(m["a"])(h,s,n,!1,null,"02b0233c",null);t["default"]=d.exports},8721:function(e,t,i){"use strict";i("75f0")},adfa:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r}));var s=i("b775");function n(){return Object(s["a"])({url:"/api/battle/questions",method:"get"})}function a(e){return Object(s["a"])({url:"/api/battle/submitQuestion",method:"post",params:e})}function r(e){return Object(s["a"])({url:"/api/battle/submitScore",method:"post",params:e})}},b680:function(e,t,i){"use strict";var s=i("23e7"),n=i("a691"),a=i("408a"),r=i("1148"),o=i("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,i){return 0===t?i:t%2===1?u(e,t-1,i*e):u(e*e,t/2,i)},h=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},m=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){l.call({})}));s({target:"Number",proto:!0,forced:m},{toFixed:function(e){var t,i,s,o,l=a(this),m=n(e),d=[0,0,0,0,0,0],b="",g="0",f=function(e,t){var i=-1,s=t;while(++i<6)s+=e*d[i],d[i]=s%1e7,s=c(s/1e7)},p=function(e){var t=6,i=0;while(--t>=0)i+=d[t],d[t]=c(i/e),i=i%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==d[e]){var i=String(d[e]);t=""===t?i:t+r.call("0",7-i.length)+i}return t};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(b="-",l=-l),l>1e-21)if(t=h(l*u(2,69,1))-69,i=t<0?l*u(2,-t,1):l/u(2,t,1),i*=4503599627370496,t=52-t,t>0){f(0,i),s=m;while(s>=7)f(1e7,0),s-=7;f(u(10,s,1),0),s=t-1;while(s>=23)p(1<<23),s-=23;p(1<<s),f(1,1),p(2),g=v()}else f(0,i),f(1<<-t,0),g=v()+r.call("0",m);return m>0?(o=g.length,g=b+(o<=m?"0."+r.call("0",m-o)+g:g.slice(0,o-m)+"."+g.slice(o-m))):g=b+g,g}})}}]);
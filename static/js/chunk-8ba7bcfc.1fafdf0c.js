(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ba7bcfc"],{1742:function(t,e,a){"use strict";a("92ab")},"3a57":function(t,e,a){"use strict";a("ca60")},4951:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"68%",margin:"0 auto"}},[a("p",{staticStyle:{"font-family":"simhei","font-size":"25px",left:"10%"}},[t._v(t._s(t.userName)+"同学,你好！")]),a("div",{staticStyle:{"padding-bottom":"30px"}},[a("el-tabs",{attrs:{type:"border-card"}},t._l(t.labList,(function(e,n){return a("el-tab-pane",{key:n,on:{click:function(a){return t.clickLab(e)}}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-date"}),t._v(" "+t._s(e))]),a("TableList",{attrs:{tableData:t.tableData1[n]}})],1)})),1),a("div",{staticClass:"comment"},[t._m(0),a("div",{staticClass:"comment-main"},t._l(t.commentList,(function(e,n){return a("div",{key:n,staticClass:"comment-main-item"},[a("div",{staticClass:"comment-main-item-top"},[a("el-avatar",{attrs:{size:"small",src:e.avatar}}),a("div",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.time))])],1),a("div",{staticClass:"comment-main-item-content"},[t._v(t._s(e.content))])])})),0)]),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-input",{attrs:{placeholder:"请输入评论内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},[a("el-button",{staticStyle:{background:"#409EFF",color:"#fff","border-radius":"0"},attrs:{slot:"append"},on:{click:t.submitComment},slot:"append"},[t._v("发布")])],1)],1)],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-title"},[a("i",{staticClass:"el-icon-s-comment"}),t._v(" 评论区")])}],c=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%",top:"20%"},attrs:{data:t.tableData,border:"","row-class-name":t.tableRowClassName,"empty-text":t.none}},[a("el-table-column",{attrs:{label:"实验报告名称",prop:"labName",width:"auto"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.tableData[t.rowID].labName))])]}}])}),a("el-table-column",{attrs:{label:"学号",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.tableData[t.rowID].stuNumber))])]}}])}),a("el-table-column",{attrs:{label:"姓名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.tableData[t.rowID].name))])]}}])}),a("el-table-column",{attrs:{label:"指导教师",width:"auto"}},[t._v("黄杰 ")]),a("el-table-column",{staticStyle:{position:"relative",left:"50%"},attrs:{label:"已完成    |    未完成",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{zoom:"0.8"},attrs:{type:"success",icon:"el-icon-check",circle:"",disabled:!t.tableData[t.rowID].isActive}}),a("el-button",{staticStyle:{zoom:"0.8",left:"34%",position:"absolute"},attrs:{type:"primary",icon:"el-icon-edit",circle:"",disabled:t.tableData[t.rowID].isActive}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small",disabled:!t.tableData[t.rowID].isActive},on:{click:function(a){return t.handleClickView(e.row)}}},[t._v("查看评分")]),a("el-button",{attrs:{type:"text",size:"small",disabled:t.tableData[t.rowID].isActive},on:{click:function(a){return t.handleClickEdit(e.row)}}},[t._v("编辑")])]}}])})],1)}),o=[],i=a("49e5"),l={props:["tableData"],data:function(){return{name:"Ameis",none:"暂无消息",rowID:"",labReportId:null}},created:function(){var t=this;console.log("sa"),console.log(this.tableData),console.log(this.tableData[3]);var e=this.tableData[3];console.log("sa"),console.log(e.isActive),Object(i["a"])({labId:1}).then((function(e){var a=e.labReportId;t.labReportId=a}))},watch:{tableData:function(t){console.log("this.tableData"),console.log(this.tableData),this.$set(this.tableData[3],isActive,t[3].isActive)}},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return this.rowID=e,2==this.tableData[e].state?"warning-row":1==this.tableData[e].state?"success-row":0==this.tableData[e].state?"info-row":""},handleClickEdit:function(t){this.$router.push({path:"/lab/submitReport",query:{state:this.tableData[3].state,labID:1}})},handleClickView:function(t){this.$router.push({path:"/lab/viewRemarks",query:{labReportId:this.labReportId}})}}},r=l,u=(a("3a57"),a("2877")),b=Object(u["a"])(r,c,o,!1,null,null,null),m=b.exports,d=a("c24f"),p=(a("0f9a"),a("cabd")),f={components:{TableList:m},data:function(){return{num:["","",""],num2:"2",labList:["实验一"],name:"wyh",none:"暂无消息",rowID:"",userId:1953603,userName:"ss",courseId:42014603,state:0,tableData1:[[{labName:"软工实验系统",name:"",stuNumber:"",isActive:!0,state:1,labID:0},{labName:"软工实验系统",name:"",stuNumber:"",isActive:!1,state:2,labID:3},{labName:"软工实验系统",name:"",stuNumber:"",isActive:!0,state:1,labID:2},{labName:"软工实验系统",name:"",stuNumber:"",isActive:!1,state:0,labID:1}]],commentList:[{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"?刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"}],content:""}},watch:{tableData1:function(t){this.tableData1=t}},created:function(){var t=this;this.getComments(),Object(d["b"])().then((function(e){t.userId=e.data.userID,t.userName=e.data.userName,t.initial()})),Object(i["b"])({labId:1}).then((function(e){var a=e.state;console.log("yessss"),console.log(a);var n=!1;n=!0,t.tableData1[0].push({labName:"软工实验系统",name:t.userName,stuNumber:t.userId,isActive:n,state:a,labID:1}),console.log("yessss"),console.log(a),t.tableData1[0][t.tableData1[0].length-1].state=a,t.tableData1[0][t.tableData1[0].length-1].isActive=1==a,console.log(t.tableData1[0][t.tableData1[0].length-1])}))},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return this.rowID=e,2==this.tableData1[e].state?"warning-row":1==this.tableData1[e].state?"success-row":""},submitComment:function(){var t=this;Object(p["e"])({content:this.content,courseId:42014603}).then((function(e){var a=e.message;t.$message(a),t.getComments()}))},getComments:function(){var t=this;Object(p["c"])({courseId:42014603}).then((function(e){var a=e.data.commentList;t.commentList=a}))},initial:function(){for(var t=0;t<this.tableData1.length;t++)for(var e=0;e<this.tableData1[0].length;e++)this.tableData1[t][e].name=this.userName,this.tableData1[t][e].stuNumber=this.userId},handleClickEdit:function(t){},clickLab:function(t){console.log("yes")}}},h=f,v=(a("1742"),Object(u["a"])(h,n,s,!1,null,"e5f27824",null));e["default"]=v.exports},"49e5":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return c})),a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return l}));a("d3b7"),a("3ca3"),a("ddb0"),a("9861");var n=a("b775");function s(t){var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/student/sendRegisterEmail",method:"post",data:e})}function c(t){t.studentPassword=a("6c27").sha256(t.studentPassword);var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/student/updateInformation",method:"post",data:e})}function o(t){return Object(n["a"])({url:"/api/student/submitReport",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:JSON.stringify(t)})}function i(t){return Object(n["a"])({url:"/api/student/getReportState",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/api/student/getLabReportId",method:"get",params:t})}},"92ab":function(t,e,a){},ca60:function(t,e,a){},cabd:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"d",(function(){return c})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"e",(function(){return l}));a("d3b7"),a("3ca3"),a("ddb0"),a("9861");var n=a("b775");function s(t){return Object(n["a"])({url:"/api/course/getCourseDetailById",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/api/course/home",method:"post",params:t})}function o(t){return Object(n["a"])({url:"api/course/labId",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/api/course/getForumDetails",method:"get",params:t})}function l(t){var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/course/submitComment",method:"post",data:e})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b4f6b2"],{"1c31":function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return s}));var n=a("b775");function c(t){return Object(n["a"])({url:"/api/report/getReportDetails",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/api/report/completeRate",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/api/report/finishRate",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/api/report/getReportIds",method:"get",params:t})}},"25ec":function(t,e,a){},2739:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"68%",margin:"0 auto"}},[a("p",{staticStyle:{"font-family":"simhei","font-size":"25px",left:"10%"}},[t._v(t._s(t.name)+"老师,你好！")]),a("div",{staticStyle:{"padding-bottom":"30px"}},[a("el-tabs",{attrs:{type:"border-card"}},t._l(t.labList,(function(e,n){return a("el-tab-pane",{key:n,on:{click:function(a){return t.clickLab(e)}}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-date"}),t._v(" "+t._s(e))]),a("TableList",{attrs:{"table-data":t.tableData1[n]}})],1)})),1),a("div",{staticClass:"comment"},[t._m(0),a("div",{staticClass:"comment-main"},t._l(t.commentList,(function(e,n){return a("div",{key:n,staticClass:"comment-main-item"},[a("div",{staticClass:"comment-main-item-top"},[a("el-avatar",{attrs:{size:"small",src:e.avatar}}),a("div",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.time))])],1),a("div",{staticClass:"comment-main-item-content"},[t._v(t._s(e.content))])])})),0)]),a("div",{staticStyle:{"margin-top":"10px"}})],1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-title"},[a("i",{staticClass:"el-icon-s-comment"}),t._v(" 评论区")])}],o=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%",top:"20%"},attrs:{data:t.tableData,border:"","row-class-name":t.tableRowClassName,"empty-text":t.none}},[a("el-table-column",{attrs:{label:"实验报告名称",prop:"labName",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.tableData[t.rowID].labName))])]}}])}),a("el-table-column",{attrs:{label:"学号",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.tableData[t.rowID].stuNumber))])]}}])}),a("el-table-column",{attrs:{label:"姓名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.tableData[t.rowID].name))])]}}])}),a("el-table-column",{attrs:{label:"指导教师",width:"120"}},[t._v("黄杰 ")]),a("el-table-column",{staticStyle:{position:"relative",left:"50%"},attrs:{label:"已批改    |    未批改",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{zoom:"0.8"},attrs:{type:"success",icon:"el-icon-check",circle:"",disabled:!t.tableData[t.rowID].isActive}}),a("el-button",{staticStyle:{zoom:"0.8",left:"34%",position:"absolute"},attrs:{type:"primary",icon:"el-icon-edit",circle:"",disabled:t.tableData[t.rowID].isActive}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small",disabled:!t.tableData[t.rowID].isActive},on:{click:function(a){return t.handleClickEdit(e.row)}}},[t._v("批改")])]}}])})],1)}),r=[],s=a("1c31"),i={props:["tableData"],data:function(){return{name:"Ameis",none:"暂无消息",rowID:""}},created:function(){console.log("sasasa!!!"),console.log(this.tableData)},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return this.rowID=e,2==this.tableData[e].state?"warning-row":1==this.tableData[e].state?"success-row":0==this.tableData[e].state?"info-row":""},handleClickEdit:function(t){this.$router.push({path:"/lab/markReport",query:{labReportId:t.labReportId}})}}},l=i,u=(a("7ba0"),a("2877")),m=Object(u["a"])(l,o,r,!1,null,null,null),b=m.exports,d=a("cabd"),p=a("c24f"),f={components:{TableList:b,TableList1:b},data:function(){return{num:["","",""],num2:"2",labList:["实验一"],name:"",none:"暂无消息",rowID:"",tableData1:[[]],commentList:[{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"?刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"}],content:""}},created:function(){var t=this;Object(s["c"])().then((function(e){console.log(e);var a=e.data.tableData1;console.log("res"),console.log(a[0]);for(var n=0;n<a[0].length;n++)t.tableData1[0].push(a[0][n]);console.log("tableDate1"),console.log(t.tableDate1)})),this.getComments(),Object(p["b"])().then((function(e){var a=e.data.userNickname;t.name=a}))},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return this.rowID=e,2==this.tableData1[e].state?"warning-row":1==this.tableData1[e].state||3==this.tableData1[e].state?"success-row":""},getComments:function(){var t=this;Object(d["d"])({courseId:42014603}).then((function(e){var a=e.data.commentList;t.commentList=a}))},handleClickEdit:function(t){},clickLab:function(t){console.log("yes")},submitComment:function(){var t=this;Object(d["f"])({content:this.content,courseId:42014603}).then((function(e){var a=e.message;t.$message(a),t.getComments()}))}}},h=f,v=(a("87e1"),Object(u["a"])(h,n,c,!1,null,"0f4d952c",null));e["default"]=v.exports},"7ba0":function(t,e,a){"use strict";a("25ec")},"87e1":function(t,e,a){"use strict";a("f0d90")},cabd:function(t,e,a){"use strict";a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"f",(function(){return i})),a.d(e,"a",(function(){return l}));a("d3b7"),a("3ca3"),a("ddb0"),a("9861");var n=a("b775");function c(t){return Object(n["a"])({url:"/api/course/getCourseDetailById",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/api/course/home",method:"post",params:t})}function r(t){return Object(n["a"])({url:"api/course/labId",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/api/course/getForumDetails",method:"get",params:t})}function i(t){var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/course/submitComment",method:"post",data:e})}function l(t){var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/course/createState",method:"post",data:e})}},f0d90:function(t,e,a){}}]);
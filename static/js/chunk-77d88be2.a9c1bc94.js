(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77d88be2"],{"0a2f":function(t,e,a){},"3a57":function(t,e,a){"use strict";a("ca60")},4951:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"68%",margin:"0 auto"}},[a("p",{staticStyle:{"font-family":"simhei","font-size":"25px",left:"10%"}},[t._v(t._s(t.userName)+"同学,你好！")]),a("div",{staticStyle:{"padding-bottom":"30px"}},[a("el-tabs",{attrs:{type:"border-card"}},t._l(t.labList,(function(e,n){return a("el-tab-pane",{key:n,on:{click:function(a){return t.clickLab(e)}}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-date"}),t._v(" "+t._s(e))]),a("TableList",{attrs:{"table-data":t.tableData1[n]}})],1)})),1),a("div",{staticClass:"comment"},[t._m(0),a("div",{staticClass:"comment-main"},t._l(t.commentList,(function(e,n){return a("div",{key:n,staticClass:"comment-main-item"},[a("div",{staticClass:"comment-main-item-top"},[a("el-avatar",{attrs:{size:"small",src:e.avatar}}),a("div",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.time))])],1),a("div",{staticClass:"comment-main-item-content"},[t._v(t._s(e.content))])])})),0)]),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-input",{attrs:{placeholder:"请输入评论内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},[a("el-button",{staticStyle:{background:"#409EFF",color:"#fff","border-radius":"0"},attrs:{slot:"append"},slot:"append"},[t._v("发布")])],1)],1)],1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-title"},[a("i",{staticClass:"el-icon-s-comment"}),t._v(" 评论区")])}],s=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%",top:"20%"},attrs:{data:t.tableData,border:"","row-class-name":t.tableRowClassName,"empty-text":t.none}},[a("el-table-column",{attrs:{label:"实验报告名称",prop:"labName",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.tableData[t.rowID].labName))])]}}])}),a("el-table-column",{attrs:{label:"学号",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.tableData[t.rowID].stuNumber))])]}}])}),a("el-table-column",{attrs:{label:"姓名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.tableData[t.rowID].name))])]}}])}),a("el-table-column",{attrs:{label:"指导教师",width:"120"}},[t._v("黄杰 ")]),a("el-table-column",{staticStyle:{position:"relative",left:"50%"},attrs:{label:"已完成    |    未完成",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{zoom:"0.8"},attrs:{type:"success",icon:"el-icon-check",circle:"",disabled:!t.tableData[t.rowID].isActive}}),a("el-button",{staticStyle:{zoom:"0.8",left:"34%",position:"absolute"},attrs:{type:"primary",icon:"el-icon-edit",circle:"",disabled:t.tableData[t.rowID].isActive}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small",disabled:!t.tableData[t.rowID].isActive},on:{click:function(a){return t.handleClickEdit(e.row)}}},[t._v("预览")]),a("el-button",{attrs:{type:"text",size:"small",disabled:t.tableData[t.rowID].isActive},on:{click:function(a){return t.handleClickEdit(e.row)}}},[t._v("编辑")])]}}])})],1)}),l=[],o={props:["tableData"],data:function(){return{name:"Ameis",none:"暂无消息",rowID:""}},created:function(){console.log("sa"),console.log(this.tableData)},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return this.rowID=e,2==this.tableData[e].state?"warning-row":1==this.tableData[e].state?"success-row":0==this.tableData[e].state?"info-row":""},handleClickEdit:function(t){this.$router.push({path:"/example/labTeacher",query:{name:t.name,stuNumber:t.stuNumber,labID:t.labID,isActive:t.isActive}})}}},i=o,r=(a("3a57"),a("2877")),m=Object(r["a"])(i,s,l,!1,null,null,null),u=m.exports,b=a("c24f"),d=(a("0f9a"),{components:{TableList:u},data:function(){return{num:["","",""],num2:"2",labList:["实验一"],name:"wyh",none:"暂无消息",rowID:"",userId:1953603,userName:"ss",tableData1:[[{labName:"软工实验系统",name:"",stuNumber:"",isActive:!0,state:1,labID:0},{labName:"软工实验系统",name:"",stuNumber:"",isActive:!1,state:2,labID:1},{labName:"软工实验系统",name:"",stuNumber:"",isActive:!0,state:1,labID:2},{labName:"软工实验系统",name:"",stuNumber:"",isActive:!1,state:0,labID:3}]],commentList:[{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"赵小刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"},{name:"?刚",avatar:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",content:"这尽快帮忙落实解决！",time:"2021-11-28 20:50:22"}],content:""}},created:function(){var t=this;this.commentList.push(this.commentList[0]),Object(b["b"])().then((function(e){console.log("222222222222"),console.log(e.data.userID),t.userId=e.data.userID,t.userName=e.data.userName,console.log("222222222222"),console.log(t.userName),t.initial()}))},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return this.rowID=e,2==this.tableData1[e].state?"warning-row":1==this.tableData1[e].state?"success-row":""},initial:function(){console.log("yes"),console.log(this.userName);for(var t=0;t<this.tableData1[0].length;t++)console.log("1111123"),console.log(this.tableData1[0].length),this.tableData1[0][t].name=this.userName,this.tableData1[0][t].stuNumber=this.userId},handleClickEdit:function(t){},clickLab:function(t){console.log("yes")}}}),p=d,f=(a("fa00"),Object(r["a"])(p,n,c,!1,null,"1eebee4e",null));e["default"]=f.exports},ca60:function(t,e,a){},fa00:function(t,e,a){"use strict";a("0a2f")}}]);
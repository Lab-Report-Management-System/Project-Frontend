(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-623e860f"],{"292f":function(t,e,s){"use strict";s("51a0")},"51a0":function(t,e,s){},"5c5b":function(t,e,s){},"66eb":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"title"},[t._v(t._s(t.userName)+"老师，您好")]),s("div",{staticClass:"classes"},[s("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.courseIds,(function(t,e){return s("el-tab-pane",{key:e,attrs:{label:"课号:"+t,name:t}},[s("ClassInfo",{staticClass:"info",attrs:{"course-id":t}})],1)})),1)],1)])},i=[],o=(s("b0c0"),s("a86d")),c=s("4360"),l=s("b775");function r(){return Object(l["a"])({url:"/api/teacher/getCourseIds",method:"get"})}var n={name:"TeacherClass",components:{ClassInfo:o["a"]},data:function(){return{userName:c["a"].getters.name,courseIds:[],activeName:""}},created:function(){this.getCourseIds()},methods:{handleClick:function(t,e){},getCourseIds:function(){var t=this;r().then((function(e){t.courseIds=e.data.courseIds,t.activeName=t.courseIds[0]}))}}},u=n,v=(s("7066"),s("2877")),d=Object(v["a"])(u,a,i,!1,null,"2d7f365e",null);e["default"]=d.exports},7066:function(t,e,s){"use strict";s("5c5b")},a86d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"class-info"},[s("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("课程名称:")]),t._v(" "),s("div",[t._v(t._s(t.courseInfo.courseName)+"("+t._s(t.courseId)+")")])]),s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("授课教师:")]),t._v(" "),s("div",[t._v(t._s(t.courseInfo.teacherName))])]),s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("上课地点:")]),t._v(" "),s("div",[t._v("安楼"+t._s(t.courseInfo.classroom))])])])],1),s("div",{staticClass:"student-info"},[s("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"text item"},[s("div",{staticStyle:{"text-align":"center"}},[t._v("学生管理")])]),s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("选课人数:")]),t._v(" "),s("div",[t._v(t._s(t.courseInfo.studentNum))])]),s("el-button",{staticClass:"button stu-button",attrs:{type:"text"}},[t._v("查看学生信息")])],1)],1),s("div",{staticClass:"lab-info"},[s("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"text item"},[s("div",{staticStyle:{"text-align":"center"}},[t._v("实验管理")])]),s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("已公布实验数:")]),t._v(" "),s("div",[t._v(t._s(t.labInfo.labPublishedNum))])]),s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("已结束:")]),t._v(" "),s("div",[t._v(t._s(t.labInfo.labPastNum))])]),s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("进行中:")]),t._v(" "),s("div",[t._v(t._s(t.labInfo.labOngoingNum))])]),s("el-button",{staticClass:"button lab-button",attrs:{type:"text"}},[t._v("管理实验")])],1)],1),s("div",{staticClass:"report-info"},[s("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"text item"},[s("div",{staticStyle:{"text-align":"center"}},[t._v("实验报告管理")])]),s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("实验报告总数:")]),t._v(" "),s("div",[t._v(t._s(t.reportInfo.reportTotalNum))])]),s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("已批改:")]),t._v(" "),s("div",[t._v(t._s(t.reportInfo.reportDoneNum))])]),s("div",{staticClass:"text item"},[s("div",{staticStyle:{float:"left"}},[t._v("待批改:")]),t._v(" "),s("div",[t._v(t._s(t.reportInfo.reportRemainingNum))])]),s("el-button",{staticClass:"button report-button",attrs:{type:"text"}},[t._v("批阅实验报告")])],1)],1)])},i=[],o=s("b775");function c(t){return Object(o["a"])({url:"/api/course/getCourseDetailById",method:"get",params:t})}var l={name:"ClassInfo",props:["courseId"],data:function(){return{courseInfo:{courseName:"软件工程经济学",teacherName:"黄杰",classroom:404,studentNum:0},labInfo:{labPublishedNum:0,labOngoingNum:0,labPastNum:0},reportInfo:{reportTotalNum:0,reportDoneNum:0,reportRemainingNum:0}}},created:function(){this.getCourseDetailById(),this.classroom=Math.ceil(100*Math.random()+100)},methods:{getCourseDetailById:function(){var t=this;c({courseId:this.courseId}).then((function(e){var s=e.data,a=s.courseInfo,i=s.labInfo,o=s.reportInfo;t.courseInfo=a,t.labInfo=i,t.reportInfo=o}))}}},r=l,n=(s("292f"),s("2877")),u=Object(n["a"])(r,a,i,!1,null,"1c27dbe6",null);e["a"]=u.exports}}]);
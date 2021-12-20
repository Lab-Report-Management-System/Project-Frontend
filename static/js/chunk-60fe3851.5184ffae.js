(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60fe3851"],{"02af":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("el-row",{attrs:{gutter:10}},[s("el-col",{staticClass:"panel",attrs:{sm:12,xs:24}},[s("el-card",{attrs:{shadow:"hover"}},[s("div",{staticClass:"panel-head",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"panel-head-title"},[t._v(" "+t._s(this.nickname)+" 同学你好！")])]),s("div",{staticClass:"user"},[s("div",{staticClass:"user-main"},[s("div",{staticClass:"user-main-img"},[s("el-avatar",{attrs:{src:t.studentPhoto}})],1),s("div",{staticClass:"user-main-content"},[s("div",{staticClass:"user-main-content-name"},[t._v(t._s(this.studentName))]),s("div",{staticClass:"user-main-content-tag"},[s("el-tag",{staticStyle:{"margin-right":"10px"},attrs:{size:"small"}},[t._v("软件学院")]),s("el-tag",{attrs:{type:"success",size:"small"}},[t._v("软件工程学院")]),s("div",{staticClass:"user-main-content-login"},[s("el-tag",{staticStyle:{"margin-right":"10px"},attrs:{type:"info",size:"small"}},[t._v("上次登录时间:")]),t._v(t._s(this.lastLoginTime))],1),s("div",{staticClass:"user-main-content-time"},[t._v(t._s(this.first_year)+"-"+t._s(this.second_year)+"学年第"+t._s(this.term)+"学期第"+t._s(this.week)+"周")])],1)])]),s("div",{staticClass:"user-panel"},[s("div",{staticClass:"user-panel-wrap"},[s("router-link",{attrs:{to:"example/report"}},[s("img",{attrs:{src:a("a9fb"),alt:""}})]),s("div",{staticClass:"user-panel-desc"},[t._v("填写实验报告")])],1),s("div",{staticClass:"user-panel-wrap"},[s("router-link",{attrs:{to:""}},[s("img",{attrs:{src:a("bbf8"),alt:""}})]),s("div",{staticClass:"user-panel-desc"},[t._v("查看班级")])],1),s("div",{staticClass:"user-panel-wrap"},[s("router-link",{attrs:{to:""}},[s("img",{attrs:{src:a("377f"),alt:""}})]),s("div",{staticClass:"user-panel-desc"},[t._v("成绩管理")])],1),s("div",{staticClass:"user-panel-wrap"},[s("router-link",{attrs:{to:"socket"}},[s("img",{attrs:{src:a("38c4"),alt:""}})]),s("div",{staticClass:"user-panel-desc"},[t._v("答题对战")])],1)])])])],1),s("el-col",{staticClass:"panel",attrs:{sm:12,xs:24}},[s("el-card",{attrs:{shadow:"hover"}},[s("div",{staticClass:"panel-head",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"panel-head-title"},[t._v("我的课程")]),s("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:t.courseValue,callback:function(e){t.courseValue=e},expression:"courseValue"}},t._l(t.courseOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.courseData,border:"",height:"240"}},[s("el-table-column",{attrs:{prop:"courseNum",label:"课号",width:"120",align:"center"}}),s("el-table-column",{attrs:{prop:"courseName",label:"课程名称",align:"center"}}),s("el-table-column",{attrs:{prop:"teacher",label:"教师",width:"100",align:"center"}}),s("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:t.manageLab}},[t._v("查看")])]}}])})],1)],1)],1)],1),s("el-row",{attrs:{gutter:10}},[s("el-col",{staticClass:"panel",attrs:{sm:12,xs:24}},[s("el-card",{attrs:{shadow:"hover"}},[s("div",{staticClass:"panel-head",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"panel-head-title"},[t._v("系统公告")]),s("div",{staticClass:"panel-head-right"},[s("el-button",{attrs:{type:"info",plain:"",size:"mini",icon:"el-icon-plus",disabled:""}},[t._v("发布公告")]),s("el-button",{attrs:{type:"info",plain:"",size:"mini"}},[t._v("查看更多"),s("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)]),t._l(t.announcement.length,(function(e,a){return s("div",{key:a,staticClass:"notice"},[s("div",{staticClass:"notice-desc"},[t._v(t._s(t.announcement[e-1].content))]),s("div",{staticClass:"notice-time"},[s("i",{staticClass:"el-icon-bell"}),t._v(" "+t._s(t.announcement[e-1].time)+" ")])])}))],2)],1),s("el-col",{staticClass:"panel",attrs:{sm:12,xs:24}},[s("el-card",{attrs:{shadow:"hover"}},[s("div",{staticClass:"panel-head",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"panel-head-title"},[t._v("实验报告完成情况")]),s("div",{staticClass:"panel-head-right"},[s("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:t.allLabValue,callback:function(e){t.allLabValue=e},expression:"allLabValue"}},t._l(t.allReportOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),s("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:t.unfinishedLabValue,callback:function(e){t.unfinishedLabValue=e},expression:"unfinishedLabValue"}},t._l(t.unfinishedReportOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),s("div",{staticClass:"report"},[s("div",{staticClass:"report-title"},[t._v(t._s(this.latestCourseName))]),s("div",{staticClass:"report-main"},[s("div",{staticClass:"report-main-progress"},[s("el-progress",{attrs:{type:"circle",percentage:this.completeRate}})],1),s("div",{staticClass:"report-main-content"},[s("div",{staticClass:"report-main-content-box"},[s("div",{staticClass:"report-main-content-box-tit"},[t._v("下一个即将截止的实验")]),s("div",[t._v(t._s(this.latestLabName))])]),s("div",{staticClass:"report-main-content-box"},[s("div",{staticClass:"report-main-content-box-tit"},[t._v("截止时间")]),s("div",[t._v(t._s(this.latestLabDeadline))])])])])])])],1)],1)],1)},n=[],i=a("c24f"),r=a("3499"),l=a("5f87"),c=a("cabd"),o=a("4e49"),u=a("1c31"),d={name:"Home",data:function(){return{studentName:"",nickname:"",studentPhoto:"",lastLoginTime:"暂无",first_year:2021,second_year:2020,month:9,day:6,term:"",week:1,currentWeek:1,courses:[],courseData:[],courseOptions:[],allReportOptions:[],unfinishedReportOptions:[],courseValue:"",allLabValue:"",unfinishedLabValue:"",latestLabDeadline:"",latestLabName:"",latestCourseName:"",latestLabId:1,completeRate:0,announcement:[],token:{code:""}}},created:function(){var t=this;this.token.code=Object(l["a"])(),Object(i["b"])().then((function(e){t.studentName=e.data.userName,t.nickname=e.data.userNickname,t.studentPhoto=e.data.userPhoto,t.lastLoginTime=t.$cookies.get("lastLoginTime"),t.$cookies.set("lastLoginTime",Date());var a=new Date;t.month=a.getMonth(),t.day=a.getDay(),t.month>=8?(t.first_year=a.getFullYear(),t.second_year=t.first_year+1,t.term="一"):(t.second_year=a.getFullYear(),t.first_year=t.second_year-1,t.term="二");var s=a.getTime();a.setFullYear(2021,8,6);var n=a.getTime();t.week=parseInt((s-n)/1e3/3600/24/7)+1})),Object(c["d"])(this.token).then((function(e){t.courses=e.coursesInfoList;for(var a=0;a<t.courses.length;a++)t.courseData.push({courseNum:t.courses[a].course_id,courseName:t.courses[a].course_name,teacher:t.courses[a].teacher_name}),t.courseOptions.push({value:t.courses[a].course_id,label:t.courses[a].course_name})})),Object(r["a"])(this.token).then((function(e){for(var a="3033-12-31",s="暂无",n=1,i=0;i<e.labEntityList.length;i++)t.allReportOptions.push({value:e.labEntityList[i].labId,label:e.labEntityList[i].labName}),t.getCurrentDay()<=e.labEntityList[i].labDeadline&&(e.labEntityList[i].labDeadline<=a&&(a=e.labEntityList[i].labDeadline,s=e.labEntityList[i].labName,n=e.labEntityList[i].labId),t.unfinishedReportOptions.push({value:e.labEntityList[i].labId,label:e.labEntityList[i].labName}));"3033-12-31"===a&&(a=""),t.latestLabDeadline=a,t.latestLabName=s,t.latestLabId=n;var r={labId:t.latestLabId};Object(c["a"])(r).then((function(e){t.latestCourseName=e.courseList[0].courseName})),Object(u["a"])(r).then((function(e){null===e.completeRate?t.completeRate=0:t.completeRate=e.completeRate}))})),Object(o["b"])(this.token).then((function(e){for(var a=0;a<e.announcementEntityList.length;a++)t.announcement.push(e.announcementEntityList[a])})),Object(o["a"])(this.token).then((function(e){for(var a=0;a<e.announcementEntityList.length;a++)t.announcement.push(e.announcementEntityList[a])}))},methods:{getCurrentDay:function(){var t=new Date,e="";return e+=t.getFullYear()+"-",e+=t.getMonth()+1+"-",e+=t.getDate(),e},manageLab:function(){this.$router.push("/lab/stuLabManage")}}},p=d,b=(a("c206"),a("2877")),m=Object(b["a"])(p,s,n,!1,null,"4cdf9088",null);e["default"]=m.exports},"1c31":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return r}));var s=a("b775");function n(t){return Object(s["a"])({url:"/api/report/getReportDetails",method:"get",params:t})}function i(t){return Object(s["a"])({url:"/api/report/completeRate",method:"get",params:t})}function r(t){return Object(s["a"])({url:"/api/report/finishRate",method:"get",params:t})}},3499:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var s=a("b775");function n(t){return Object(s["a"])({url:"/api/calendar/labs",method:"post",params:t})}},"377f":function(t,e){t.exports="data:image/png;base64,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"},"38c4":function(t,e,a){t.exports=a.p+"static/img/battle.251228fb.png"},"4e49":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i}));var s=a("b775");function n(t){return Object(s["a"])({url:"/api/announcement/system",method:"post",params:t})}function i(t){return Object(s["a"])({url:"/api/announcement/dashboard/course",method:"post",params:t})}},a9fb:function(t,e,a){t.exports=a.p+"static/img/lab.d8ed9655.png"},b4d2:function(t,e,a){},bbf8:function(t,e,a){t.exports=a.p+"static/img/class.1255efbe.png"},c206:function(t,e,a){"use strict";a("b4d2")},cabd:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return c}));a("d3b7"),a("3ca3"),a("ddb0"),a("9861");var s=a("b775");function n(t){return Object(s["a"])({url:"/api/course/getCourseDetailById",method:"get",params:t})}function i(t){return Object(s["a"])({url:"/api/course/home",method:"post",params:t})}function r(t){return Object(s["a"])({url:"api/course/labId",method:"get",params:t})}function l(t){return Object(s["a"])({url:"/api/course/getForumDetails",method:"get",params:t})}function c(t){var e=new URLSearchParams(t);return Object(s["a"])({url:"/api/course/submitComment",method:"post",data:e})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5274c34c"],{"1c31":function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return i}));var n=a("b775");function l(t){return Object(n["a"])({url:"/api/report/getReportDetails",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/api/report/completeRate",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/api/report/finishRate",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/api/report/getReportIds",method:"get",params:t})}},"49e5":function(t,e,a){"use strict";a.d(e,"e",(function(){return l})),a.d(e,"f",(function(){return r})),a.d(e,"g",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return u}));a("d3b7"),a("3ca3"),a("ddb0"),a("9861");var n=a("b775");function l(t){var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/student/sendRegisterEmail",method:"post",data:e})}function r(t){t.studentPassword=a("6c27").sha256(t.studentPassword);var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/student/updateInformation",method:"post",data:e})}function s(t){return Object(n["a"])({url:"/api/student/submitReport",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:JSON.stringify(t)})}function i(t){return Object(n["a"])({url:"/api/student/getReportState",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/api/student/getLabReportId",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/api/student/addStudent",method:"post",params:t})}function u(t){return Object(n["a"])({url:"/api/student/getStudentList",method:"get",params:t})}},"7fd5":function(t,e,a){"use strict";a("8bfe")},"8bfe":function(t,e,a){},c4ce:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.title))]),a("div",{staticStyle:{margin:"0 10px",padding:"16px",background:"#eee","border-radius":"6px"}},[t._v(t._s(t.desc))]),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:21,xs:24}},[a("el-card",{staticStyle:{margin:"10px"}},[a("div",{staticStyle:{padding:"0 5px 5px 0","text-align":"right"}},[t.year.length>=5&&t.year.length<10?a("el-button",{attrs:{type:"success",icon:"el-icon-plus",circle:"",size:"small"},on:{click:t.add}}):t._e(),t.year.length>5&&t.year.length<=10?a("el-button",{attrs:{type:"danger",icon:"el-icon-minus",circle:"",size:"small"},on:{click:t.remove}}):t._e()],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.data,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{label:"序号",width:"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.index)+" ")]}}])}),a("el-table-column",{attrs:{label:"时间（年份）",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),t._l(t.year,(function(e,n){return a("el-table-column",{key:n,attrs:{label:n,align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("el-input",{on:{change:t.handlerChange},model:{value:n.row[e],callback:function(a){t.$set(n.row,e,a)},expression:"scope.row[item]"}})]}}],null,!0)})}))],2),a("el-col",[a("p",[t._v("净现值NPV"),a("el-select",{staticStyle:{width:"8%","margin-left":"0.5cm"},attrs:{placeholder:"0%"},model:{value:t.NPVper,callback:function(e){t.NPVper=e},expression:"NPVper"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-input",{staticStyle:{width:"15%","margin-left":"0.5cm"},on:{change:t.handlerChange},model:{value:t.NPVvalue,callback:function(e){t.NPVvalue=e},expression:"NPVvalue"}})],1)]),a("el-table",{staticStyle:{width:"45%"},attrs:{data:t.dataResult,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),t._l(t.dy,(function(e,n){return a("el-table-column",{key:n,attrs:{width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("el-input",{on:{change:function(a){return t.handlerChange(n.row[e])}},model:{value:n.row[e],callback:function(a){t.$set(n.row,e,a)},expression:"scope.row[item]"}})]}}],null,!0)})}))],2),a("el-col",{staticStyle:{"margin-top":"0.5cm","margin-left":"2.5cm","margin-bottom":"0.5cm"}},[a("el-button",{attrs:{type:"primary",plain:"",disabled:t.isActive},on:{click:t.onSubmit}},[t._v("提交")]),a("el-button",{attrs:{type:"warning",plain:"",disabled:t.isActive},on:{click:t.onSave}},[t._v("暂存")]),a("el-button",{attrs:{type:"info",plain:""},on:{click:t.onCancel}},[t._v("取消")])],1)],1)],1),a("el-col",{attrs:{sm:3,xs:24}},[a("div",{staticStyle:{"margin-top":"25vh","text-align":"center"}},[a("el-progress",{attrs:{type:"circle",percentage:Math.ceil(100*t.progress/(12*t.year_length))}}),a("div",{staticStyle:{"text-align":"center","margin-top":"10px"},model:{value:t.year_length,callback:function(e){t.year_length=t._n(e)},expression:"year_length"}},[t._v("完成度: "+t._s(Math.ceil(100*t.progress/(12*t.year_length)))+"%")])],1)])],1)],1)},l=[],r=a("ade3"),s=(a("b64b"),a("49e5")),i=a("1c31"),o={data:function(){var t;return{labId:1,title:"差值法评价互斥方案实验",desc:"本实验需要每一位同学查阅相关资料，获取近5-10年的现金数据，并计算对应的收入差额、净现值NPV、内部收益率等。\n请将相关数据填入以下表格中。",year:[],dy:["1"],NPVvalue:"",NPVper:"",options:[{label:"6%",value:.06},{label:"8%",value:.08},{label:"10%",value:.1},{label:"12%",value:.12}],tableData:{data:[{index:"A",name:"方案A年现金流",0:"-500",1:"50",2:"120",3:"200",4:"200",5:""},{index:"",name:"累计现金流",0:"",1:"",2:"",3:"",4:"",5:""},{index:"B",name:"方案B年现金流",0:"-800",1:"80",2:"250",3:"300",4:"300",5:""},(t={index:"",name:"累计现金流",0:""},Object(r["a"])(t,"0",""),Object(r["a"])(t,2,""),Object(r["a"])(t,3,""),Object(r["a"])(t,4,""),Object(r["a"])(t,5,""),t),{index:"1",name:"现金录入（差额）",0:"",1:"",2:"",3:"",4:"",5:""},{index:"1.1",name:"年收入（差额）",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2",name:"现金流出（差额）",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2.1",name:"投资差额",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2.2",name:"运维成本差额",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2.3",name:"人员成本差额",0:"",1:"",2:"",3:"",4:"",5:""},{index:"3",name:"净现金流量",0:-1e3,1:-200,2:-32,3:172,4:418,5:710},{index:"3.1",name:"累计净现金流量",0:0,1:0,2:0,3:0,4:-642,5:68}]},isActive:!1,dataResult:[{index:"",name:"IRR内部收益率",1:""},{index:"",name:"投资收益率（年）",1:""}],NPV:{name:"净现值NPV",1:""},progress:18,allNum:"",year_length:6,state:null}},watch:{progress:function(t){this.fullname=t}},created:function(){var t=this;Object(s["c"])({labId:1}).then((function(e){var a=e.state;console.log("yessss"),console.log(a),2==a&&Object(i["b"])().then((function(e){console.log(e);var a=e.tableData,n=e.dataResult,l=e.NPVper,r=e.NPV;e.comments,e.ratings;t.tableData=a,console.log("test");var s=Object.keys(a.data[10]);console.log(s.length),console.log(a.data[10]);for(var i=1;i<s.length-2;i++)t.year.push(i);t.dataResult=n,console.log(r),t.NPVper=l,t.NPV=r,t.NPVvalue=t.NPV[1],console.log("yes"),console.log(t.year_length),t.year_length=t.tableData[0].length-1,console.log(t.year_length)}))}))},methods:{add:function(){this.year.push(this.year.length+1+""),this.year_length++},remove:function(){var t=this.year.pop();console.log(t),delete this.tableData.data[10][t],console.log("this.tableData.data[10]"),console.log(this.tableData.data[10])},onSubmit:function(){var t=this;this.state=1,Object(s["g"])({labId:this.labId,year_length:this.year_length,tableData:this.tableData,NPVper:this.NPVper,NPV:this.NPV,dataResult:this.dataResult,state:this.state}).then((function(e){t.$message("提交成功!")})),this.$router.push({path:"/lab/stuLabManage"})},onSave:function(){var t=this;console.log("???wtf"),this.NPV[1]=this.NPVvalue,console.log(this.NPV),this.state=2,Object(s["g"])({labId:this.labId,year_length:this.year_length,tableData:this.tableData,NPVper:this.NPVper,NPV:this.NPV,dataResult:this.dataResult,state:this.state}).then((function(e){t.$message("暂存成功!")})),this.$router.push({path:"/lab/stuLabManage"})},onCancel:function(){this.$router.push({path:"/lab/stuLabManage"})},handlerChange:function(t){""!=t&&this.progress++,""==t&&this.progress--}}},c=o,u=(a("7fd5"),a("2877")),d=Object(u["a"])(c,n,l,!1,null,"9e2768a4",null);e["default"]=d.exports}}]);
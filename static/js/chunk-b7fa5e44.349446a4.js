(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7fa5e44"],{1612:function(e,t,a){},"1c31":function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return i}));var n=a("b775");function l(e){return Object(n["a"])({url:"/api/report/getReportDetails",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/api/report/completeRate",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/api/report/finishRate",method:"get",params:e})}},"49e5":function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));a("d3b7"),a("3ca3"),a("ddb0"),a("9861");var n=a("b775");function l(e){var t=new URLSearchParams(e);return Object(n["a"])({url:"/api/student/sendRegisterEmail",method:"post",data:t})}function r(e){e.studentPassword=a("6c27").sha256(e.studentPassword);var t=new URLSearchParams(e);return Object(n["a"])({url:"/api/student/updateInformation",method:"post",data:t})}function i(e){return Object(n["a"])({url:"/api/student/submitReport",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:JSON.stringify(e)})}function s(e){return Object(n["a"])({url:"/api/student/getReportState",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/api/student/getLabReportId",method:"get",params:e})}},c4ce:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.title))]),a("div",{staticStyle:{margin:"0 10px",padding:"16px",background:"#eee","border-radius":"6px"}},[e._v(e._s(e.desc))]),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:21,xs:24}},[a("el-card",{staticStyle:{margin:"10px"}},[a("div",{staticStyle:{padding:"0 5px 5px 0","text-align":"right"}},[e.year.length>=5&&e.year.length<10?a("el-button",{attrs:{type:"success",icon:"el-icon-plus",circle:"",size:"small"},on:{click:e.add}}):e._e(),e.year.length>5&&e.year.length<=10?a("el-button",{attrs:{type:"danger",icon:"el-icon-minus",circle:"",size:"small"},on:{click:e.remove}}):e._e()],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.data,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{label:"序号",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.index)+" ")]}}])}),a("el-table-column",{attrs:{label:"时间（年份）",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),e._l(e.year,(function(t,n){return a("el-table-column",{key:n,attrs:{label:n,align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-input",{on:{change:e.handlerChange},model:{value:n.row[t],callback:function(a){e.$set(n.row,t,a)},expression:"scope.row[item]"}})]}}],null,!0)})}))],2),a("el-col",[a("p",[e._v("净现值NPV"),a("el-select",{staticStyle:{width:"8%","margin-left":"0.5cm"},attrs:{placeholder:"0%"},model:{value:e.NPVper,callback:function(t){e.NPVper=t},expression:"NPVper"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-input",{staticStyle:{width:"15%","margin-left":"0.5cm"},on:{change:e.handlerChange},model:{value:e.NPVvalue,callback:function(t){e.NPVvalue=t},expression:"NPVvalue"}})],1)]),a("el-table",{staticStyle:{width:"45%"},attrs:{data:e.dataResult,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),e._l(e.dy,(function(t,n){return a("el-table-column",{key:n,attrs:{width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-input",{on:{change:function(a){return e.handlerChange(n.row[t])}},model:{value:n.row[t],callback:function(a){e.$set(n.row,t,a)},expression:"scope.row[item]"}})]}}],null,!0)})}))],2),a("el-col",{staticStyle:{"margin-top":"0.5cm","margin-left":"2.5cm","margin-bottom":"0.5cm"}},[a("el-button",{attrs:{type:"primary",plain:"",disabled:e.isActive},on:{click:e.onSubmit}},[e._v("提交")]),a("el-button",{attrs:{type:"warning",plain:"",disabled:e.isActive},on:{click:e.onSave}},[e._v("暂存")]),a("el-button",{attrs:{type:"info",plain:""},on:{click:e.onCancel}},[e._v("取消")])],1)],1)],1),a("el-col",{attrs:{sm:3,xs:24}},[a("div",{staticStyle:{"margin-top":"25vh","text-align":"center"}},[a("el-progress",{attrs:{type:"circle",percentage:Math.ceil(100*e.progress/(12*e.year_length))}}),a("div",{staticStyle:{"text-align":"center","margin-top":"10px"},model:{value:e.year_length,callback:function(t){e.year_length=e._n(t)},expression:"year_length"}},[e._v("完成度: "+e._s(Math.ceil(100*e.progress/(12*e.year_length)))+"%")])],1)])],1)],1)},l=[],r=a("ade3"),i=a("49e5"),s=a("1c31"),o={data:function(){var e;return{labId:1,title:"差值法评价互斥方案实验",desc:"本实验需要每一位同学查阅相关资料，获取近5-10年的现金数据，并计算对应的收入差额、净现值NPV、内部收益率等。\n请将相关数据填入以下表格中。",year:["1","2","3","4","5","6"],dy:["1"],NPVvalue:"",NPVper:"",options:[{label:"6%",value:.06},{label:"8%",value:.08},{label:"10%",value:.1},{label:"12%",value:.12}],tableData:{data:[{index:"A",name:"方案A年现金流",0:"-500",1:"50",2:"120",3:"200",4:"200",5:""},{index:"",name:"累计现金流",0:"",1:"",2:"",3:"",4:"",5:""},{index:"B",name:"方案B年现金流",0:"-800",1:"80",2:"250",3:"300",4:"300",5:""},(e={index:"",name:"累计现金流",0:""},Object(r["a"])(e,"0",""),Object(r["a"])(e,2,""),Object(r["a"])(e,3,""),Object(r["a"])(e,4,""),Object(r["a"])(e,5,""),e),{index:"1",name:"现金录入（差额）",0:"",1:"",2:"",3:"",4:"",5:""},{index:"1.1",name:"年收入（差额）",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2",name:"现金流出（差额）",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2.1",name:"投资差额",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2.2",name:"运维成本差额",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2.3",name:"人员成本差额",0:"",1:"",2:"",3:"",4:"",5:""},{index:"3",name:"净现金流量",0:-1e3,1:-200,2:-32,3:172,4:418,5:710},{index:"3.1",name:"累计净现金流量",0:0,1:0,2:0,3:0,4:-642,5:68}]},isActive:!1,dataResult:[{index:"",name:"IRR内部收益率",1:""},{index:"",name:"投资收益率（年）",1:""}],NPV:{name:"净现值NPV",1:""},progress:18,allNum:"",year_length:6,state:null}},watch:{progress:function(e){this.fullname=e}},created:function(){var e=this;Object(i["b"])({labId:1}).then((function(t){var a=t.state;console.log("yessss"),console.log(a),2==a&&Object(s["b"])().then((function(t){console.log(t);var a=t.tableData,n=t.dataResult,l=t.NPVper,r=t.NPV;t.comments,t.ratings;e.tableData=a,e.dataResult=n,console.log(r),e.NPVper=l,e.NPV=r,e.NPVvalue=e.NPV[1]}))}))},methods:{add:function(){this.year.push(this.year.length+1+""),this.year_length++},remove:function(){this.year.pop()},onSubmit:function(){var e=this;this.state=1,Object(i["e"])({labId:this.labId,year_length:this.year_length,tableData:this.tableData,NPVper:this.NPVper,NPV:this.NPV,dataResult:this.dataResult,state:this.state}).then((function(t){e.$message("提交成功!")})),this.$router.push({path:"/lab/stuLabManage"})},onSave:function(){var e=this;console.log("???wtf"),this.NPV[1]=this.NPVvalue,console.log(this.NPV),this.state=2,Object(i["e"])({labId:this.labId,year_length:this.year_length,tableData:this.tableData,NPVper:this.NPVper,NPV:this.NPV,dataResult:this.dataResult,state:this.state}).then((function(t){e.$message("暂存成功!")})),this.$router.push({path:"/lab/stuLabManage"})},onCancel:function(){this.$router.push({path:"/lab/stuLabManage"})},handlerChange:function(e){""!=e&&this.progress++,""==e&&this.progress--}}},c=o,u=(a("f35a"),a("2877")),d=Object(u["a"])(c,n,l,!1,null,"968457e2",null);t["default"]=d.exports},f35a:function(e,t,a){"use strict";a("1612")}}]);
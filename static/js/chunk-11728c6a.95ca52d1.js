(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11728c6a"],{1651:function(t,e,a){"use strict";a("5938")},"25f0":function(t,e,a){"use strict";var n=a("6eeb"),l=a("825a"),r=a("d039"),i=a("ad6d"),o="toString",s=RegExp.prototype,c=s[o],u=r((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=o;(u||d)&&n(RegExp.prototype,o,(function(){var t=l(this),e=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in s)?i.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"43b2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.title))]),a("div",{staticStyle:{margin:"0 10px",padding:"16px",background:"#eee","border-radius":"6px"}},[t._v(t._s(t.desc))]),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:21,xs:24}},[a("el-card",{staticStyle:{margin:"10px"}},[a("div",{staticStyle:{padding:"0 5px 5px 0","text-align":"right"}},[t.year.length>=5&&t.year.length<10?a("el-button",{attrs:{type:"success",icon:"el-icon-plus",circle:"",size:"small"},on:{click:t.add}}):t._e(),t.year.length>5&&t.year.length<=10?a("el-button",{attrs:{type:"danger",icon:"el-icon-minus",circle:"",size:"small"},on:{click:t.remove}}):t._e()],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.data,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{label:"序号",width:"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.index)+" ")]}}])}),a("el-table-column",{attrs:{label:"时间（年份）",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),t._l(t.year,(function(e,n){return a("el-table-column",{key:n,attrs:{label:e,align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("el-input",{on:{change:t.handlerChange},model:{value:n.row[e],callback:function(a){t.$set(n.row,e,a)},expression:"scope.row[item]"}})]}}],null,!0)})}))],2),a("el-col",[a("p",[t._v("净现值NPV"),a("el-select",{staticStyle:{width:"8%","margin-left":"0.5cm"},attrs:{placeholder:"0%"},model:{value:t.NPVper,callback:function(e){t.NPVper=e},expression:"NPVper"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-input",{staticStyle:{width:"15%","margin-left":"0.5cm"},on:{change:t.handlerChange},model:{value:t.NPVvalue,callback:function(e){t.NPVvalue=e},expression:"NPVvalue"}})],1)]),a("el-table",{staticStyle:{width:"45%"},attrs:{data:t.dataResult,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),t._l(t.dy,(function(e,n){return a("el-table-column",{key:n,attrs:{width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("el-input",{on:{change:function(a){return t.handlerChange(n.row[e])}},model:{value:n.row[e],callback:function(a){t.$set(n.row,e,a)},expression:"scope.row[item]"}})]}}],null,!0)})}))],2),a("el-col",{staticStyle:{position:"relative",top:"20%",left:"60%","margin-top":"-4cm"}},[a("el-row",[a("el-button",{staticStyle:{"z-index":"5",width:"100px"},attrs:{type:"primary",plain:""},on:{click:t.getChart}},[t._v("生成图像")])],1),a("el-row",{staticStyle:{"margin-top":"0.2cm"}},[a("el-button",{staticStyle:{"z-index":"5",width:"100px"},attrs:{type:"primary",plain:""},on:{click:t.cpIRR}},[t._v("计算IRR")])],1),a("el-row",{staticStyle:{"margin-top":"0.2cm"}},[a("el-button",{staticStyle:{"z-index":"5",width:"100px"},attrs:{type:"primary",plain:""},on:{click:t.cpNPV}},[t._v("计算NPV")])],1)],1),a("el-col",{staticStyle:{"margin-top":"0.5cm","margin-left":"2.5cm","margin-bottom":"0.5cm"}},[a("el-button",{attrs:{type:"primary",plain:"",disabled:t.isActive},on:{click:t.onSubmit}},[t._v("提交")]),a("el-button",{attrs:{type:"warning",plain:"",disabled:t.isActive},on:{click:t.onSave}},[t._v("暂存")]),a("el-button",{attrs:{type:"info",plain:""},on:{click:t.onCancel}},[t._v("取消")])],1)],1)],1),a("el-col",{attrs:{sm:3,xs:24}},[a("div",{staticStyle:{"margin-top":"25vh","text-align":"center"}},[a("el-progress",{attrs:{type:"circle",percentage:Math.ceil(100*t.progress/(12*t.year_length))}}),a("div",{staticStyle:{"text-align":"center","margin-top":"10px"},model:{value:t.year_length,callback:function(e){t.year_length=t._n(e)},expression:"year_length"}},[t._v("完成度: "+t._s(Math.ceil(100*t.progress/(12*t.year_length)))+"%")])],1)])],1),a("ve-line",{attrs:{data:t.chartData}})],1)},l=[],r=(a("d3b7"),a("25f0"),a("49e5")),i={data:function(){return{title:"软件工程经济学实验",desc:"差值法评价互斥方案实验",year:["1","2","3","4","5"],dy:["1"],NPVvalue:"",NPVper:"",options:[{label:"6%",value:.06},{label:"8%",value:.08},{label:"10%",value:.1},{label:"12%",value:.12}],tableData:{data:[{index:"A",name:"方案A年现金流",1:"-500",2:"50",3:"120",4:"200",5:"200"},{index:"",name:"累计现金流",1:"",2:"",3:"",4:"",5:""},{index:"B",name:"方案B年现金流",1:"-800",2:"80",3:"250",4:"300",5:"300"},{index:"",name:"累计现金流",1:"",2:"",3:"",4:"",5:""},{index:"1",name:"现金录入（差额）",1:"",2:"",3:"",4:"",5:""},{index:"1.1",name:"年收入（差额）",1:"",2:"",3:"",4:"",5:""},{index:"2",name:"现金流出（差额）",1:"",2:"",3:"",4:"",5:""},{index:"2.1",name:"投资差额",1:"",2:"",3:"",4:"",5:""},{index:"2.2",name:"运维成本差额",1:"",2:"",3:"",4:"",5:""},{index:"2.3",name:"人员成本差额",1:"",2:"",3:"",4:"",5:""},{index:"3",name:"净现金流量",1:-1e3,2:-200,3:-32,4:172,5:418},{index:"3.1",name:"累计净现金流量",1:"",2:"",3:"",4:"",5:""}],state:null},isActive:!1,dataResult:[{index:"",name:"IRR内部收益率",1:""},{index:"",name:"投资收益率（年）",1:""}],NPV:{name:"净现值NPV",1:""},progress:15,allNum:"",year_length:5,chartData:{columns:["NPV","百分比R"],rows:[{NPV:"0.02","百分比R":0},{NPV:"0.04","百分比R":0},{NPV:"0.06","百分比R":0},{NPV:"0.08","百分比R":0},{NPV:"0.10","百分比R":0},{NPV:"0.12","百分比R":0},{NPV:"0.14","百分比R":0},{NPV:"0.16","百分比R":0},{NPV:"0.18","百分比R":0},{NPV:"0.20","百分比R":0},{NPV:"0.22","百分比R":0},{NPV:"0.24","百分比R":0},{NPV:"0.26","百分比R":0},{NPV:"0.28","百分比R":0},{NPV:"0.30","百分比R":0},{NPV:"0.32","百分比R":0},{NPV:"0.34","百分比R":0},{NPV:"0.36","百分比R":0},{NPV:"0.38","百分比R":0},{NPV:"0.40","百分比R":0},{NPV:"0.42","百分比R":0},{NPV:"0.44","百分比R":0},{NPV:"0.46","百分比R":0},{NPV:"0.48","百分比R":0},{NPV:"0.50","百分比R":0},{NPV:"0.52","百分比R":0},{NPV:"0.54","百分比R":0},{NPV:"0.56","百分比R":0},{NPV:"0.58","百分比R":0},{NPV:"0.60","百分比R":0},{NPV:"0.62","百分比R":0},{NPV:"0.64","百分比R":0},{NPV:"0.66","百分比R":0},{NPV:"0.68","百分比R":0},{NPV:"0.70","百分比R":0},{NPV:"0.72","百分比R":0},{NPV:"0.74","百分比R":0},{NPV:"0.76","百分比R":0},{NPV:"0.78","百分比R":0},{NPV:"0.80","百分比R":0},{NPV:"0.82","百分比R":0}]}}},watch:{progress:function(t){this.fullname=t}},created:function(){getChart()},methods:{getChart:function(){for(var t=0,e=.02,a=0;a<this.chartData.rows.length;a++){t=0;for(var n=0;n<this.year.length;n++)t+=this.tableData.data[6][n+1]/Math.pow(1+e,n);this.chartData.rows[a].百分比R=t,e+=.02}},add:function(){console.log(this.tableData),this.year.push(this.year.length+1+""),this.year_length++},remove:function(){this.year.pop()},onSubmit:function(){var t=this;console.log("yes"),this.tableData.state=1,Object(r["d"])(this.tableData).then((function(e){console.log(e),t.$message("提交成功!")}))},onSave:function(){console.log("yes");var t=this.tableData;t["state"]=0,Object(r["d"])(t),this.$message("暂存成功!")},computeNPV:function(){for(var t=0,e=0;e<this.year.length;e++)console.log(this.tableData.data[6][e+1]/Math.pow(1+this.NPVper,e)),t+=this.tableData.data[6][e+1]/Math.pow(1+this.NPVper,e);return Math.round(t)},computeIRR:function(){var t=20,e=1e-7,a=.1,n=0;while(n<t){for(var l=0,r=0,i=0;i<this.year.length;i++)l+=this.tableData.data[6][i+1]/Math.pow(1+a,i),r+=-i*this.tableData.data[6][i+1]/Math.pow(1+a,i+1);var o=a-l/r;if(Math.abs(o-a)<=e)return o;a=o,n++}return a},cpIRR:function(){var t=this.computeIRR();this.dataResult[0][1]=Math.round(1e4*t)/100,this.dataResult[0][1]=this.dataResult[0][1].toString()+"%",console.log(t)},cpNPV:function(){var t=this.computeNPV();this.NPVvalue=t},onCancel:function(){this.$router.push({path:"/dashboard"})},handlerChange:function(t){""!=t&&this.progress++,""==t&&this.progress--}}},o=i,s=(a("1651"),a("2877")),c=Object(s["a"])(o,n,l,!1,null,"49ed3dec",null);e["default"]=c.exports},"49e5":function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return o}));a("d3b7"),a("3ca3"),a("ddb0"),a("9861");var n=a("b775");function l(t){var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/student/sendRegisterEmail",method:"post",data:e})}function r(t){return Object(n["a"])({url:"/api/student/reportDetails",method:"get",params:t})}function i(t){t.studentPassword=a("6c27").sha256(t.studentPassword),console.log(t);var e=new URLSearchParams(t);return Object(n["a"])({url:"/api/student/updateInformation",method:"post",data:e})}function o(t){return Object(n["a"])({url:"/api/student/submitReport",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:JSON.stringify(t)})}},5938:function(t,e,a){}}]);
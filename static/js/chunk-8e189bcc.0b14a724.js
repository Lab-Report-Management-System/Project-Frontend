(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e189bcc"],{"1c31":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return s}));var n=a("b775");function r(t){return Object(n["a"])({url:"/api/report/getReportDetails",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/api/report/completeRate",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/api/report/finishRate",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/api/report/getReportIds",method:"get",params:t})}},"25f0":function(t,e,a){"use strict";var n=a("6eeb"),r=a("825a"),l=a("d039"),i=a("ad6d"),s="toString",o=RegExp.prototype,u=o[s],c=l((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(c||d)&&n(RegExp.prototype,s,(function(){var t=r(this),e=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in o)?i.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"92bd":function(t,e,a){},9830:function(t,e,a){"use strict";a("92bd")},eb0d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.title))]),a("div",{staticStyle:{margin:"0 10px",padding:"16px",background:"#eee","border-radius":"6px"}},[t._v(t._s(t.desc))]),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:16,xs:24}},[a("el-card",{staticStyle:{margin:"10px"}},[a("div",{staticStyle:{padding:"0 5px 5px 0","text-align":"right"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.data,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{label:"序号",width:"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.index)+" ")]}}])}),a("el-table-column",{attrs:{label:"时间（年份）",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),t._l(t.year,(function(e,n){return a("el-table-column",{key:n,attrs:{label:n,align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row[e])+" ")]}}],null,!0)})}))],2),a("el-col",[a("p",[t._v("净现值NPV"),a("el-select",{staticStyle:{width:"8%","margin-left":"0.5cm"},attrs:{placeholder:"6%"},model:{value:t.NPVper,callback:function(e){t.NPVper=e},expression:"NPVper"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-input",{staticStyle:{width:"15%","margin-left":"0.5cm"},model:{value:t.NPVvalue,callback:function(e){t.NPVvalue=e},expression:"NPVvalue"}})],1)]),a("el-table",{staticStyle:{width:"45%"},attrs:{data:t.dataResult,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{label:"项目",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),t._l(t.dy,(function(e,n){return a("el-table-column",{key:n,attrs:{label:"标准答案",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row[e])+" ")]}}],null,!0)})})),t._l(t.stuAnswer,(function(e,n){return a("el-table-column",{key:n,attrs:{label:"您的答案",width:"auto",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row[e])+" ")]}}],null,!0)})}))],2),a("el-input",{staticStyle:{width:"50%"},attrs:{type:"textarea",rows:2,disabled:"",placeholder:"这里是老师的评价..."},model:{value:t.comments,callback:function(e){t.comments=e},expression:"comments"}}),a("el-rate",{attrs:{"show-text":"",texts:t.textss,disabled:""},model:{value:t.ratings,callback:function(e){t.ratings=e},expression:"ratings"}}),a("el-col",{staticStyle:{"margin-top":"0.5cm","margin-bottom":"0.5cm"}},[a("el-button",{attrs:{type:"info",plain:""},on:{click:t.onReturn}},[t._v("返回")])],1)],1)],1),a("el-col",{attrs:{sm:8,xs:24}},[a("div",{staticStyle:{"margin-top":"25vh","text-align":"center"}},[a("ve-line",{attrs:{data:t.chartData}})],1)])],1)],1)},r=[],l=a("ade3"),i=(a("d3b7"),a("25f0"),a("1c31")),s={data:function(){var t;return{title:"差值法评价互斥方案实验",desc:"本实验需要每一位同学查阅相关资料，获取近5-10年的现金数据，并计算对应的收入差额、净现值NPV、内部收益率等。\n请将相关数据填入以下表格中。",year:["1","2","3","4","5","6"],dy:["1"],stuAnswer:["2"],NPVvalue:"",comments:"",labReportId:this.$route.query.labReportId,ratings:5,NPVper:"",textss:["不及格","及格","中","良","优"],options:[{label:"6%",value:.06},{label:"8%",value:.08},{label:"10%",value:.1},{label:"12%",value:.12}],tableData:{data:[{index:"A",name:"方案A年现金流",0:"-500",1:"50",2:"120",3:"200",4:"200",5:""},{index:"",name:"累计现金流",0:"",1:"",2:"",3:"",4:"",5:""},{index:"B",name:"方案B年现金流",0:"-800",1:"80",2:"250",3:"300",4:"300",5:""},(t={index:"",name:"累计现金流",0:""},Object(l["a"])(t,"0",""),Object(l["a"])(t,2,""),Object(l["a"])(t,3,""),Object(l["a"])(t,4,""),Object(l["a"])(t,5,""),t),{index:"1",name:"现金录入（差额）",0:"",1:"",2:"",3:"",4:"",5:""},{index:"1.1",name:"年收入（差额）",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2",name:"现金流出（差额）",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2.1",name:"投资差额",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2.2",name:"运维成本差额",0:"",1:"",2:"",3:"",4:"",5:""},{index:"2.3",name:"人员成本差额",0:"",1:"",2:"",3:"",4:"",5:""},{index:"3",name:"净现金流量",0:-1e3,1:-200,2:-32,3:172,4:418,5:710},{index:"3.1",name:"累计净现金流量",0:0,1:0,2:0,3:0,4:-642,5:68}],state:null},isActive:!1,dataResult:[{index:"",name:"IRR内部收益率",1:"22",2:"33"},{index:"",name:"投资收益率（年）",1:"",2:"22"}],NPV:{name:"净现值NPV",1:""},progress:18,allNum:"",year_length:6,chartData:{columns:["NPV","百分比R"],rows:[{NPV:"0.02","百分比R":0},{NPV:"0.04","百分比R":0},{NPV:"0.06","百分比R":0},{NPV:"0.08","百分比R":0},{NPV:"0.10","百分比R":0},{NPV:"0.12","百分比R":0},{NPV:"0.14","百分比R":0},{NPV:"0.16","百分比R":0},{NPV:"0.18","百分比R":0},{NPV:"0.20","百分比R":0},{NPV:"0.22","百分比R":0},{NPV:"0.24","百分比R":0},{NPV:"0.26","百分比R":0},{NPV:"0.28","百分比R":0},{NPV:"0.30","百分比R":0},{NPV:"0.32","百分比R":0},{NPV:"0.34","百分比R":0},{NPV:"0.36","百分比R":0},{NPV:"0.38","百分比R":0},{NPV:"0.40","百分比R":0},{NPV:"0.42","百分比R":0},{NPV:"0.44","百分比R":0},{NPV:"0.46","百分比R":0},{NPV:"0.48","百分比R":0},{NPV:"0.50","百分比R":0},{NPV:"0.52","百分比R":0},{NPV:"0.54","百分比R":0},{NPV:"0.56","百分比R":0},{NPV:"0.58","百分比R":0},{NPV:"0.60","百分比R":0},{NPV:"0.62","百分比R":0},{NPV:"0.64","百分比R":0},{NPV:"0.66","百分比R":0},{NPV:"0.68","百分比R":0},{NPV:"0.70","百分比R":0},{NPV:"0.72","百分比R":0},{NPV:"0.74","百分比R":0},{NPV:"0.76","百分比R":0},{NPV:"0.78","百分比R":0},{NPV:"0.80","百分比R":0},{NPV:"0.82","百分比R":0}]}}},watch:{progress:function(t){this.fullname=t},tableData:function(){this.$nextTick((function(){this.getChart(),this.cpIRR(),this.cpNPV()}))}},created:function(){this.getReportDetails()},methods:{getReportDetails:function(){var t=this;Object(i["b"])({labReportId:this.labReportId}).then((function(e){var a=e.tableData,n=e.dataResult,r=e.NPVper,l=e.NPV,i=e.comments,s=e.ratings;t.tableData=a,t.dataResult[0]["2"]=n[0]["1"],t.dataResult[1]["2"]=n[1]["1"],t.NPVper=r,t.NPV=l,t.comments=i,t.ratings=s}))},getChart:function(){for(var t=0,e=.02,a=0;a<this.chartData.rows.length;a++){t=0;for(var n=-1;n<this.year.length-1;n++)t+=this.tableData.data[10][n+1]/Math.pow(1+e,n+1);this.chartData.rows[a].百分比R=t,e+=.02}},add:function(){console.log(this.tableData),this.year.push(this.year.length+1+""),this.year_length++},remove:function(){this.year.pop()},onSubmit:function(){console.log("yes"),this.$message("提交成功!"),this.isActive=!0},onSave:function(){console.log("yes"),this.$message("正在加载下一份!")},computeNPV:function(){for(var t=0,e=-1;e<this.year.length-1;e++)console.log(this.tableData.data[10][e+1]/Math.pow(1+this.NPVper,e+1)),t+=this.tableData.data[10][e+1]/Math.pow(1+this.NPVper,e+1);return Math.round(t)},computeIRR:function(){var t=20,e=1e-7,a=.1,n=0;while(n<t){for(var r=0,l=0,i=-1;i<this.year.length-1;i++)r+=this.tableData.data[10][i+1]/Math.pow(1+a,i+1),l+=-(i+1)*this.tableData.data[10][i+1]/Math.pow(1+a,i+2);var s=a-r/l;if(Math.abs(s-a)<=e)return s;a=s,n++}return a},cpIRR:function(){var t=this.computeIRR();this.dataResult[0][1]=Math.round(1e4*t)/100,this.dataResult[0][1]=this.dataResult[0][1].toString()+"%",console.log(t)},cpNPV:function(){var t=this.computeNPV();this.NPVvalue=t},cpTouZi:function(){for(var t=0,e=0;e<this.year.length;e++)if(this.tableData.data[11][e+1]>0){t=e;break}this.dataResult[1][1]=Math.round(100*(t+Math.abs(this.tableData.data[11][t]/this.tableData.data[10][t+1])))/100},onReturn:function(){"true"===this.$route.query.goindex?this.$router.push("/"):this.$router.back(-1)}}},o=s,u=(a("9830"),a("2877")),c=Object(u["a"])(o,n,r,!1,null,"3dc8db75",null);e["default"]=c.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ad99f1c"],{"63a1":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return l}));var n=a("b775");function i(t){return Object(n["a"])({url:"/testPost",method:"post",data:t})}function l(){return Object(n["a"])({url:"/test",method:"get"})}},"90fe":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",prop:"id",width:"95"}}),a("el-table-column",{attrs:{label:"Title",prop:"title",width:"200"}}),a("el-table-column",{attrs:{label:"Data",width:"210",prop:"data",align:"center"}})],1)],1)},i=[],l=a("63a1"),r={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(l["a"])().then((function(e){t.list=e,console.log(e),t.listLoading=!1}))}}},o=r,s=a("2877"),c=Object(s["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports}}]);
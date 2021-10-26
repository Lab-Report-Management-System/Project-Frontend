<template>
    <div>
    <p style="font-family:simhei;font-size: 25px;left: 10%;position: absolute;">{{name}}老师,你好！</p>
    <div style="top: 10%;position: absolute;width: 68%;left: 10%;">
       <el-tabs type="border-card">
         <el-tab-pane v-for="(data,index) in labList" :key="index" @click="clickLab(data)">
             <span slot="label"><i class="el-icon-date"></i> {{data}}</span>
             <TableList :tableData="tableData1[index]"></TableList>
         </el-tab-pane>
         
         <!-- <TableList id="name2" :spareID="num2"></TableList> -->
       </el-tabs>
       
         </div>
         
             
         
         <!-- <div>
             <TableList1 id="name2" :spareID="num2"></TableList1>
         </div> -->
    </div>
</template>

<script>
import TableList from "./tableList.vue"
import TableList1 from "./tableList.vue"
  export default {
      components:{
        TableList,
          TableList1
      },
    methods: {
      tableRowClassName({row, rowIndex}) {
        this.rowID=rowIndex;
        if (this.tableData1[rowIndex].state==2) {
          return 'warning-row';
        }
        if (this.tableData1[rowIndex].state==1) {
          return 'success-row';
        }
        return '';
      },
      handleClickEdit(row){
          // this.$router.push({path:"/example/labTeacher",query:{
          //                   name:row.name,
          //                   stuNumber:row.stuNumber,
          //                   labID:row.labID,
          //                   isActive:row.isActive
          //                 }});
      },
      clickLab(data){
          console.log("yes")
      }
      
    },
    
     data() {
          return {
              num:["","",""],
              num2:"2",
            labList:[
                "实验一",
                "实验二",
                "实验三"
            ],
            name:"Ameis",
            none:"暂无消息",
            rowID:"",
            tableData1: [[{
              labName: '软工实验系统',
              name: 'W',
              stuNumber: '0000001',
              isActive:true,
              state:1,
              labID:0
            }, {
              labName: '软工实验系统',
              name: 'W',
              stuNumber: '0000001',
              isActive:false,
              state:2,
              labID:1
            }, {
              labName: '软工实验系统',
              name: 'w',
              stuNumber: '0000001',
              isActive:true,
              state:1,
              labID:2
            }, {
              labName: '软工实验系统',
              name: 'W',
              stuNumber: '0000001',
              isActive:false,
              state:0,
              labID:3
            }],[{
              labName: '软工实验系统',
              name: 'W',
              stuNumber: '0000001',
              isActive:true,
              state:1,
              labID:0
            }, {
              labName: '软工实验系统',
              name: 'W',
              stuNumber: '0000001',
              isActive:false,
              state:2,
              labID:1
            }, {
              labName: '软工实验系统',
              name: 'w',
              stuNumber: '0000001',
              isActive:true,
              state:1,
              labID:2
            }, {
              labName: '软工实验系统',
              name: 'W',
              stuNumber: '0000001',
              isActive:false,
              state:0,
              labID:3
            }],[{
              labName: '软工实验系统',
              name: 'W',
              stuNumber: '0000001',
              isActive:true,
              state:1,
              labID:0
            }, {
              labName: '软工实验系统',
              name: 'W',
              stuNumber: '0000001',
              isActive:false,
              state:2,
              labID:1
            }, {
              labName: '软工实验系统',
              name: 'w',
              stuNumber: '0000001',
              isActive:true,
              state:1,
              labID:2
            }, {
              labName: '软工实验系统',
              name: 'W',
              stuNumber: '0000001',
              isActive:false,
              state:0,
              labID:3
            }]]
          }
        }
        // created(){
        //     var url="http://121.5.175.203:8080/api/Video/getFavoriteVideo";
        //     var data=new Object;
        //     data.stuNumber=this.$router.query.stuNumber;
        //     data.name=this.$router.query.name;
        //     this.$axios.get(data,url)
        //     .then(res => {
        //            this.tableData=res.data;
        //     });
        //     this.name=this.tableData.name;
        // }
    }
</script>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

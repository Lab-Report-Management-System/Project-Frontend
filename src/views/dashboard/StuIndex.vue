<!-- <template>
  <div>
    <p style="font-family:simhei;font-size: 25px;left: 10%;position: absolute;">{{ name }},你好！</p>
    <div style="top: 10%;position: absolute;width: 100%;">
      <el-table
        :data="tableData"
        border
        :row-class-name="tableRowClassName"
        :empty-text="none"
        style="width: 68%;left: 10%;top: 20%;"
      >
        <el-table-column
          prop="labName"
          label="实验报告名称"
          width="250"
        />
        <el-table-column
          prop="stuNumber"
          label="学号"
          width="120"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
        />
        <el-table-column
          prop="city"
          label="指导教师"
          width="150"
        >黄杰
        </el-table-column>
        <el-table-column
          label="已完成    |    未完成"
          width="200"
          style="position:relative;left:50%;"
        >
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-check" circle style="zoom: 0.8;" :disabled="!tableData[rowID].isActive" />
            <el-button type="primary" icon="el-icon-edit" circle style="zoom: 0.8;left:34%;position:absolute;":disabled="tableData[rowID].isActive" />
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="180"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" :disabled="!tableData[rowID].isActive" @click="handleClickEdit(scope.row)">预览</el-button>
            <el-button type="text" size="small" :disabled="tableData[rowID].isActive" @click="handleClickEdit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table .info-row {
    background: #F2F6FC;
  }
</style>

<script>
import { getStuInfo } from '../../api/student.js'
export default {

  data() {
    return {
      name: '',
      none: '暂无消息',
      rowID: '',
      tableData: []
    }
  },
  created() {
    var url = 'http://182.61.43.155:6001/api/stuInfo'
    const parms = { stuNumber: 1953603, name: '尚丙奇' }
    var data = new Object()
    // data.stuNumber=this.$router.query.stuNumber;
    data.stuNumber = 1953608
    data.name = '吴英豪'
    console.log(parms)
    getStuInfo(parms).then(res => {
      this.tableData = res
      console.log(this.tableData[0].name)
      this.name = this.tableData[0].name
    })
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      this.rowID = rowIndex
      if (this.tableData[rowIndex].state === 2) {
        return 'warning-row'
      }
      if (this.tableData[rowIndex].state === 1) {
        return 'success-row'
      }
      if (this.tableData[rowIndex].state === 0) {
        return 'info-row'
      }
      return ''
    },
    handleClickEdit(row) {
      this.$router.push({ path: '/example/labRep', query: {
        name: row.name,
        stuNumber: row.stuNumber,
        labID: row.labID,
        isActive: row.isActive
      }})
    }

  }

}
</script>
 -->
 <template>
   <div style="width: 68%;margin: 0 auto">
     <p style="font-family:simhei;font-size: 25px;left: 10%;">{{ name }}同学,你好！</p>
     <div style="padding-bottom: 30px;">
       <el-tabs type="border-card">
         <el-tab-pane v-for="(data,index) in labList" :key="index" @click="clickLab(data)">
           <span slot="label"><i class="el-icon-date" /> {{ data }}</span>
           <TableList :table-data="tableData1[index]" />
         </el-tab-pane>
       </el-tabs>
       <div class="comment">
         <div class="comment-title"><i class="el-icon-s-comment" /> 评论区</div>
         <div class="comment-main">
           <div v-for="(item,index) in commentList" :key="index" class="comment-main-item">
             <div class="comment-main-item-top">
               <el-avatar size="small" :src="item.avatar" />
               <div>{{ item.name }}</div>
               <span>{{ item.time }}</span>
             </div>
             <div class="comment-main-item-content">{{ item.content }}</div>
           </div>
         </div>
       </div>
       <div style="margin-top: 10px">
         <el-input v-model="content" placeholder="请输入评论内容">
           <el-button slot="append" style="background: #409EFF;color: #fff;border-radius: 0">发布</el-button>
         </el-input>
       </div>
     </div>
   </div>
 </template>

 <script>
 import TableList from './stuTableList.vue'
 // import TableList1 from './tableList.vue'
 export default {
   components: {
     TableList
     // TableList1
   },

   data() {
     return {
       num: ['', '', ''],
       num2: '2',
       labList: [
         '实验一',
         '实验二',
         '实验三'
       ],
       name: 'wyh',
       none: '暂无消息',
       rowID: '',
       tableData1: [[{
         labName: '软工实验系统',
         name: 'W',
         stuNumber: '0000001',
         isActive: true,
         state: 1,
         labID: 0
       }, {
         labName: '软工实验系统',
         name: 'W',
         stuNumber: '0000001',
         isActive: false,
         state: 2,
         labID: 1
       }, {
         labName: '软工实验系统',
         name: 'w',
         stuNumber: '0000001',
         isActive: true,
         state: 1,
         labID: 2
       }, {
         labName: '软工实验系统',
         name: 'W',
         stuNumber: '0000001',
         isActive: false,
         state: 0,
         labID: 3
       }], [{
         labName: '软工实验系统',
         name: 'W',
         stuNumber: '0000001',
         isActive: true,
         state: 1,
         labID: 0
       }, {
         labName: '软工实验系统',
         name: 'W',
         stuNumber: '0000001',
         isActive: false,
         state: 2,
         labID: 1
       }, {
         labName: '软工实验系统',
         name: 'w',
         stuNumber: '0000001',
         isActive: true,
         state: 1,
         labID: 2
       }, {
         labName: '软工实验系统',
         name: 'W',
         stuNumber: '0000001',
         isActive: false,
         state: 0,
         labID: 3
       }], [{
         labName: '软工实验系统',
         name: 'W',
         stuNumber: '0000001',
         isActive: true,
         state: 1,
         labID: 0
       }, {
         labName: '软工实验系统',
         name: 'W',
         stuNumber: '0000001',
         isActive: false,
         state: 2,
         labID: 1
       }, {
         labName: '软工实验系统',
         name: 'w',
         stuNumber: '0000001',
         isActive: true,
         state: 1,
         labID: 2
       }, {
         labName: '软工实验系统',
         name: 'W',
         stuNumber: '0000001',
         isActive: false,
         state: 0,
         labID: 3
       }]],
       commentList: [
         {
           name: '赵小刚',
           avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
           content: '这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！',
           time: '2021-11-28 20:50:22'
         },
         {
           name: '赵小刚',
           avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
           content: '这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！',
           time: '2021-11-28 20:50:22'
         },
         {
           name: '赵小刚',
           avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
           content: '这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！',
           time: '2021-11-28 20:50:22'
         },
         {
           name: '赵小刚',
           avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
           content: '这个客户是我们的重点客户,请相关同时尽快帮忙落实解决！',
           time: '2021-11-28 20:50:22'
         }, {
           name: '刚',
           avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
           content: '这尽快帮忙落实解决！',
           time: '2021-11-28 20:50:22'
         }, {
           name: '刚',
           avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
           content: '这尽快帮忙落实解决！',
           time: '2021-11-28 20:50:22'
         }, {
           name: '刚',
           avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
           content: '这尽快帮忙落实解决！',
           time: '2021-11-28 20:50:22'
         }, {
           name: '刚',
           avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
           content: '这尽快帮忙落实解决！',
           time: '2021-11-28 20:50:22'
         }, {
           name: '?刚',
           avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
           content: '这尽快帮忙落实解决！',
           time: '2021-11-28 20:50:22'
         }
       ],
       content: ''
     }
   },
   created() {
     this.commentList.push(this.commentList[0])
   },
   methods: {
     tableRowClassName({ row, rowIndex }) {
       this.rowID = rowIndex
       if (this.tableData1[rowIndex].state == 2) {
         return 'warning-row'
       }
       if (this.tableData1[rowIndex].state == 1) {
         return 'success-row'
       }
       return ''
     },
     handleClickEdit(row) {
       // this.$router.push({path:"/example/labTeacher",query:{
       //                   name:row.name,
       //                   stuNumber:row.stuNumber,
       //                   labID:row.labID,
       //                   isActive:row.isActive
       //                 }});
     },
     clickLab(data) {
       console.log('yes')
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
 <style lang="scss" scoped>
   .el-table .warning-row {
     background: oldlace;
   }

   .el-table .success-row {
     background: #f0f9eb;
   }
   .comment {
     margin: 10px auto;
     overflow: hidden;
     .comment-title {
       line-height: 50px;
       color: #323232;
     }
     .comment-main {
       .comment-main-item{
         padding: 4px 10px;
         margin-bottom: 5px;
         background: #f4f4f4;
         .comment-main-item-top {
           padding: 4px 0 8px 0;
           display: flex;
           align-items: flex-end;
           div {
             font-size: 14px;
             margin: 0 6px 0 2px;
           }
           span {
             font-size: 12px;
             color: #ccc;
           }
         }
         .comment-main-item-content {
           font-size: 14px;
           color: #666666;
         }
       }
     }
   }
 </style>

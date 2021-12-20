<template>
  <div style="width: 68%;margin: 0 auto">
    <p style="font-family:simhei;font-size: 25px;left: 10%;">{{ userName }}同学,你好！</p>
    <div style="padding-bottom: 30px;">
      <el-tabs type="border-card">
        <el-tab-pane v-for="(data,index) in labList" :key="index" @click="clickLab(data)">
          <span slot="label"><i class="el-icon-date" /> {{ data }}</span>
          <TableList :tableData="tableData1[index]" />
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
import { getInfo } from '@/api/user'
import user from '@/store/modules/user'
import { getReportState } from '@/api/student'
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
        '实验一'
        // '实验二',
        // '实验三'
      ],
      name: 'wyh',
      none: '暂无消息',
      rowID: '',
      userId: 1953603,
      userName: 'ss',
      state: 0,
      tableData1: [[{
        labName: '软工实验系统',
        name: '',
        stuNumber: '',
        isActive: true,
        state: 1,
        labID: 0
      }, {
        labName: '软工实验系统',
        name: '',
        stuNumber: '',
        isActive: false,
        state: 2,
        labID: 3
      }, {
        labName: '软工实验系统',
        name: '',
        stuNumber: '',
        isActive: true,
        state: 1,
        labID: 2
      }, {
        labName: '软工实验系统',
        name: '',
        stuNumber: '',
        isActive: false,
        state: 0,
        labID: 1
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
  watch: {
    'tableData1': function(newVal) {
      this.tableData1 = newVal
    }
  },
  created() {
    console.log(this.tableData1[0])
    this.commentList.push(this.commentList[0])
    getInfo().then(res => {
      this.userId = res.data.userID
      this.userName = res.data.userName
      this.initial()
    })
    getReportState({ 'labId': 1 }).then(res => {
      const { state } = res
      console.log("yessss")
      console.log(state)
      let isActive = false;
      if(state==1){
        isActive = true
      }
      else{
        isActive = true
      }
      // console.log(this.tableData1[0][this.tableData1[0].length - 1])
      this.tableData1[0].push({
        labName: '软工实验系统',
        name: this.userName,
        stuNumber: this.userId,
        isActive: isActive,
        state: state,
        labID: 1
      })
      console.log("yessss")
      console.log(state)
      this.tableData1[0][this.tableData1[0].length - 1].state = state
      if(state==1){
        this.tableData1[0][this.tableData1[0].length - 1].isActive = true
      }
      else{
        this.tableData1[0][this.tableData1[0].length - 1].isActive = false
      }
      console.log(this.tableData1[0][this.tableData1[0].length - 1])
    })
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
    initial() {
      for (let j = 0; j < this.tableData1.length; j++) {
        for (let i = 0; i < this.tableData1[0].length; i++) {
          // console.log(this.tableData1[0].length)
          this.tableData1[j][i].name = this.userName
          this.tableData1[j][i].stuNumber = this.userId
        }
      }
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

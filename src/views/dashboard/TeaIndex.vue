<template>
  <div style="width: 68%;margin: 0 auto">
    <p style="font-family:simhei;font-size: 25px;left: 10%;">{{ name }}老师,你好！</p>
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
          <div v-for="(item, index) in commentList" :key="index" class="comment-main-item">
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
        <!--        <el-input v-model="content" placeholder="请输入评论内容">-->
        <!--          <el-button slot="append" style="background: #409EFF;color: #fff;border-radius: 0" @click="submitComment">发布</el-button>-->
        <!--        </el-input>-->
      </div>
    </div>
  </div>
</template>

<script>
import TableList from './tableList.vue'
import TableList1 from './tableList.vue'
import { getForumDetails, submitForum } from '@/api/course'
import { getInfo } from '@/api/user'
import { getReportIds } from '@/api/report'
export default {
  components: {
    TableList,
    TableList1
  },

  data() {
    return {
      num: ['', '', ''],
      num2: '2',
      labList: [
        '实验一'
      ],
      name: '',
      none: '暂无消息',
      rowID: '',
      tableData1: [[
        {
          labName: '软工实验系统',
          name: '王冠博',
          stuNumber: '1950461',
          isActive: true,
          state: 1,
          labReportId: 0
        }
      ]],
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
    getReportIds().then(res => {
      console.log(res)
      // this.tableDate1=res.data.tableData1
      const data = res.data.tableData1
      console.log('res')
      console.log(data[0])
      for (let i = 0; i < data[0].length; i++) {
        this.tableData1[0].push(data[0][i])
      }
      // this.tableData1[0].push(data[0][0])
      // this.tableData1[0].push(data[0][1])
      console.log(this.tableDate1)
    })
    this.getComments()
    getInfo().then(res => {
      const { userNickname } = res.data
      this.name = userNickname
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
    getComments() {
      getForumDetails({ 'courseId': 42014603 }).then(res => {
        const { commentList } = res.data
        this.commentList = commentList
      })
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
    },
    submitComment() {
      submitForum({ content: this.content, courseId: 42014603 }).then(res => {
        const { message } = res
        this.$message(message)
        this.getComments()
      })
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

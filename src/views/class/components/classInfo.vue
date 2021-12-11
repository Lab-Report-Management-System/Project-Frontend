<template>
  <div>
    <!-- class info -->
    <div class="class-info">
      <el-card class="box-card" shadow="hover">
        <div class="text item">
          <div style="float:left">课程名称:</div> <div>{{ courseInfo.courseName }}({{ courseId }})</div>
        </div>
        <div class="text item">
          <div style="float:left">授课教师:</div> <div>{{ courseInfo.teacherName }}</div>
        </div>
        <div class="text item">
          <div style="float:left">上课地点:</div> <div>安楼{{ courseInfo.classroom }}</div>
        </div>
      </el-card>
    </div>
    <!-- student info -->
    <div class="student-info">
      <el-card class="box-card" shadow="hover">
        <div class="text item">
          <div style="text-align:center">学生管理</div>
        </div>
        <div class="text item">
          <div style="float:left">选课人数:</div>  <div>{{ courseInfo.studentNum }}</div>
        </div>
        <el-button type="text" class="button stu-button">查看学生信息</el-button>
      </el-card>
    </div>
    <!-- lab info -->
    <div class="lab-info">
      <el-card class="box-card" shadow="hover">
        <div class="text item">
          <div style="text-align:center">实验管理</div>
        </div>
        <div class="text item">
          <div style="float:left">已公布实验数:</div>  <div>{{ labInfo.labPublishedNum }}</div>
        </div>
        <div class="text item">
          <div style="float:left">已结束:</div>  <div>{{ labInfo.labPastNum }}</div>
        </div>
        <div class="text item">
          <div style="float:left">进行中:</div>  <div>{{ labInfo.labOngoingNum }}</div>
        </div>
        <el-button type="text" class="button lab-button">管理实验</el-button>
      </el-card>
    </div>
    <!-- report info -->
    <div class="report-info">
      <el-card class="box-card" shadow="hover">
        <div class="text item">
          <div style="text-align:center">实验报告管理</div>
        </div>
        <div class="text item">
          <div style="float:left">实验报告总数:</div>  <div>{{ reportInfo.reportTotalNum }}</div>
        </div>
        <div class="text item">
          <div style="float:left">已批改:</div>  <div>{{ reportInfo.reportDoneNum }}</div>
        </div>
        <div class="text item">
          <div style="float:left">待批改:</div>  <div>{{ reportInfo.reportRemainingNum }}</div>
        </div>
        <el-button type="text" class="button report-button">批阅实验报告</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getCourseDetailById } from '@/api/course'

export default {
  name: 'ClassInfo',
  props: ['courseId'],
  data() {
    return {
      courseInfo: {
        courseName: '软件工程经济学',
        teacherName: '黄杰',
        classroom: 404,
        studentNum: 0
      },
      labInfo: {
        labPublishedNum: 0,
        labOngoingNum: 0,
        labPastNum: 0
      },
      reportInfo: {
        reportTotalNum: 0,
        reportDoneNum: 0,
        reportRemainingNum: 0
      }

    }
  },
  created() {
    this.getCourseDetailById()
    this.classroom = Math.ceil(Math.random() * 100 + 100)
    // console.log(this.courseId)
  },
  methods: {
    getCourseDetailById() {
      getCourseDetailById({ courseId: this.courseId }).then(res => {
        const { courseInfo, labInfo, reportInfo } = res.data
        this.courseInfo = courseInfo
        this.labInfo = labInfo
        this.reportInfo = reportInfo
      })
    }
  }
}
// console.log(this.courseId)
</script>

<style scoped>
/*some styles about sl-card*/
text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 300px;
  float:left;
  height: 300px;
}
/* css for the card*/
.class-info{
}
.student-info{
}
.lab-info{
}
.report-info{
}
.stu-button{
  height:10px;
  margin-top:105px;
  margin-left:35%;
}
.lab-button{
  height:10px;
  margin-left:35%;
}
.report-button{
  height:10px;
  margin-left:35%;
}

</style>

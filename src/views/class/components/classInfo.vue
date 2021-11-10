<template>
  <div>
    <!-- class info -->
    <div class="class-info">
      <el-card class="box-card" shadow="hover">
        <div class="text item">
          <div style="float:left">课程名称:</div> <div>软件工程经济学</div>
        </div>
        <div class="text item">
          <div style="float:left">授课教师:</div> <div>黄杰</div>
        </div>
        <div class="text item">
          <div style="float:left">上课地点:</div> <div>安楼404</div>
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
          <div style="float:left">选课人数:</div>  <div>60</div>
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
          <div style="float:left">已公布实验数:</div>  <div>18</div>
        </div>
        <div class="text item">
          <div style="float:left">已结束:</div>  <div>16</div>
        </div>
        <div class="text item">
          <div style="float:left">进行中:</div>  <div>2</div>
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
          <div style="float:left">剩余实验报告总数:</div>  <div>120</div>
        </div>
        <div class="text item">
          <div style="float:left">已批改:</div>  <div>72</div>
        </div>
        <div class="text item">
          <div style="float:left">待批改:</div>  <div>48</div>
        </div>
        <el-button type="text" class="button report-button">批阅实验报告</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassInfo'
}
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

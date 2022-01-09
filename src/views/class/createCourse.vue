<template>
  <div class="app-container">
    <el-form ref="form" :model="labForm" label-width="120px" style="position: absolute;width: 50%;left: 20%;top: 10%;">
      <el-form-item label="课程课号">
        <el-input v-model="labForm.labName"/>
      </el-form-item>
      <el-form-item label="实验名称">
        <el-input v-model="labForm.labAim" type="textarea" :rows="4" />
      </el-form-item>
      <el-form-item label="任课老师">
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      </el-form-item>
      <el-button class="confirm" type="primary" plain @click="confirmLab">创建课程</el-button>
    </el-form>

  </div>
</template>

<script>
import { getTeacherAndCourse, getCourseByLabId,createState } from '@/api/course'
export default {
  data() {
    return {
      stuNumber: 0,
      name: '',
      isActive: false,
      labForm: {
        labID: 1,
        labName: '42014604',
        labAim: '软件工程课设',
        labEquip: '',
        labPrin: '',
        labConclu: '',
        labStep: '',
        labPhen: '',
        isActive: ''

      },
      value2:'',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        } },
      options: [{
        value: '选项1',
        label: '黄杰'
      }],
      value: '',
      value1: ''
    }
  },
  methods: {
    confirmLab() {
      this.$message({
        type: 'success',
        message: '创建成功'
      })
      // this.$router.push({path:'/dashboard',query:{
      // isCreate1:true
      // }});
      let isCreate=true
      createState({'course_id':42014604,'isCreated':true}).then(res=>{

      })
      this.$router.push({path:'/dashboard'})
    }
  }
}
</script>

<style>
.confirm{
  top:80%;
  margin-left: 35%;
}
</style>

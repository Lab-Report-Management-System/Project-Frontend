<template>
  <div class="app-container">
    <el-form ref="form" :model="labForm" label-width="120px" style="position: absolute;width: 50%;left: 20%;top: 10%;">
      <el-form-item label="实验名称">
        <el-input v-model="labForm.labName" disabled="" />
      </el-form-item>
      <el-form-item label="实验描述">
        <el-input v-model="labForm.labAim" type="textarea" :rows="4"/>
      </el-form-item>
      <el-form-item label="选择实验">
        <el-select v-model="value" clearable placeholder="请选择" >
            <el-option
              v-for="item in options"
              :key="item"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="截止时间">
        <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd">
            </el-date-picker>
      <el-time-picker
          is-range
          v-model="value1"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
        </el-form-item>
        <el-button type="primary" plain @click="clickDate">主要按钮</el-button>
    </el-form>

</div>
</template>

<script>
// import { testForm } from '@/api/test'
import { getStuLabInfo } from '../api/student.js'
import { submitLab } from '../api/student.js'
export default {
  data() {
    return {
      stuNumber: 0,
      name: '',
      isActive: false,
      labForm: {
        labID: 1,
        labName: '软件工程课程设计',
        labAim: '',
        labEquip: '',
        labPrin: '',
        labConclu: '',
        labStep: '',
        labPhen: '',
        isActive: '',

      },
      pickerOptions: {
                disabledDate(time) {
                  return time.getTime() > Date.now();
                }},
      options: [{
                value: '选项1',
                label: '独立评价方案实验'
              }, {
                value: '选项2',
                label: '差值法评价方案实验'
              }],
              value: '',
              value1: ''
    }
    // value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
    // value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
  },
  // created() {
  //   this.stuNumber = this.$route.query.stuNumber
  //   this.name = this.$route.query.name
  //   const parms = { stuNumber: this.$route.query.stuNumber, name: this.$route.query.name, labID: this.$route.query.labID }
  //   getStuLabInfo(parms).then(res => {
  //     this.labForm = res
  //     this.isActive = res.isActive
  //     // console.log(res)
  //   })
    // var url="http://121.5.175.203:8080/api/Video/getFavoriteVideo";
    // var dataDetails=new Object;
    // dataDetails.name=this.$route.query.name;
    // dataDetails.stuNumber=this.$route.query.stuNumber;
    // dataDetails.labID=this.$route.query.labID;
    // this.isActive=this.$route.query.isActive;
    // this.$axios.get(dataDetails,url)
    // .then(res => {
    //        this.labForm=res.data;

    // });
  // },
  methods: {
    onSubmit() {
      const parms = { stuNumber: this.$route.query.stuNumber, labID: this.$route.query.labID, labName: this.labForm.labName,
        labAim: this.labForm.labAim,
        labEquip: this.labForm.labEquip,
        labPrin: this.labForm.labPrin,
        labStep: this.labForm.labStep,
        labPhe: this.labForm.labPhe,
        labConclu: this.labForm.labConclu,
        isActive: true }
      console.log('yes')
      submitLab(parms).then(res => {
        console.log(res)
      })
      this.$message('提交成功!')
    },
    onSave() {
      const parms = { stuNumber: this.stuNumber, labID: this.labForm.labID, labName: this.labForm.labName,
        labAim: this.labForm.labAim,
        labEquip: this.labForm.labEquip,
        labPrin: this.labForm.labPrin,
        labStep: this.labForm.labStep,
        labPhe: this.labForm.labPhe,
        labConclu: this.labForm.labConclu,
        isActive: false }
      console.log('yes')
      console.log(parms)
      submitLab(parms)
      this.$message('暂存成功!')
    },
    onCancel() {
      this.$router.push({ path: '/dashboard' })
    },
    clickDate(){
      console.log(this.pickerOptions)
      console.log(this.value1)
    }
  }
}
</script>

<style>
.line{
  text-align: center;
}
.labCon{
    .el-input span{
        height:1000px;
    }
}
</style>

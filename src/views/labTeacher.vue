<template>
  <div class="app-container">
    <el-form ref="form" :model="labForm" label-width="120px">
      <el-form-item label="实验名称">
        <el-input v-model="labForm.labName" disabled=""/>
      </el-form-item>
      <el-form-item label="实验目的">
        <el-input v-model="labForm.labAim" type="textarea" />
      </el-form-item>
      <el-form-item label="实验设备">
        <el-input v-model="labForm.labEquip" type="textarea" />
      </el-form-item>
      <el-form-item label="实验原理">
        <el-input v-model="labForm.labPrin" type="textarea" />
      </el-form-item>
      <el-form-item label="实验步骤">
        <el-input v-model="labForm.labStep" type="textarea" />
      </el-form-item>
      <el-form-item label="实验现象">
        <el-input v-model="labForm.labPhe" type="textarea" />
      </el-form-item>
      <el-form-item label="实验总结">
        <el-input class="labCon" v-model="labForm.labConclu" type="textarea" style="height: 50%;" />
      </el-form-item>
      <el-form-item>
          教师评分
        <el-input
        style="width: 50px;"
          placeholder=""
          v-model="input"
          clearable></el-input>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { testForm } from '@/api/test'
import { getStuLabInfo } from '../api/student.js'
import { submitLab } from '../api/student.js'
export default {
  created(){
      // this.stuNumber=this.$route.query.stuNumber;
      // this.name=this.$route.query.name;
      // let parms={stuNumber:this.$route.query.stuNumber,name:this.$route.query.name,labID:this.$route.query.labID};
      // getStuLabInfo(parms).then(res => {
      //        this.labForm=res;
      //        this.isActive=res.isActive;
      //        // console.log(res)
      // });
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
  },
  data() {
    return {
        stuNumber:0,
        name:"",
      isActive:false,
      value:"",
      input:"",
      labForm: {
        labID:1,
        labName: '软件工程课设',
        labAim: '',
        labEquip: '',
        labPrin: '',
        labConclu: "",
        labStep: "",
        labPhen: '',
        isActive: ''
      }
    }
  },
  methods: {
    onSubmit() {
      let parms={stuNumber:this.$route.query.stuNumber,labID:this.$route.query.labID,labName: this.labForm.labName,
        labAim: this.labForm.labAim,
        labEquip: this.labForm.labEquip,
        labPrin: this.labForm.labPrin,
        labStep: this.labForm.labStep,
        labPhe: this.labForm.labPhe,
        labConclu: this.labForm.labConclu,
        isActive: true}
         console.log("yes");
      submitLab(parms).then(res => {
             console.log(res)
      });
      this.$message('提交成功!')
    },
    onSave() {
       let parms={stuNumber:this.stuNumber,labID:this.labForm.labID,labName: this.labForm.labName,
         labAim: this.labForm.labAim,
         labEquip: this.labForm.labEquip,
         labPrin: this.labForm.labPrin,
         labStep: this.labForm.labStep,
         labPhe: this.labForm.labPhe,
         labConclu: this.labForm.labConclu,
         isActive: false}
        
         console.log("yes");
         console.log(parms)
       submitLab(parms)
      this.$message('暂存成功!')
    },
    onCancel() {
      this.$router.push({path:"/dashboard"});
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


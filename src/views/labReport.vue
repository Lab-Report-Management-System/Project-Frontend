<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="实验名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="实验目的">
        <el-input v-model="form.goal" type="textarea" />
      </el-form-item>
      <el-form-item label="实验设备">
        <el-input v-model="form.apli" type="textarea" />
      </el-form-item>
      <el-form-item label="实验原理">
        <el-input v-model="form.principle" type="textarea" />
      </el-form-item>
      <el-form-item label="实验步骤">
        <el-input v-model="form.details" type="textarea" />
      </el-form-item>
      <el-form-item label="实验现象">
        <el-input v-model="form.pheno" type="textarea" />
      </el-form-item>
      <el-form-item label="实验总结">
        <el-input class="labCon" v-model="form.conclusion" type="textarea" style="height: 50%;" />
      </el-form-item>

        <!-- <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item> -->
      <!-- <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" style="position:relative; height: 50%;"/>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { testForm } from '@/api/test'

export default {
  data() {
    return {
      form: {
        name: '软件工程课设',
        goal: '',
        apli: '',
        principle: '',
        conclusion: "",
        details: "",
        pheno: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
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


<template>
  <div class="app-container">
    <el-form ref="form" :model="labForm" label-width="120px" style="position: absolute;width: 50%;left: 20%;top: 10%;">
      <el-form-item label="课程名称">
        <el-input v-model="labForm.labName" disabled/>
      </el-form-item>
      <el-form-item label="实验描述">
        <el-input v-model="labForm.labAim" type="textarea" :rows="4" />
      </el-form-item>
      <el-form-item label="选择实验">
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="截止时间">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
        />
        <el-time-picker
          v-model="value2"
          is-range
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        />
      </el-form-item>
      <el-button class="confirm" type="primary" plain @click="confirmLab">发布实验</el-button>
    </el-form>

  </div>
</template>

<script>

export default {
  data() {
    return {
      stuNumber: 0,
      name: '',
      isActive: false,
      labForm: {
        labID: 1,
        labName: '软工课设',
        labAim: '本实验需要每一位同学查阅相关资料，获取近5-10年的现金数据，并计算对应的收入差额、净现值NPV、内部收益率等。 请将相关数据填入以下表格中。',
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
        label: '独立评价方案实验'
      }, {
        value: '选项2',
        label: '差值法评价方案实验'
      }],
      value: '',
      value1: ''
    }
  },
  methods: {
    confirmLab() {
      this.$message({
        type: 'success',
        message: '发布成功'
      })
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

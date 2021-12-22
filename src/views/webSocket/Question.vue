<template>
  <div>
    <h1 style="text-align: center">发布对战题目</h1>
    <div>
      <el-form :label-position="labelPosition" label-width="80px" :model="questionForm">
        <el-form-item label="题目名称">
          <el-input v-model="questionForm.title" style="width: 1200px" />
        </el-form-item>
        <el-form-item label="选项A">
          <el-input v-model="questionForm.answerA" style="width: 1200px" />
        </el-form-item>
        <el-form-item label="选项B">
          <el-input v-model="questionForm.answerB" style="width: 1200px" />
        </el-form-item>
        <el-form-item label="选项C">
          <el-input v-model="questionForm.answerC" style="width: 1200px" />
        </el-form-item>
        <el-form-item label="选项D">
          <el-input v-model="questionForm.answerD" style="width: 1200px" />
        </el-form-item>
        <el-form-item label="正确答案">
          <el-input v-model="questionForm.correctAnswer" placeholder="请输入大写的A B C D" style="width: 1200px" />
        </el-form-item>
      </el-form>
      <div style="align-items: center;display: flex;margin-top: 7px">
        <el-button style="margin: 0 auto;position: relative" class="question" @click.native.prevent="submit">发布</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { submitQuestion } from '@/api/battle'
export default {
  name: 'Question',
  data() {
    return {
      labelPosition: 'right',
      questionForm: {
        title: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        correctAnswer: ''
      }
    }
  },
  methods: {
    submit() {
      if (this.questionForm.correctAnswer !== 'A' && this.questionForm.correctAnswer !== 'B' && this.questionForm.correctAnswer !== 'C' && this.questionForm.correctAnswer !== 'D') {
        this.$message({
          type: 'error',
          message: '请输入正确的题目答案！！'
        })
        return
      } else if ((this.questionForm.title === '') || (this.questionForm.answerA === '') || (this.questionForm.answerB === '') ||
      (this.questionForm.answerC === '') || (this.questionForm.answerD === '')) {
        this.$message({
          type: 'error',
          message: '题目信息不能为空！！'
        })
        return
      }
      submitQuestion(this.questionForm).then(res => {
        this.$message({
          type: 'success',
          message: '题目已成功上传！！'
        })
        location.reload()
      })
    }
  }
}
</script>

<style scoped>

</style>

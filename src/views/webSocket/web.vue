<template>
  <div>
    <!--    <h1>欢迎进入匹配！</h1>-->
    <!--    <el-button @click.native.prevent="send">一键匹配</el-button>-->
    <el-progress :text-inside="true" :show-text="false" :stroke-width="20" :percentage="getTime()" :color="colors"></el-progress>
    <el-button @click.native.prevent="countDown">嗯嗯</el-button>
  </div>
</template>

<script>

import { getInfo } from '@/api/user'
import { getToken } from '@/utils/auth'

export default {
  name: 'Web',
  data() {
    return {
      totalTime: 100,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  },
  methods: {
    send() {
      getInfo(getToken()).then(res => {
        const role = res.data.roles[0]
        if (role !== 'Student') alert('只有学生可以参与对抗答题哦~')
        else this.$router.push('/socket')
      })
    },
    countDown() {
      this.content = this.totalTime
      const clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime
        if (this.totalTime < 1) {
          window.clearInterval(clock)
        }
      }, 200)
    },
    getTime() {
      return this.totalTime
    }
  }
}
</script>

<style scoped>

</style>

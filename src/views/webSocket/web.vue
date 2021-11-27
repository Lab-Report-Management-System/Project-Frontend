<template>
  <div>
    <h1>欢迎进入匹配！</h1>
    <el-button @click.native.prevent="send">一键匹配</el-button>
  </div>
</template>

<script>

import { getInfo } from '@/api/user'
import { getToken } from '@/utils/auth'

export default {
  name: 'Web',
  methods: {
    send() {
      getInfo(getToken()).then(res => {
        const role = res.data.roles[0]
        if (role !== 'Student') alert('只有学生可以参与对抗答题哦~')
        else this.$router.push('/socket')
      })
    }
  }
}
</script>

<style scoped>

</style>

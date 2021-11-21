<template>
  <div>
    <h1>欢迎进入匹配！</h1>
    <p>请输入昵称</p>
    <input type="text" class="form-control" v-model="message"/>
    <el-button @click.native.prevent="send">一键匹配</el-button>
  </div>
</template>

<script>

export default {
  name: 'Web',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    send() {
      if (this.message === '' || this.message === null) {
        alert('昵称不能为空~')
        return
      }
      if (this.message.length > 15) {
        alert('昵称字数不能大于15~')
        return
      }
      this.$router.push('/socket?nick=' + encodeURI(encodeURI(this.message)))
      return false
    }
  }
}
</script>

<style scoped>

</style>

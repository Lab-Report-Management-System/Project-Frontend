<template>
  <div>
    <h1 id="greetings">你好,</h1>
    <input v-model="message" type="text" class="form-control">
    <el-button @click.native.prevent="sendMessage">发送</el-button>
    <el-button v-show="buttonVisible" id="match" @click.native.prevent="match" v-loading="loading">点击匹配</el-button>
    <div id="responseContent" class="textarea scroll" />
    <div id="output" />
    <!-- 题目 -->
    <div>
      <div>题目</div>
      <div>{{this.title}}</div>
      <div>A. {{this.answerA}}</div>
      <div>B. {{this.answerB}}</div>
      <div>C. {{this.answerC}}</div>
      <div>D.{{this.answerD}}</div>
    </div>
  </div>
</template>

<script>
import { getInfo } from '@/api/user'
import { getToken } from '@/utils/auth'
import { webSocketUrl } from '@/utils/request'
import { MessageBox } from 'element-ui'
import { getBattleQuestion } from '@/api/battle'

export default {
  name: 'Socket',
  data() {
    return {
      message: '',
      socket: '',
      me: null,
      loading: false,
      buttonVisible: true,
      questions: [],
      title: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      pageNumber: 0,
      PRIVATE_CHAT_MESSAGE_CODE: 1, // 私聊消息
      GROUP_CHAT_MESSAGE_CODE: 2, // 群聊消息
      PING_MESSAGE_CODE: 3, // PING消息
      SYSTEM_MESSAGE_CODE: 5, // 系统消息
      MATCHING_MESSAGE_CODE: 6, // 匹配消息
      MATCH_SUCCESS_MESSAGE_CODE: 7, // 匹配成功
      MATCH_REVOKE_CODE: 8,
      LOGIN_CODE: 1000, // 登录消息
      LOGOUT_CODE: 1001 // 登出消息
    }
  },
  destroyed() {
    this.quitSend()
    location.reload()
  },
  created() {
    this.initMe()
  },
  methods: {
    initMe() {
      // eslint-disable-next-line no-new-object
      this.me = new Object()
      getInfo(getToken()).then(res => {
        this.me.username = res.data.userNickname
        this.me.userId = res.data.userName
        this.websocket()
      })
    },
    websocket() {
      if (window.WebSocket) {
        this.socket = new WebSocket(webSocketUrl + this.me.userId)
        console.log('当前用户是' + this.me.username)
        document.getElementById('greetings').append(decodeURI(decodeURI(this.me.username)))
        this.socket.onmessage = (event) => {
          const data = JSON.parse(event.data)
          console.log(JSON.stringify(data))
          switch (data.code) {
            case this.GROUP_CHAT_MESSAGE_CODE:
              document.getElementById('output').append(data.msg)
              break
            case this.SYSTEM_MESSAGE_CODE:
              break
            case this.PING_MESSAGE_CODE:
              this.sendPong()
              break
            case this.PRIVATE_CHAT_MESSAGE_CODE:
              break
            case this.MATCH_SUCCESS_MESSAGE_CODE:
              MessageBox.close()
              this.loading = false
              this.buttonVisible = false
              this.$message({
                type: 'success',
                message: '匹配成功'
              })
              this.getQuestion()
              break
            case this.MATCH_REVOKE_CODE:
              MessageBox.close()
              this.loading = false
              this.$message({
                type: 'error',
                message: '没有找到对手捏，请稍后重新匹配~'
              })
          }
        }
        this.socket.onopen = () => {
          this.loginSend()
        }
        this.socket.onclose = () => {
          this.quitSend()
        }
        return true
      } else {
        alert('您的浏览器不支持WebSocket')
        return false
      }
    },
    sendPong() {
      const object = {}
      object.code = 4
      this.send(JSON.stringify(object))
    },
    send(message) {
      if (!window.WebSocket) {
        return
      }
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(message)
      } else {
        this.socket.readyState = WebSocket.OPEN
        this.socket.send(message)
      }
    },
    // 登录
    loginSend() {
      const object = {}
      object.code = this.LOGIN_CODE
      object.username = this.me.username
      object.userId = this.me.userId
      this.send(JSON.stringify(object))
    },
    // 结束
    quitSend() {
      const object = {}
      object.code = this.LOGOUT_CODE
      object.username = this.me.username
      object.userId = this.me.userId
      this.send(JSON.stringify(object))
    },
    // 发送群聊消息
    sendMessage() {
      if (this.message === '' || this.message == null) {
        alert('信息不能为空~')
        return
      }
      const object = {}
      object.code = this.GROUP_CHAT_MESSAGE_CODE
      object.username = this.me.username
      object.msg = this.message
      object.sendUserId = this.me.userId
      this.send(JSON.stringify(object))
    },
    // 实现匹配
    match() {
      this.loading = true
      MessageBox.confirm('匹配中......', '对战练习', {
        confirmButtonText: '隐藏',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$message({
          type: 'info',
          message: '正在帮您匹配，匹配框已帮您自动隐藏'
        })
      }).catch(() => {
        this.loading = false
        this.revokeMatch()
        this.$message({
          type: 'error',
          message: '已取消匹配'
        })
      })
      const object = {}
      object.code = this.MATCHING_MESSAGE_CODE
      object.username = this.me.username
      object.sendUserId = this.me.userId
      console.log(JSON.stringify(object))
      this.send(JSON.stringify(object))
    },
    // 撤销匹配
    revokeMatch() {
      const object = {}
      object.code = this.MATCH_REVOKE_CODE
      object.username = this.me.username
      object.sendUserId = this.me.userId
      console.log(JSON.stringify(object))
      this.send(JSON.stringify(object))
    },
    // 获取题目
    getQuestion() {
      getBattleQuestion().then(res => {
        this.questions = res.questions
        this.title = this.questions[this.pageNumber].title
        this.answerA = this.questions[this.pageNumber].answerA
        this.answerB = this.questions[this.pageNumber].answerB
        this.answerC = this.questions[this.pageNumber].answerC
        this.answerD = this.questions[this.pageNumber].answerD
        console.log('大的要来了')
        console.log(this.questions[0])
      })
    }
  }
}
</script>

<style scoped>

</style>

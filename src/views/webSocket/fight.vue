<template>
    <div>
      <div style="width: 40%;height: 15%;position: absolute;top: 1%;left: 5%;box-shadow: 0 2px 4px rgba(0, 81, 255, 0.1), 0 0 6px rgba(0, 0, 0, .04);background-color: #ebffff;">
        <el-avatar :size="100" :src="circleUrl" fit="contain" style="margin-left: 3cm;margin-top: 0.35cm;"/>
        <el-tag size="large" style="position: absolute;top: 25%;left: 34%;">学号：{{stuNumber}}</el-tag>
        <el-tag size="large" style="position: absolute;top: 60%;left: 34%;">姓名：{{stuName}}</el-tag>
      </div>
      <div style="background-color: #204162;width: 40%;height: 2px;position: absolute;top: 18%;left: 25%;"></div>
      <img src="../../assets/images/background.jpg" style="border-radius: 25px;width: 30%;height: 75%;position: absolute;left: 30%;top: 20%;"/>
      <div v-show="questionVisible" style="position: absolute;left: 40%;top: 35%;">
        <div>题目{{ this.pageNumber+1 }} / {{ this.questions.length }}</div>
        <div>{{ this.title }}</div>
        <el-radio-group v-model="radio">
          <ul class="question">
            <li><el-radio :label="0">A. {{ this.answerA }}</el-radio></li>
            <li><el-radio :label="1">B. {{ this.answerB }}</el-radio></li>
            <li><el-radio :label="2">C. {{ this.answerC }}</el-radio></li>
            <li><el-radio :label="3">D.{{ this.answerD }}</el-radio></li>
          </ul>
        </el-radio-group>
        <!-- <el-button class="question" @click.native.prevent="submit">提交</el-button> -->
        <div  @click.native.prevent="submit" style="margin-top: 5cm;">
          <img src="../../assets/images/2-2.png" style="width: 85%;height: 65%;" />
        </div>
      </div>
      <el-progress v-show="questionVisible" type="circle" :text-inside="true" :show-text="false" :stroke-width="25" :percentage="getTime()" :color="colors" style="position: absolute;left: 15%;top: 35%;"></el-progress>
          <!-- 总计时 -->
          <div v-show="timeVisible">总用时:{{this.answeringTotalTime.toFixed(2)}}</div>
          <!--显示自己的答题情况 -->
          <el-progress v-show="questionVisible" type="circle" :percentage="getRate()" style="position: absolute;left: 15%;top: 60%;" size="large"/>
          <!-- 显示对方的答题情况 -->
          <!--  查看结果 -->
          <div v-show="resultVisible">
            <div>
              <div>题目总数: {{ this.questions.length }}</div>
              <div>回答正确: {{ this.correctNumber }}</div>
              <div>回答错误: {{ this.wrongNumber }}</div>
              <div>正确率: </div>
              <el-progress type="circle" :percentage="getRate()" />
            </div>
            <el-button @click.native.prevent="exitAnswer">结束答题</el-button>
          </div>
      <div v-show="!questionVisible" style="position: absolute;left: 40%;top: 35%;">
        <p style="font-family: 楷体;font-size: 30px;margin-left: -1cm;text-align: center;">在线答题</br>快来积极参与吧！</p>
        <img src="../../assets/images/tip.png" style="position: absolute;width: 250px;height: 200px;left: -24%;top: -18%;"/>
        <div   style="margin-top: 4cm;">
          <img src="../../assets/images/1-4.png" @click="match" style="position: relative;width: 85%;height: 65%;border-radius:20px;"/>
        </div>
      </div>
      <el-card class="box-card" style="width:15%;height: 90%;position: absolute;left: 80%;top: 5%;background-color: #ebffff;">
        <el-avatar v-loading="loading1" :size="150"  fit="contain" style="margin-left: 1cm;margin-top: 1.35cm;"/>
        <el-avatar :size="150" v-loading="loading2" fit="contain" style="margin-left: 1cm;margin-top: 1.35cm;"/>
        <el-avatar :size="150" v-loading="loading3" fit="contain" style="margin-left: 1cm;margin-top: 1.35cm;"/>
      </el-card>
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
      stuNumber:'',
      stuName:'',
      socket: '',
      circleUrl:require("../../assets/images/1-2.png"),
      me: null,
      loading: false,
      loading1: false,
      loading2: false,
      loading3: false,
      buttonVisible: true,
      questionVisible: true,
      resultVisible: false,
      timeVisible: true,
      questions: [],
      radio: -1,
      correctNumber: 0,
      wrongNumber: 0,
      title: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      pageNumber: 0,
      totalTime: 100,
      answeringTotalTime: 0.00,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      clock: '',
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
              this.timeVisible = true
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
      this.loading1 = true
      this.loading2 = true
      this.loading3 = true
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
        this.pageNumber = 0
        this.correctNumber = 0
        this.wrongNumber = 0
        this.answeringTotalTime = 0.00
        this.title = this.questions[this.pageNumber].title
        this.answerA = this.questions[this.pageNumber].answerA
        this.answerB = this.questions[this.pageNumber].answerB
        this.answerC = this.questions[this.pageNumber].answerC
        this.answerD = this.questions[this.pageNumber].answerD
        this.questionVisible = true
        this.countDown()
      })
    },
    test(){
      console.log("yes")
    },
    submit() {

      let answer
      switch (this.radio) {
        case 0:
          answer = 'A'
          break
        case 1:
          answer = 'B'
          break
        case 2:
          answer = 'C'
          break
        case 3:
          answer = 'D'
          break
        default:
          answer = NaN
      }
      if (answer === this.questions[this.pageNumber]['correctAnswer']) {
        this.correctNumber++
        this.$message({
          message: '恭喜你，回答成功',
          type: 'success'
        })
      } else {
        this.wrongNumber++
        this.$message.error('很遗憾，回答失败')
      }
      this.nextQuestion()
    },
    // 下一个问题
    nextQuestion() {
      window.clearInterval(this.clock)
      this.radio = -1
      this.totalTime = 100
      const length = this.questions.length
      const number = this.pageNumber + 1
      if (number >= length) {
        this.finishAnswer()
        return
      }
      this.pageNumber++
      this.title = this.questions[this.pageNumber].title
      this.answerA = this.questions[this.pageNumber].answerA
      this.answerB = this.questions[this.pageNumber].answerB
      this.answerC = this.questions[this.pageNumber].answerC
      this.answerD = this.questions[this.pageNumber].answerD
      this.countDown()
    },
    // 获取正确率
    getRate() {
      return (this.correctNumber / this.questions.length * 100)
    },
    // 完成答题
    finishAnswer() {
      this.questionVisible = false
      this.resultVisible = true
      window.clearInterval(this.clock)
      // TODO:websocket 退出房间
      // TODO:显示对手成绩
      // TODO:答题过程中显示对手成绩
      // TODO: 后端数据库存分数
    },
    exitAnswer() {
      this.resultVisible = false
      this.questionVisible = false
      this.timeVisible = false
      this.$message({
        message: '感谢参与本轮答题匹配，欢迎下次再来~',
        type: 'success'
      })
      this.buttonVisible = true
    },
    countDown() {
      this.content = this.totalTime
      this.clock = window.setInterval(() => {
        this.totalTime--
        this.answeringTotalTime += 0.2
        this.content = this.totalTime
        if (this.totalTime < 1) {
          window.clearInterval(this.clock)
          this.totalTime = 100
          this.submit()
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
.question{
  float:left;
}
</style>

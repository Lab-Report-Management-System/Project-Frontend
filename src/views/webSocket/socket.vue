<template>
  <div>
    <!--问候界面 -->
    <h1 id="greetings" style="text-align: center">欢迎进入答题对战,</h1>
    <el-button v-show="buttonVisible" id="match" v-loading="loading" style="margin-top: 5px;margin-left: 45%" @click.native.prevent="match">点击匹配</el-button>
    <div v-show="buttonVisible">
      <h2 style="text-align: center;margin-top: 50px">聊天区</h2>
      <div style="margin-top: 5px;margin-left: 30%">
        <el-input v-model="chatContent" style="width: 500px" clearable />
        <el-button @click.native.prevent="sendChatMessage">发送</el-button>
        <el-button @click.native.prevent="clearText">清空</el-button>
      </div>
      <div style="text-align: center">
        <div id="output" />
      </div>
    </div>
    <div>
      <!-- 总计时 -->
      <div v-show="timeVisible" style="margin-left: 15px">总用时:{{ this.answeringTotalTime.toFixed(2) }}</div>
      <!-- 倒计时 -->
      <el-progress v-show="questionVisible" :text-inside="true" :show-text="false" :stroke-width="10" :percentage="getTime()" :color="colors" />
      <!-- 题目 -->
      <el-card v-show="questionVisible" style="height: 225px;">
        <div style="text-align: center">题目{{ this.pageNumber+1 }} / {{ this.questions.length }}</div>
        <div style="text-align: center;margin-top: 5px">{{ this.title }}</div>
        <div style="text-align: center;">
          <el-radio-group v-model="radio" align="left" style="margin-top: 10px">
            <ul class="question">
              <li><el-radio :label="0">A. {{ this.answerA }}</el-radio></li>
              <li><el-radio style="margin-top: 10px" :label="1">B. {{ this.answerB }}</el-radio></li>
              <li><el-radio style="margin-top: 10px" :label="2">C. {{ this.answerC }}</el-radio></li>
              <li><el-radio style="margin-top: 10px" :label="3">D.{{ this.answerD }}</el-radio></li>
            </ul>
          </el-radio-group>
        </div>
        <div style="align-items: center;display: flex;margin-top: 7px">
          <el-button style="margin: 0 auto;position: relative" class="question" @click.native.prevent="submit">提交</el-button>
        </div>

      </el-card>
      <!--显示自己的答题情况 -->
      <el-progress v-show="questionVisible" type="circle" :percentage="getRate()" style="margin-left: 150px;top: 40px" />
      <!-- 显示所有人的答题情况 -->
      <el-table v-show="timeVisible" stripe style="position: absolute;top:60%;margin-left:500px;width: 500px" :data="tableData" border>
        <el-table-column prop="index" label="序号" width="180" />
        <el-table-column prop="userName" label="用户昵称" width="180" />
        <el-table-column prop="finishNumber" label="完成度" />
      </el-table>
      <!--  查看结果 -->
      <el-card v-show="resultVisible" style="height: 225px;">
        <div style="text-align: center">
          <div>题目总数: {{ this.questions.length }}</div>
          <div>回答正确: {{ this.correctNumber }}</div>
          <div>回答错误: {{ this.wrongNumber }}</div>
          <div>正确率: </div>
          <el-progress type="circle" :percentage="getRate()" />
        </div>
      </el-card>
      <div style="align-items: center;display: flex;margin-top: 7px">
        <el-button v-show="finishVisible && resultVisible" @click.native.prevent="exitAnswer">结束答题</el-button>
      </div>
      <!--答题结束之后查看结果-->
      <el-dialog
        title="答题结束"
        :visible.sync="dialogVisible"
        width="30%"
      >
        <span>您的最终得分为: {{ this.score }}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click.native.prevent="submitScore">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getInfo } from '@/api/user'
import { getToken } from '@/utils/auth'
import { webSocketUrl } from '@/utils/request'
import { MessageBox } from 'element-ui'
import { getBattleQuestion, submitScore } from '@/api/battle'

export default {
  name: 'Socket',
  data() {
    return {
      // socket相关
      message: '',
      socket: '',
      me: null,
      // 组件显示与隐藏
      loading: false,
      buttonVisible: true,
      questionVisible: false,
      resultVisible: false,
      timeVisible: false,
      finishVisible: false,
      dialogVisible: false,
      // 用户相关
      userList: [],
      tableData: [{
        index: 1,
        userName: '',
        finishNumber: 0
      }, {
        index: 2,
        userName: '',
        finishNumber: 0
      }],
      // 题目相关
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
      // 分数相关
      score: 0,
      // 聊天相关
      chatContent: '',
      // 消息相关
      PRIVATE_CHAT_MESSAGE_CODE: 1, // 私聊消息
      GROUP_CHAT_MESSAGE_CODE: 2, // 群聊消息
      PING_MESSAGE_CODE: 3, // PING消息
      SYSTEM_MESSAGE_CODE: 5, // 系统消息
      MATCHING_MESSAGE_CODE: 6, // 匹配消息
      MATCH_SUCCESS_MESSAGE_CODE: 7, // 匹配成功
      MATCH_REVOKE_CODE: 8, // 匹配撤销
      MATCH_END_CODE: 9, // 房间内的所有玩家都结束了匹配
      ANSWER_FINISH_CODE: 10, // 某一个玩家结束了匹配
      CORRECT_ANSWER_CODE: 100, // 答题成功
      WRONG_ANSWER_CODE: 101, // 答题失败
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
    clearText() {
      document.getElementById('output').innerText = ''
    },
    sendChatMessage() {
      if (this.chatContent === '' || this.chatContent == null) {
        alert('信息不能为空~')
        return
      }
      const object = {}
      object.type = this.GROUP_CHAT_MESSAGE_CODE
      object.code = this.GROUP_CHAT_MESSAGE_CODE
      object.username = this.me.username
      object.sendUserId = this.me.userId
      object.msg = this.chatContent
      this.send(JSON.stringify(object))
    },
    submitScore() {
      this.dialogVisible = false
      this.finishVisible = false
      const score = { 'score': this.score }
      submitScore(score).then(res => {
        this.score = 0
      })
    },
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
          switch (data.code) {
            case this.GROUP_CHAT_MESSAGE_CODE: // 组内群聊消息
              if (data.msg !== 'battle') {
                document.getElementById('output').append(data.username + ' : ' + data.msg)
                const br = document.createElement('br')
                document.getElementById('output').appendChild(br)
                break
              }
              for (let i = 0; i < this.userList.length; i++) {
                if ((decodeURIComponent(this.userList[i]) === data.sendUserId)) {
                  if (data.type === this.CORRECT_ANSWER_CODE) {
                    this.tableData[i].finishNumber += 1
                  }
                }
              }
              break
            case this.SYSTEM_MESSAGE_CODE: // 系统消息
              this.userList = data.ext.userList
              for (let i = 0; i < this.tableData.length; i++) {
                this.tableData[i].userName = decodeURIComponent(this.userList[i])
              }
              for (let i = 0; i < this.tableData.length; i++) {
                this.tableData[i].finishNumber = 0
              }
              break
            case this.PING_MESSAGE_CODE: // PING 消息
              this.sendPong()
              break
            case this.PRIVATE_CHAT_MESSAGE_CODE: // 私聊消息，暂时没有
              break
            case this.MATCH_SUCCESS_MESSAGE_CODE: // 匹配成功的消息
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
            case this.MATCH_REVOKE_CODE: // 匹配撤销
              MessageBox.close()
              this.loading = false
              this.$message({
                type: 'error',
                message: '没有找到对手捏，请稍后重新匹配~'
              })
              break
            case this.MATCH_END_CODE: // 整个房间内的所有人完成了匹配
              this.finishVisible = true
              break
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
    sendMessage(messageType) {
      const object = {}
      object.code = this.GROUP_CHAT_MESSAGE_CODE
      object.type = messageType
      object.username = this.me.username
      object.sendUserId = this.me.userId
      object.msg = 'battle'
      console.log(object)
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
        this.sendMessage(this.CORRECT_ANSWER_CODE)
      } else {
        this.wrongNumber++
        this.$message.error('很遗憾，回答失败')
        this.sendMessage(this.WRONG_ANSWER_CODE)
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
      const object = {}
      object.code = this.ANSWER_FINISH_CODE
      object.username = this.me.username
      object.userId = this.me.userId
      this.send(JSON.stringify(object))
      this.$message({
        message: '已完成答题，待房间内的所有用户结束答题之后即可退出',
        type: 'success'
      })
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
      for (let i = 0; i < this.tableData.length; i++) {
        this.tableData[i].finishNumber = 0
      }
      // 计算分数
      // 计算名次
      const score = (((this.correctNumber / this.questions.length * 100) * 1000000 + (100 - this.answeringTotalTime) * 1010) / 100000000) * 5
      if (score < 0) this.score = 0
      else this.score = score.toFixed(2)
      this.dialogVisible = true
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

<template>
  <div>
    <h1 id="greetings">你好,</h1>
    <input v-model="message" type="text" class="form-control">
    <el-button @click.native.prevent="sendMessage">发送</el-button>
    <div id="responseContent" class="textarea scroll" />
    <div id = "output"></div>
  </div>
</template>

<script>

const webSocketUrl = 'ws://localhost:7979/websocket?userId='
let socket = ''
let me
const GROUP_CHAT_MESSAGE_CODE = 2
const SYSTEM_MESSAGE_CODE = 5
const PRIVATE_CHAT_MESSAGE_CODE = 1
const PING_MESSAGE_CODE = 3

function websocket() {
  // eslint-disable-next-line no-new-object
  me = new Object()
  me.userId = getQueryVariable('nick')
  if (window.WebSocket) {
    socket = new WebSocket(webSocketUrl + me.userId)
    console.log('当前用户是' + me.userId)
    document.getElementById('greetings').append(decodeURI(decodeURI(me.userId)))
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      console.log(JSON.stringify(data))
      switch (data.code) {
        case GROUP_CHAT_MESSAGE_CODE:
          document.getElementById('output').append(data.msg)
          break
        case SYSTEM_MESSAGE_CODE:
          break
        case PING_MESSAGE_CODE:
          sendPong()
          break
        case PRIVATE_CHAT_MESSAGE_CODE:
          break
      }
    }
    socket.onopen = function() {
      loginSend()
    }
    socket.onclose = function() {
      quitSend()
    }
    return true
  } else {
    alert('您的浏览器不支持WebSocket')
    return false
  }
}

function getQueryVariable(name) {
  const url = window.location.href
  const nick = url.split('?')[1].split('=')[0]
  const res = url.split('?')[1].split('=')[1]
  if (nick === name) return decodeURI(decodeURI(res))
  else return null
}

function sendPong() {
  const object = {}
  object.code = 4
  send(JSON.stringify(object))
}

function send(message) {
  if (!window.WebSocket) {
    return
  }
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(message)
  } else {
    socket.readyState = WebSocket.OPEN
    socket.send(message)
  }
}

function loginSend() {
  const object = {}
  object.code = 1000
  object.username = me.userId
  send(JSON.stringify(object))
}

function quitSend() {
  const object = {}
  object.code = 1001
  object.username = me.userId
  send(JSON.stringify(object))
}

export default {
  name: 'Socket',
  data: () => {
    return {
      message: ''
    }
  },
  mounted: () => {
    websocket()
  },
  destroyed: () => {
    quitSend()
    location.reload()
  },
  methods: {
    sendMessage() {
      if (this.message === '' || this.message == null) {
        alert('信息不能为空~')
        return
      }
      const object = {}
      object.code = 2
      object.username = me.userId
      object.msg = this.message
      object.sendUserId = me.userId
      send(JSON.stringify(object))
    }
  }
}
</script>

<style scoped>

</style>

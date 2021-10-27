<template>
  <div class="login-container">
    <el-card class="login-card">
      <el-form ref="registerForm" :model="registerForm" class="login-form" auto-complete="on" label-position="left">

        <div class="title-container">
          <h3 class="title">账户注册</h3>
        </div>

        <!--        <span class="word-title">邮箱</span>-->
        <!--        <el-form-item prop="email">-->

        <!--          <el-input-->
        <!--            ref="email"-->
        <!--            v-model="registerForm.email"-->
        <!--            placeholder="请输入您的Tongji邮箱"-->
        <!--            name="email"-->
        <!--            type="text"-->
        <!--            tabindex="1"-->
        <!--            auto-complete="on"-->
        <!--          />-->
        <!--        </el-form-item>-->

        <span class="word-title">真实姓名</span>
        <el-form-item prop="studentName">
          <el-input
            ref="studentName"
            v-model="registerForm.studentName"
            placeholder="请输入您的学生姓名"
            name="studentName"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <span class="word-title">昵称</span>
        <el-form-item prop="studentNickname">
          <el-input
            ref="studentNickname"
            v-model="registerForm.studentNickname"
            placeholder="请输入您的昵称"
            name="studentNickname"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <span class="word-title">密码</span>
        <el-form-item prop="studentPassword">
          <el-input
            ref="studentPassword"
            v-model="registerForm.studentPassword"
            placeholder="请输入您的注册密码"
            name="studentPassword"
            type="password"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <!--        <span class="word-title">注册代码</span>-->
        <!--        <el-form-item prop="code">-->
        <!--          <el-input-->
        <!--            ref="code"-->
        <!--            v-model="registerForm.code"-->
        <!--            placeholder="请输入您的注册代码"-->
        <!--            name="code"-->
        <!--            type="text"-->
        <!--            tabindex="1"-->
        <!--            auto-complete="on"-->
        <!--          />-->
        <!--        </el-form-item>-->

        <span class="word-title">学号</span>
        <el-form-item prop="studentId">
          <el-input
            ref="studentId"
            v-model="registerForm.studentId"
            placeholder="请输入您的学号"
            name="studentId"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleRegister">发送注册邮件</el-button>

        <div class="tips">
          <span style="margin-right:20px;">请不要输入其他邮箱哦！</span>
        </div>

      </el-form>
    </el-card>

  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import { studentRegister } from '@/api/student'

export default {
  name: 'UpdateInformation',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        email: '',
        studentName: '',
        studentNickname: '',
        studentPassword: '',
        code: '',
        studentId: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    setSha() {
      this.registerForm.studentPassword = require('js-sha256').sha256(this.registerForm.studentPassword)
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleRegister() {
      this.setSha()
      console.log(this.registerForm.studentPassword)
      this.registerForm.code = this.$route.query.code
      this.registerForm.email = this.$route.query.email
      studentRegister(this.registerForm).then(response => {
        const data = response
        console.log(data)
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .register-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.register-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

.word-title{
  color: #ffffff;
}
</style>

<style lang="scss" scoped>
$bg: #8498b7;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background: url("https://oliver-img.oss-cn-shanghai.aliyuncs.com/img/7d19e4e0868ab1ff2947bfb9d1764061.jpg");
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 30px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    //background-color: $bg;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .login-card {
    margin-top:23px;
    margin-left:33%;
    width:520px;
    height:610px;
    background-color: #475164//#36292f;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

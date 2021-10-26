<template>
  <div class="login-container">
    <el-card class="login-card">
      <el-form ref="loginForm" :model="registerForm" class="login-form" auto-complete="on" label-position="left">

        <div class="title-container">
          <h3 class="title">账户注册</h3>
        </div>

        <el-form-item prop="username">
          <span class="svg-container">
            <!--            <svg-icon icon-class="el-icon-message" />-->
            <i class="el-icon-message" />
          </span>
          <el-input
            ref="username"
            v-model="registerForm.email"
            placeholder="请输入您的Tongji邮箱"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <!--        <el-form-item prop="password">-->
        <!--          <span class="svg-container">-->
        <!--            <svg-icon icon-class="password" />-->
        <!--          </span>-->
        <!--          <el-input-->
        <!--            :key="passwordType"-->
        <!--            ref="password"-->
        <!--            v-model="registerForm.password"-->
        <!--            :type="passwordType"-->
        <!--            placeholder="Password"-->
        <!--            name="password"-->
        <!--            tabindex="2"-->
        <!--            auto-complete="on"-->
        <!--            @keyup.enter.native="handleregister"-->
        <!--          />-->
        <!--          <span class="show-pwd" @click="showPwd">-->
        <!--            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />-->
        <!--          </span>-->
        <!--        </el-form-item>-->

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleRegister">发送注册邮件</el-button>

        <div class="tips">
          <span style="margin-right:20px;">请不要输入其他邮箱哦！</span>
          <!--          <span> password: any</span>-->
        </div>

      </el-form>
    </el-card>

  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import { sendStudentRegisterEmail } from '@/api/student'

export default {
  name: 'Register',
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
        email: '1053790247@qq.com'
      },
      registerRules: {
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
      // this.$refs.registerForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('user/register', this.registerForm).then(() => {
      //       this.$router.push({ path: this.redirect || '/' })
      //       this.loading = false
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      sendStudentRegisterEmail(this.registerForm).then(response => {
        // 判断登录是否成功
        const data = response
        console.log(data)
        // eslint-disable-next-line
        if (data.sentState == 'success') {
          console.log('注册邮件已发送')
          this.$message({
            message: '注册邮件已发送至' + data.email,
            type: 'success'
          })
          window.open('https://mail.tongji.edu.cn', '_blank')
        } else {
          this.$message.error(data.sentState)
        }
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
</style>

<style lang="scss" scoped>
$bg: #8498b7;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background: url("https://oliver-img.oss-cn-shanghai.aliyuncs.com/img/1c9b7f55c035b0be19619acd44596be5.jpg");
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
    margin-top:8%;
    margin-left:34%;
    width:520px;
    height:320px;
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

<template>
  <div>

    <el-container>
      <Navbar />
      <el-header
        class="fontTitle"
        style="
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity:0.8;
      font-size:24px;"
      > 个 人 信 息
      </el-header>
      <el-main
        class="el-main"
        style=" background-image: url('http://121.5.175.203:8080/api/File/getfile/background2.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index:0;
      opacity:1;"
      >
        <el-form
          ref="personalData"
          class="mainBorder"
          label-position="right"
          :model="personalData"
          :rules="rules"
          label-width="100px"
          style="
          background: rgba(0,0,0,.5);
          box-sizing: border-box;
          box-shadow: 0 15px 25px rgba(0，0，0, 0.5);
          border-radius: 10px;"
        >
          <el-row :gutter="10">
            <el-form-item>
              <el-col :span="12" :offset="6">
                <p class="fontNormal" />
              </el-col>
              <el-col :offset="8" :span="12">

                <div class="block"><el-avatar :size="150" :src="circleUrl" fit="contain" /></div>
              </el-col>
            </el-form-item>
            <el-row>
              <el-col :span="5" :offset="11">
                <div class="file-upload">
                  <div class="file-upload-text">更新头像</div>
                  <input

                    id="upfile"
                    name="upfile"
                    class="file-upload-input"
                    type="file"
                    accept="image/*"
                    @change="getFile($event)"
                  >
                </div>
              </el-col>
            </el-row>
          </el-row>
          <el-row :gutter="10">
            <el-form-item>
              <el-col
                :span="2"
                :offset="5"
              ><p class="fontNormal">邮箱:</p></el-col>
              <el-col :span="3" :offset="0">
                <p class="fontWrite">
                  &nbsp;&nbsp;&nbsp;{{ personalData.email }}
                </p></el-col>
            </el-form-item>
          </el-row>
          <el-row :gutter="10">
            <el-form-item>
              <el-col
                :span="2"
                :offset="5"
              ><p class="fontNormal">昵称:</p></el-col>
              <el-col :span="8" :offset="0">
                <el-input
                  v-model="personalData.nickname"
                  style="margin-top: 20px;"
                  class="fontWrite"
                  maxlength="10"
                  show-word-limit
                />
              </el-col>
            </el-form-item>
          </el-row>
          <el-row :gutter="10">
            <el-form-item>
              <el-col
                :span="2"
                :offset="5"
              ><p class="fontNormal" style="width: 60px;">学工号:</p></el-col>
              <el-col :span="3" :offset="0">
                <p class="fontWrite">
                  &nbsp;&nbsp;&nbsp;{{ personalData.StuNum }}
                </p></el-col>
            </el-form-item>
          </el-row>
          <el-row :gutter="10">
            <el-form-item prop="newNickname">
              <el-col :span="2" :offset="5">
                <p class="fontNormal">身份:</p>
              </el-col>
              <el-col :span="3" :offset="0">
                <p class="fontWrite">
                  &nbsp;&nbsp;&nbsp;{{ personalData.identify }}
                </p></el-col>
            </el-form-item>
          </el-row>
          <el-row :gutter="10">
            <el-form-item>
              <el-col :span="2" :offset="6">
                <label class="fontNormal">性别:</label>
              </el-col>
              <el-col :span="8" :offset="0">
                <el-radio-group v-model="personalData.sex">
                  <el-radio label="male">男</el-radio>
                  <el-radio label="female">女</el-radio>
                  <el-radio label="secret">保密</el-radio>
                </el-radio-group>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row :gutter="10">
            <el-form-item>
              <el-col :span="2" :offset="6">
                <label class="fontNormal">密码:</label>
              </el-col>
              <el-col v-if="!isClickPwd" :span="3" :offset="0">
                <label class="fontPwd" @click="changePwd()">修改密码</label>
              </el-col>
              <el-col v-else :span="3" :offset="0">
                <label class="fontPwd" @click="changePwd()">取消</label>
              </el-col>
              <el-col v-if="isClickPwd" :span="3" :offset="0">
                <label class="fontPwd" @click="reset()">重置密码</label>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-if="isClickPwd" :gutter="10">
            <!-- <el-form-item>
              <el-col :span="4" :offset="5">
                <label class="fontNormal">旧密码:</label>
              </el-col>
              <el-col :span="8" :offset="0">
                <el-input v-model="oldPwd" class="fontWrite" />
              </el-col>
              <el-col v-if="!pwdSame" :span="12" :offset="5">
                <el-alert
                  title="与原密码不符"
                  type="error"
                  style="height: 30px"
                />
              </el-col>
            </el-form-item> -->
          </el-row>
          <el-row v-if="isClickPwd" :gutter="10">
            <el-form-item>
              <el-col :span="4" :offset="5">
                <label class="fontNormal">新密码:</label>
              </el-col>
              <el-col :span="8" :offset="0">
                <el-input v-model="newPwd" class="fontWrite" />
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-if="isClickPwd" :gutter="10">
            <el-form-item>
              <el-col :span="4" :offset="5">
                <label class="fontNormal">请再次密码:</label>
              </el-col>
              <el-col :span="8" :offset="0">
                <el-input v-model="newPwd2" class="fontWrite" />
              </el-col>
              <el-col v-if="!newSame" :span="12" :offset="5">
                <el-alert
                  title="两次输入密码不一致"
                  type="error"
                  style="height: 30px"
                />
              </el-col>
            </el-form-item>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="2" :offset="11">
              <el-button
                type="success"
                plain
                icon="el-icon-check"
                @click="confirme()"
              >确认修改</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="10" />
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import { getInfo } from '@/api/user'
import { updateNickname } from '@/api/user'
import { setPassword } from '@/api/user'
import { updatePhoto } from '@/api/user'
export default {
  name: 'PersonalInfo',
  components: {
    Navbar
    // Top
  },
  data() {
    return {
      // imgAdd1: '1',
      // userName1: '1',
      // isLogIn1: '1', // 根据登录状态判断顶部导航的显示状态
      // email1: '',
      isClickPwd: false,
      file: '',
      oldPwd: '',
      newPwd: '',
      newPwd2: '',
      // pwdSame: true,
      newSame: true,
      isSelect: false,
      aaa: 'contain',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      personalData:
        {
          email: '',
          nickname: '',
          StuNum: '',
          // avatarUrl: 'http://121.5.175.203:8080/api/File/getfile/chain.jpg', // 如果没有就返回空字符串即可
          password: '',
          sex: '',
          identify: ''
        },
      rules: {
        nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }]
      }
    }
  },
  mounted() {
    // getInfo/823206295@qq.com
    // var url = 'http://121.5.175.203:8080/api/Students/getInfo/' + this.email1
    // this.$axios
    //   .get(url)
    //   .then(res => { this.personalData = res.data })
  },
  created() {
    console.log('yes')
    getInfo().then(res => {
      console.log(res)
      console.log('yes')
      this.circleUrl = res.data.userPhoto
      // this.personalData.head_pic=res.userPhoto;
      this.personalData.email = res.data.userEmail
      this.personalData.nickname = res.data.userNickname
      this.personalData.StuNum = 1953608
      this.personalData.sex = 'male'
      this.personalData.identify = res.data.roles[0]
    })
  },
  methods: {
    changePwd() {
      this.isClickPwd = !this.isClickPwd
      console.log(this.isClickPwd)
      console.log(this.imgAdd1)
      console.log(this.userName1)
      console.log(this.isLogIn1)
    },
    getFile(event) {
      this.file = event.target.files[0]
      event.preventDefault()
      const formData = new window.FormData()
      formData.append('file', this.file)
      // console.log(formData.get('file'))
      updatePhoto(formData).then(res => {
        // console.log(res)
        // console.log('yes')
        this.$message.success('修改成功')
        getInfo().then(res => {
          console.log(res)
          console.log('yes')
          this.circleUrl = res.data.userPhoto
          // this.personalData.head_pic=res.userPhoto;
          this.personalData.email = res.data.userEmail
          this.personalData.nickname = res.data.userNickname
          this.personalData.StuNum = 1953608
          this.personalData.sex = 'male'
          this.personalData.identify = res.data.roles[0]
        })
      })
      // this.isSelect = true

      // this.$axios
      //   .post('http://121.5.175.203:8080/api/file/upload', formData, config)
      //   .then(function(response) {
      //     if (response.status === 200) {
      //       console.log(response.data)
      //     }
      //   })
      // this.personalData.head_pic =
      //   'http://121.5.175.203:8080/api/File/getfile/' + this.file.name
      // console.log(this.personalData.head_pic)
    },
    confirme() {
      var isCorrect = true
      if (this.isClickPwd == true) {
        if (this.newPwd != this.newPwd2) this.isCorrect = false
        else isCorrect = true
      }
      if (isCorrect) {
        // 上传昵称、性别、密码**********
        this.$alert('您的个人信息已经修改成功', '修改完成', {
          confirmButtonText: '确定',
          callback: (action) => {
            this.$message({
              type: 'success',
              message: '修改完成!'
            })
          }
        })
        this.$axios.post(url, data)
          .then(res => {
            console.log(res.data)
          }
          )
        updateNickname(this.personalData.nickname).then(res => {
          console.log(res)
          console.log('yes')
        })
        if (this.isClickPwd == true) {
          setPassword(this.newPwd).then(res => {
            console.log(res)
            console.log('yes')
          })
        }
      }
    },
    reset() {
      this.pwdSame = true
      this.newSame = true
      this.oldPwd = ''
      this.newPwd = ''
      this.newPwd2 = ''
    },
    log1() {
      console.log(this.imgAdd1)
      console.log(this.userName1)
      console.log(this.isLogIn1)
      console.log(this.email1)
    }
  }
}
</script>

<style scoped>
.avatar123{
      position:relative;
      background-attachment: fixed;
      z-index:5;
}
.leftNavigation {
  /* position: fixed; */
  position: fixed;
  width: 20%;
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  /* z-index:2; */
}
.el-header {
  background-color: #b3c0d1;
  color: black;
  text-align: center;
  line-height: 60px;
}
.el-row {
  margin-bottom: 20px;
}
.el-main {
  background-color: rgb(246, 246, 246);
  color: #333;
  text-align: left;
  line-height: 10px;
}
.mainBorder {
  background-color: white;
  width: 800px;
  position: relative;
  left: 25%;
}
.fontTitle {
  font-family: "heiti";
  font-size: 150%;
  font-weight: 900;
}
.fontNormal {
  font-family: "Times new Roman";
  font-size: 130%;
  font-weight: 400;
  color:azure;
}
.fontWrite {
  font-family: "Times new Roman";
  font-size: 130%;
  font-weight: 400;
  color:azure;
}
.fontPwd {
  font-family: "Times new Roman";
  font-size: 100%;
  font-weight: 300;
  color: rgb(99, 182, 230);

}
.fontPwd:hover{
  cursor:pointer;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.file-upload {
  width: 60px;
  height: 26px;
  position: relative;
  overflow: hidden;
  border: 1px solid #0db67e;
  display: inline-block;
  border-radius: 4px;
  font-size: 12px;
  color: #0db67e;
  text-align: center;
  line-height: 26px;
  /* float: right; */
  margin: 10px 0 auto auto;
  transform:translate(15px,0);
}
.file-upload-input {
  background-color: transparent;
  position: absolute;
  width: 999px;
  height: 999px;
  top: -10px;
  right: -10px;
  cursor: pointer;
}
</style>

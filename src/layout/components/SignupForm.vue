<template>
   <div>
   <login-box class="lg1">
       <h2 style="font:italic 1em Georgia, serif;font-size: 30px;position: absolute;top:7%;left: 25%;text-align:center;">Welcome to Tribe!</h2>
       <form style="padding: 10px;top:12%;position:absolute;width:80%;">
         <div class="user-box" style="padding: 20px;">
           <input type="text" name="" v-model="email" required="">
           <label style="color: #aaa;

    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;padding: 15px;">Email/Username</label>
         </div>
         <div class="user-box" style="padding: 20px;">
           <input type="password" name="" v-model="password" required="" >
           <label style="color: #aaa;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;padding: 15px;">Password</label>
         </div>
       
         <div v-if="passwordError" class="error">{{passwordError}}</div>
          <div class="div1">
           <router-link target="_blank" :to="{path:'/Register',query:{email: email,password: password}}" style="height:20px;width:60px;background: rgba(0,0,0,.5);">
           <p type="info" style="position: absolute;left: 5%;height:20px;font:Georgia, serif;width:60px;text-align:center;font-size:8px;color: #666666" >
               注册
               </p></router-link>
           <a type="info" class="wordPosition" @click="dialogFormVisible = true" style="position: absolute;top:100%;left: 5%;height:10px;width:60px;color: #666666;font:Georgia, serif;text-align:center;font-size:8px;">
               忘记密码
               </a>
          </div>
          </form>
          <el-dialog style="width: 1200px;height: 1200px;position: absolute;left: -100%;" :visible.sync="dialogFormVisible">
             <el-form style="width: 300px;height: 300px;" :model="form">
               <el-form-item label="邮箱账号" :label-width="formLabelWidth">
                 <el-input v-model="form.email" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item class="Acode" label="验证码" :label-width="formLabelWidth">
                 <el-input v-model="form.identify" autocomplete="off"></el-input>
               <el-button type="primary" plain @click="getCaptcha" :disabled="flag" style="position: absolute;top: 55%;left: 120%;">{{content}}</el-button>
               </el-form-item>
               <el-form-item label="新密码" :label-width="formLabelWidth">
                 <el-input v-model="form.pwd" autocomplete="off"></el-input>
               </el-form-item>
               </el-form>
                <div slot="footer" class="dialog-footer">
                   <el-button @click="dialogFormVisible = false">取 消</el-button>
                   <el-button type="primary" @click="dialogForm">确 定</el-button>
                 </div>
               </el-dialog>
           
         <button class="button1" style="padding: 10px;position: absolute;top: 43%;width: 50%;left: 30%;" @click="login()">
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           Submit
         </button>
        
   </login-box>
  
</div>
</template>

<script>
export default {
    data()
    {
        return{
            email: '',
            password: '',
            role:'designer',
            term: false,
            temSkill:'',
            skills:[],
            passwordError:"",
            dialogFormVisible: false,
            form: {
                      email: '',
                      identify: "",
                      pwd: ''
                    },
            active: 0,
            flag: false,//按钮是否可取
            content: "发送验证码",//按钮内文本
            totalTime: 60,//倒计时时间
            icode:"",
            nameUser:"",
            picName:""
     
        }
    },
    methods:
    {
        login:function(){
            
            this.$router.push({path:"/"});
        },
        dialogForm(){
            if(this.form.email==""||this.form.pwd==""||this.form.identify==""){
                alert("信息错误");
            }
            else{
            console.log(this.icode,"  ",this.form.identify);
            var code=parseInt(this.form.identify);
            console.log(this.icode,"  ",code);
            if(this.icode===code){
                console.log("yes");
                    var url="http://121.5.175.203:8080/api/students/changePwd";
                    var data=new Object;
                    data.email=this.form.email;
                    data.pwd=this.form.pwd;
                    this.$axios.post(url,data)
                    .then(res => {
                           // identifyCode=res.data;
                           console.log(res.data)
                       }
                    );
                    this.dialogFormVisible = false;
                    this.form.identify="";
                    this.form.email="";
                    this.form.pwd="";
                }
                else{
                    alert("验证码错误");
                }
            }
        },
        next() {
                if (this.active++ > 2) this.active = 0;
              },
        getCaptcha() {
              this.flag = true;//点击之后设置按钮不可取
              this.content = this.totalTime + "s后重新发送";//按钮内文本
              let clock = window.setInterval(() => {
                this.totalTime--;
                this.content = this.totalTime + "s后重新发送";
                if (this.totalTime < 0) {
                  window.clearInterval(clock);
                  this.content = "重新发送验证码";
                  this.totalTime = 60;
                  this.flag = false; //这里重新开启
                }
              }, 1000);
              var url="http://121.5.175.203:8080/api/Students/forget/"+this.form.email;
              this.$axios.get(url)
              .then(res => {
                     this.icode=res.data;
                 }
              );
            }
    }
}
</script>

<style scoped>
/* html {
  height: 100%;
}
body {
  margin:0;
  padding:0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
} */
login-box{
    position: absolute;
    top: 180%;
    left: 75%; 
    width: 400px;
    height: 1000px;
    padding: 40px;
    transform: translate(-60%, -50%);
    /* background: rgba(250, 250, 250, 0.5); */
    /* box-shadow: 0 15px 25px rgba(240, 240, 240, 0.6); */
    border-radius: 10px;
    z-index:-1;
}

h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #000000;
  text-align: center;
}

.user-box {
  position: relative;
}

.user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #5a5a5a;
  margin-bottom: 30px;
  border: none;
  border-bottom: 5px solid #eaeaea;
  outline: none;
  background: transparent;
}
.user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #00aaff;
  pointer-events: none;
  transition: .5s;
}

.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -30px;
  left: 0;
  color: #009fef;
  font-size: 12px;
}

.button1 {
  background:rgba(0, 97, 145, 0.1);
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #204162;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  letter-spacing: 4px;
  border-radius: 10px;
  
}

.login-box .button1:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}

.button1 span {
  position: absolute;
  display: block;
}
.button1 span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.button1 span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #55aaff);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.button1 span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 1px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.button1 span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #55aaff);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
.div1{
    /* display: inline-block; */
    width:120px;
    height:20px;
    top: 50%;
    position:relative;
    margin-left:90%;
}

.regisPositon{
    position:absolute;
    width:40px;
    height:20px;
}
</style>


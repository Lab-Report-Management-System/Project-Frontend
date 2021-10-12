<template>
    <div id="id">
        <img src="http://121.5.175.203:8080/api/File/getfile/register.png" />
        <div class="back">
        <div class="registerCom">
           <div class="lan"></div>
           <img src="http://121.5.175.203:8080/api/File/getfile/tubiao.png" style="position: absolute;height: 35px;width: 35px;top: 12%;left: 45%;" />
           <el-input v-model="inputName" placeholder="请输入昵称" style="padding: 10px;width: 70%;top: 12%;boarder-radius:20px;">
               <i slot="prefix" style="left: 5px;position: absolute;" class="el-input__icon el-icon-s-custom"></i>
           </el-input>
           <p style="top: 39.5%;boarder-radius:20px;position: absolute;left: 20%;font-size: 18px;color: #5A5A5A;">请选择性别：</p>
           <!-- <div class="sexBG" style="background:#EAEAEA;width: 70%;top: 33%;padding: 10px;boarder-radius:20px;position: absolute;left: 15%;"> -->
               <el-radio-group v-model="personalData[0].sex" style="padding: 10px;position: relative;top: 17%;left: 10%;">
                               <el-radio label="male">男</el-radio>
                               <el-radio label="female">女</el-radio>
                               <el-radio label="secret">保密</el-radio>
                             </el-radio-group>
           <!-- </div> -->
           <el-input v-model="inputEmail" placeholder="请输入邮箱" style="padding: 10px;width: 70%;top: 22%;boarder-radius:20px;">
               <i slot="prefix" style="left: 5px;position: absolute;" class="el-input__icon el-icon-cloudy"></i>
           </el-input>
           <el-input placeholder="请输入密码" v-model="inputPwd" show-password style="padding: 10px;width: 70%;top: 27%;boarder-radius:20px;">
               <i slot="prefix" style="left: 5px;position: absolute;" class="el-input__icon el-icon-lock"></i>
           </el-input>
           <button  class="button1" type="primary" style="width: 30%;left: 35%;top:84%;position: absolute;" @click="register">注册</button>
        </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return{
            inputName:'',
            inputPwd:'',
            inputEmail:'',
            core_id:"",
            personalData: [
                    {
                      sex: "male",
                    }
            ],
        }
    },
    props:["id"],
    methods:{
        register(){
            var data=new Object;
            data.name=this.inputName;
            data.pwd=this.inputPwd;
            data.email=this.inputEmail;
            data.sex=this.personalData[0].sex;
            console.log(this.id);
            if(data.name===""||data.pwd===""||data.email===""){
                alert("信息错误");
            }
            else{
                var url="http://121.5.175.203:8080/api/Students/register"+"/"+data.name+"/"+data.email+"/"+data.sex+"/1/"+data.pwd;
                this.$axios.get(url,data)
                .then(res => {
                       console.log(res.data);
                       if(res.data==2){
                           this.$router.push({path:"/SignIn"});
                       }
                       else if(res.data==1){
                           alert("名称重复哟~再换一个吧！");
                       }
                       else{
                           alert("格式错误~再检查一遍！");
                       }
                   }
                );
            }
        }
    }
}
</script>

<style scope>
img{
   position: absolute;
   height: 100%; 
   left: 0%;
   top: 0%;
   width: 100%;
   z-index: -1;
}
.id el-input{
    padding: 20px;
    position: absolute;
    
    
}
.lan{
    background-image: linear-gradient(to right bottom, rgba(235, 126, 235, 0.5), rgb(202, 63, 98));
    /* position: absolute; */
    height: 10%;
    width: 100%;
    left: -2%;
    top: 0%;
    border-radius:20px;
}
.registerCom{
    /* background:#f3f2ff; */
    /* background-image: linear-gradient(b, yellow); */
    position: absolute;
    height: 70%; 
    width: 70%;
    left:15%;
    top: 20%;
    transition:0.5;
    z-index: 1;
    border: #7fbebe;
    border-width: 5px 5px;
    border-radius:20px;
    border-style: solid;
    background-image:linear-gradient(to right bottom,rgba(142, 243, 218, 0.3),rgba(138, 214, 255, 0.8))
}
.back{
    position: absolute;
    height:100%;
    width:50%;
    left:50%;
    
    background:rgba(33, 35, 36, 0.3);
}
 .button1 {
  background:rgba(197, 91, 144, 0.5);
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #dceff0;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  letter-spacing: 4px;
  border-radius: 10px;
  
}

 .button1:hover {
  background: #bb5298;
  color: rgb(117, 202, 218);
  border-radius: 5px;
  box-shadow: 0 0 5px #d64fa9,
              0 0 25px #d64fa9,
              0 0 50px #d64fa9,
              0 0 100px #d64fa9;
}

.button1 span {
  position: absolute;
  display: block;
}

.button1 span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
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
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
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
  height: 2px;
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
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
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

</style>

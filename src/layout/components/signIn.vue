<template>
  <div class="hello">
        <img alt="background" src="http://121.5.175.203:8080/api/File/getfile/background.png" class="backgroud"/>
        <!-- <img alt="background" src="../assets/back.png"/> -->
        <div>
            <signin class="signin1"></signin>
        </div>
  </div>
</template>

<script>

// import axios from '../plugins/axios'
import signin from './SignupForm.vue'
export default {
    components: {
      signin
      // axios
    },
  data() {
      return {
          name1: '',
          pwd : '',
          content:'123'
      }
  },
  // mounted:function(){
  //     axios.get('http://jsonplaceholder.typicode.com/posts').then(body => {
  //         console.log(body)
  //     });
  // },
  methods : {
      // login:function() {
      //    if(this.name1=="null"){
             
      //        axios.post('http://121.5.175.203:8080/api/TodoItems').then(body => {
      //                console.log(body)
      //            });
      //    }
      //    else{
      //        console.log("1");
      //    }
      // }
  }
}
</script>

<style scoped>
.login123 {
    width: 300px; margin: 10% auto;
}
.account{
    position: absolute;
    top:30%;
    left: 35%;
    z-index: 3;
    font-size: 18px;
    color:#000000;
    font-family: cursive;
}
.password{
    position: absolute;
    top:35%;
    left: 35%;
    z-index: 3;
    font-size: 18px!important;
    color:#000000!important;
    font-family: cursive!important;
}
.submit{
    position: absolute;
    top:42%;
    left: 45%;
    z-index: 3;
}
.backgroud{
    position: absolute;
    width: 100%;
    top:0%;
    left: 0%;
    height: 100%;
    z-index: 1;
}
.p{
    position: absolute;
    z-index: 2;
}
.signin1{
    position: absolute;
    top:2%;
    left: 38.5%;
    width: 18%;
    height: 32%;
    z-index: 3;
    zoom: 0.85
}
input{
    display: block;
    padding: 10px 6px;
    box-sizing: border-box;
    border:#000000;
    border-bottom: 1px solid #ddd;
    color: #555;

}
</style>
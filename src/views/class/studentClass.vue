<template>
  <div>
    <!-- dashBoard -->
    <!--    <layout />-->
    <!-- Greetings to the student-->
    <h1 class="title">{{ userName }}同学，您好</h1>
    <!-- class Info -->
    <div class="classes">
      <ClassInfo class="info" />
    </div>
  </div>
</template>

<script>
import ClassInfo from './components/classInfo'
import store from '@/store'

// console.log('username' + store.getters.name)
// console.log(store.getters.roles)
export default {
  name: 'StudentClass',
  components: {
    ClassInfo
  },
  data() {
    return {
      userName: store.getters.name
    }
  }
}
</script>

<style scoped>
.title{
  top:8%;
  left:5%;
  position: absolute;
}
.classes{
  width:90%;
  top:20%;
  left:5%;
  position: absolute;
}
.info{
  top:40%;
  left:50%;
}
</style>

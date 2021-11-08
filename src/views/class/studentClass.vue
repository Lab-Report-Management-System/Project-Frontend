<template>
  <div>
    <!-- dashBoard -->
    <layout />
    <!-- Greetings to the student-->
    <h1 class="title">同学，您好</h1>
    <!-- class Info -->
    <div class="classes">
      <ClassInfo class="info" />
    </div>
  </div>
</template>

<script>
import Layout from '@/layout'
import ClassInfo from './components/classInfo'
export default {
  name: 'StudentClass',
  components: {
    Layout,
    ClassInfo
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

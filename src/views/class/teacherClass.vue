<template>
  <div>
    <!--Greetings to the teacher -->
    <h1 class="title">老师，您好</h1>
    <!--DashBoard -->
    <layout></layout>
    <!--class info -->
    <div class="classes">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="班级一(42034201)" name="first">
          <ClassInfo class="info"></ClassInfo>
        </el-tab-pane>
        <el-tab-pane label="班级二(42034202)" name="second">
          <ClassInfo class="info"></ClassInfo>
        </el-tab-pane>
        <el-tab-pane label="班级三(42034203)" name="third">
          <ClassInfo class="info"></ClassInfo>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Layout from '@/layout'
import ClassInfo from './components/classInfo'
export default {
  name: 'TeacherClass',
  components: {
    Layout,
    ClassInfo
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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

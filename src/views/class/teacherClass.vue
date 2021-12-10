<template>
  <div>
    <!--Greetings to the teacher -->
    <h1 class="title">{{ userName }}老师，您好</h1>
    <!--DashBoard -->
    <!--    <layout />-->
    <!--class info -->
    <div class="classes">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in courseIds"
          :key="index"
          :label="'课号:'+item"
          :name="item"
        >
          <!--          {{ id }}-->
          <ClassInfo class="info" />
        </el-tab-pane>
        <!--        <el-tab-pane label="班级二(42034202)" name="second">-->
        <!--          <ClassInfo class="info" />-->
        <!--        </el-tab-pane>-->
        <!--        <el-tab-pane label="班级三(42034203)" name="third">-->
        <!--          <ClassInfo class="info" />-->
        <!--        </el-tab-pane>-->
      </el-tabs>
    </div>
  </div>
</template>
<script>
import ClassInfo from './components/classInfo'
import store from '@/store'
export default {
  name: 'TeacherClass',
  components: {
    ClassInfo
  },
  data() {
    return {
      activeName: '0',
      userName: store.getters.name,
      courseIds: ['0', '1']
    }
  },
  created() {

  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    getCourseIds() {

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

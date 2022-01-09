<template>
  <div>
    <!--Greetings to the teacher -->
    <h1 class="title">{{ userName }}{{ role }}，您好</h1>
    <div class="classes">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in courseIds"
          :key="index"
          :label="'课号:'+item"
          :name="item"
        >
          <ClassInfo class="info" :course-id="item" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import ClassInfo from './components/classInfo'
import store from '@/store'
import { getCourseIds } from '@/api/teacher'
export default {
  name: 'TeacherClass',
  components: {
    ClassInfo
  },
  data() {
    return {
      userName: store.getters.name,
      courseIds: [],
      activeName: '',
      role: store.getters.roles[0] === 'TeachingAssistant' ? '助教' : '老师'
    }
  },
  created() {
    this.getCourseIds()
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    getCourseIds() {
      getCourseIds().then(res => {
        console.log("res.data.courseIds")
        console.log(res.data.courseIds)
        console.log("res.data.courseIds")
        this.courseIds = res.data.courseIds
        this.courseIds.pop()
        this.activeName = this.courseIds[0]
        // console.log(this.activeName)
      })
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

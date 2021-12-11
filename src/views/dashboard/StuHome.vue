<template>
  <div class="home">
    <el-row :gutter="10">
      <el-col class="panel" :sm="12" :xs="24">
        <el-card shadow="hover">
          <div slot="header" class="panel-head">
            <div class="panel-head-title"> {{ this.nickname }} 同学你好！</div>
          </div>
          <div class="user">
            <div class="user-main">
              <div class="user-main-img">
                <el-avatar :src="studentPhoto" />
              </div>
              <div class="user-main-content">
                <div class="user-main-content-name">{{ this.studentName }}</div>
                <div class="user-main-content-tag">
                  <el-tag size="small" style="margin-right: 10px;">软件学院</el-tag>
                  <el-tag type="success" size="small">软件工程学院</el-tag>
                  <div class="user-main-content-login"><el-tag type="info" size="small" style="margin-right: 10px;">上次登录时间:</el-tag>{{ this.lastLoginTime }}</div>
                  <div class="user-main-content-time">{{ this.first_year }}-{{ this.second_year }}学年第{{ this.term }}学期第{{ this.week }}周</div>
                </div>
              </div>
            </div>
            <div class="user-panel">
              <div class="user-panel-wrap">
                <img src="../../assets/images/lab.png" alt="">
                <div class="user-panel-desc">填写实验报告</div>
              </div>
              <div class="user-panel-wrap">
                <img src="../../assets/images/class.png" alt="">
                <div class="user-panel-desc">查看班级</div>
              </div>
              <div class="user-panel-wrap">
                <img src="../../assets/images/grade.png" alt="">
                <div class="user-panel-desc">成绩管理</div>
              </div>
              <div class="user-panel-wrap">
                <img src="../../assets/images/battle.png" alt="">
                <div class="user-panel-desc">答题对战</div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col class="panel" :sm="12" :xs="24">
        <el-card shadow="hover">
          <div slot="header" class="panel-head">
            <div class="panel-head-title">我的课程</div>
            <el-select v-model="courseValue" placeholder="请选择" size="mini">
              <el-option
                v-for="item in courseOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <el-table
            :data="courseData"
            border
            style="width: 100%"
            height="240"
          >
            <el-table-column
              prop="courseNum"
              label="课号"
              width="120"
              align="center"
            />
            <el-table-column
              prop="courseName"
              label="课程名称"
              align="center"
            />
            <el-table-column
              prop="teacher"
              label="教师"
              width="100"
              align="center"
            />
            <el-table-column
              label="操作"
              width="100"
              align="center"
            >
              <template slot-scope="scope">
                <el-button type="text" size="small">查看</el-button>
                <el-button type="text" size="small" disabled>编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col class="panel" :sm="12" :xs="24">
        <el-card shadow="hover">
          <div slot="header" class="panel-head">
            <div class="panel-head-title">系统公告</div>
            <div class="panel-head-right">
              <el-button type="info" plain size="mini" icon="el-icon-plus" disabled>发布公告</el-button>
              <el-button type="info" plain size="mini">查看更多<i class="el-icon-arrow-right el-icon--right" /></el-button>
            </div>
          </div>
          <div v-for="(item,index) in 1" :key="index" class="notice">
            <div class="notice-desc">【课程法】差值评价互斥方案实验已发布</div>
            <div class="notice-time">
              <i class="el-icon-bell" /> 2021-12-02 00:50:22
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 实验报告 -->
      <el-col class="panel" :sm="12" :xs="24">
        <el-card shadow="hover">
          <div slot="header" class="panel-head">
            <div class="panel-head-title">实验报告完成情况</div>
            <div class="panel-head-right">
              <el-select v-model="allLabValue" placeholder="请选择" size="mini" style="margin-right: 10px;">
                <el-option
                  v-for="item in allReportOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-select v-model="unfinishedLabValue" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in unfinishedReportOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div class="report">
            <div class="report-title">软件工程学</div>
            <div class="report-main">
              <div class="report-main-progress">
                <el-progress type="circle" :percentage="25" />
              </div>
              <div class="report-main-content">
                <div class="report-main-content-box">
                  <div class="report-main-content-box-tit">下一个即将截止的实验</div>
                  <div>插值法评论互斥实验</div>
                </div>
                <div class="report-main-content-box">
                  <div class="report-main-content-box-tit">截止时间</div>
                  <div>2021年10月17日</div>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getInfo } from '@/api/user'
import { getLabInfo } from '@/api/lab'
import { getToken } from '@/utils/auth'
import { getTeacherAndCourse } from '@/api/course'

export default {

  name: 'Home',
  data() {
    return {
      studentName: '',
      nickname: '',
      studentPhoto: '',
      lastLoginTime: '暂无',
      first_year: 2021,
      second_year: 2020,
      month: 9,
      day: 6,
      term: '',
      week: 1,
      currentWeek: 1,
      courses: [],
      courseData: [],
      courseOptions: [],
      allReportOptions: [{ value: '嗯嗯', label: '呵呵' }],
      unfinishedReportOptions: [{ value: 'ene' }],
      courseValue: '',
      allLabValue: '',
      unfinishedLabValue: '',
      token: {
        code: ''
      }
    }
  },
  created() {
    // 获取个人信息
    getInfo().then(res => {
      console.log(res)
      this.studentName = res.data.userName
      this.nickname = res.data.userNickname
      this.studentPhoto = res.data.userPhoto
      this.lastLoginTime = this.$cookies.get('lastLoginTime')
      this.$cookies.set('lastLoginTime', Date())
      const date = new Date()
      this.month = date.getMonth()
      this.day = date.getDay()
      if (this.month >= 8) {
        this.first_year = date.getFullYear()
        this.second_year = this.first_year + 1
        this.term = '一'
      } else {
        this.second_year = date.getFullYear()
        this.first_year = this.second_year - 1
        this.term = '二'
      }
      const time1 = date.getTime()
      date.setFullYear(2021, 8, 6)
      const time2 = date.getTime()
      this.week = parseInt((time1 - time2) / 1000 / 3600 / 24 / 7) + 1
    })
    // 获得所有实验
    this.token.code = getToken()
    getLabInfo(this.token).then(res => {
      console.log('呵呵')
      console.log(res)
      // this.allReportOptions = res.labEntityList
    //   this.allReportOptions.add()
    //    for (let i = 0; i < this.labs.length; i++) {
    //   //   if (this.getCurrentDay() <= this.labs[i].labDeadline) {
    //   //     this.scheduleList.push({ className: this.labs[i].labName, color: this.colorList[Math.floor(Math.random() * 7)] })
    //   //   }
    //   }
    })
    // 获得首页课程
    getTeacherAndCourse(this.token).then(res => {
      console.log(res)
      this.courses = res.coursesInfoList
      for (let i = 0; i < this.courses.length; i++) {
        this.courseData.push({ courseNum: this.courses[i].course_id, courseName: this.courses[i].course_name, teacher: this.courses[i].teacher_name })
        this.courseOptions.push({ label: this.courses[i].course_name })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10px;
  .panel {
    margin-bottom: 10px;

    ::v-deep .el-card__body {
      height: 280px;
      overflow-y: auto;
    }
    .panel-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .panel-head-title {
        font-weight: 600;
        line-height: 28px;
        font-size: 14px;
        color: #363636;
      }
      .panel-head-right {
        display: flex;
        justify-content: space-between;
      }
    }

    .user{
      .user-main {
        width: 100%;
        display: flex;
        align-items: center;
        .user-main-img {
          width: 36%;
          padding-right: 5%;
          ::v-deep .el-avatar {
            display: block;
            margin: 0 auto;
            width: 120px !important;
            height: 120px !important;
          }
        }
        .user-main-content {
          width: 60%;
          .user-main-content-name {
            font-size: 28px;
            color: #333;
            font-weight: 600;
            letter-spacing: 1px;
          }
          .user-main-content-tag {
            margin-top: 8px;
          }
          .user-main-content-login {
            margin: 10px 0;
            color: #696969;
            font-size: 12px;
            display: flex;
            align-items: center;
          }
          .user-main-content-time {
            font-size: 18px;
            color: #363636;
            font-weight: 600;
          }
        }
      }
      .user-panel {
        width: 100%;
        padding: 0 5%;
        display: flex;
        margin-top: 16px;
        .user-panel-wrap {
          width: 25%;
          img {
            display: block;
            width: 64px !important;
            height: 64px !important;
            margin: 0 auto;
          }
          .user-panel-desc {
            text-align: center;
            font-size: 14px;
            height: 20px;
            color: #696969;
            line-height: 30px;
          }
        }
      }
    }

    .notice {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 46px;
      border-bottom: 1px solid #eee;
      .notice-desc {
        width: calc(100% - 130px);
        font-size: 14px;
        color: #2b2f3a;
      }
      .notice-time {
        width: 130px;
        text-align: right;
        color: #666666;
        font-size: 12px;
      }
    }

    .report {
      .report-title{
        color: #5a5e66;
      }
      .report-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 6%;
        .report-main-progress {
          width: 48%;
          text-align: right;
          padding-right: 10%;
        }
        .report-main-content {
          width: 52%;
          .report-main-content-box {
            padding: 10px 0;
            font-size: 18px;
            color: #2b2f3a;
            margin-bottom: 10px;
            .report-main-content-box-tit {
              color: #999;
              font-size: 13px;
              line-height: 30px;
            }
          }
        }
      }
    }

  }
}
</style>

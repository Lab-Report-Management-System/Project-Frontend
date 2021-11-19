<template>
  <div class="calendar">
    <el-row :gutter="10">
      <!--日历-->
      <el-col :sm="19" :xs="24">
        <el-card class="left-calendar-panel">
          <el-calendar>
            <template
              slot="dateCell"
              slot-scope="{date, data}"
            >
              <div>{{ data.day.split('-').slice(1).join('-') }}</div>
              <div v-if="data.isSelected" class="calendar-content">
                <div>
                  <i class="el-icon-edit" />
                  10:00签到5
                </div>
                <div class="del-line">
                  <i class="el-icon-s-flag" />
                  课程三：类的设计
                </div>
              </div>
            </template>
          </el-calendar>
        </el-card>
      </el-col>
      <!--右侧区域-->
      <el-col :sm="5" :xs="24">
        <el-card class="right-calendar-panel">
          <el-calendar v-model="calendarValueTwo" />
        </el-card>
        <el-card class="right-collapse-panel">
          <el-collapse v-model="collapseActive">
            <el-collapse-item title="日历" :name="1">
              <div v-for="(item ,index) in scheduleList" :key="index" class="collapse-wrap">
                <div class="collapse-wrap-square" :style=" {'background': item.color}" />
                <div class="collapse-wrap-desc">{{ item.className }}</div>
                <div class="collapse-wrap-icon">
                  <el-color-picker v-model="item.color" size="mini" />
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="无期限" :name="2">
              <div v-for="(item ,index) in scheduleList" :key="index" class="collapse-wrap">
                <div class="collapse-wrap-square" :style=" {'background': item.color}" />
                <div class="collapse-wrap-desc">{{ item.className }}</div>
                <div class="collapse-wrap-icon">
                  <el-color-picker v-model="item.color" size="mini" />
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
        <div class="right-link-panel">
          <i class="el-icon-date" type="primary" />
          &nbsp;&nbsp;
          <el-link type="primary"> 成功链接</el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      calendarValueTwo: new Date(),
      collapseActive: 1,
      scheduleList: [],
      colorList: ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399', '#303133', '#C0C4CC']
    }
  },
  created() {
    for (let i = 0; i <= 10; i++) {
      this.scheduleList.push({ className: `同级大学融合线上线下第${i + 1}节课程`, color: this.colorList[Math.floor(Math.random() * 7)] })
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  padding: 10px;

  .is-selected {
    color: #1989FA;
  }

  ::v-deep .el-card__body {
    padding: 14px 12px !important;
  }

  .left-calendar-panel {
    ::v-deep .el-calendar-day{
      height: 110px;
      padding: 2px;
      .calendar-content {
        overflow: hidden;
        div {
          margin: 4px 2px;
          padding: 1px 2px;
          border: 1px solid #c9c9c9;
          border-radius: 4px;
          font-size: 12px;
          color: #999;
          position: relative;
          overflow: hidden;
          white-space:nowrap;
          i {
            color: #20a0ff;
          }
        }
        .del-line ::after {
          display: block;
          content: '';
          width: 100%;
          height: 1px;
          background: #c6c6c6;
          top: 50%;
          position: absolute;
        }
      }
    }
  }

  .right-calendar-panel {
    //重构右侧日历
    ::v-deep .el-calendar__header {
      padding: 10px;

      .el-calendar__title {
        font-size: 12px;
      }

      .el-button-group button {
        padding: 5px;
        font-size: 12px;
      }
    }

    ::v-deep .el-calendar__body {
      padding: 10px;

      .el-calendar-table {
        thead th {
          font-size: 14px;
        }

        .el-calendar-day {
          font-size: 13px;
          height: auto;
          text-align: center;
        }
      }
    }
  }

  .right-collapse-panel {
    margin-top: 10px;
    ::v-deep .el-collapse-item__header {
      font-weight: 700;
    }
    .collapse-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .collapse-wrap-square {
        width: 14px;
        height: 13px;
        border-radius: 2px;
        margin-right: 8px;
      }
      .collapse-wrap-desc {
        width: 100%;
        padding: 2px 0;
        font-size: 12px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .collapse-wrap-icon {
        height: 16px;
        ::v-deep .el-color-picker--mini {
          height: 16px !important;
        }
        ::v-deep .el-color-picker--mini .el-color-picker__trigger {
          width: 16px !important;
          height: 16px !important;
          padding: 0;
        }
      }
    }
  }

  .right-link-panel {
    margin: 20px 0 0 5px;
  }
}
</style>

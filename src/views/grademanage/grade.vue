<template>
  <div>
    <div style="margin-top: 2cm;margin-left: 2cm;">
      <el-tag style="width: 90px;margin-left: 5px;text-align: center;">签到占比</el-tag>
      <el-input
      :disabled="isActive"
        v-model="rateSign"
        style="width: 90px;margin-left: 5px"

      />
      <el-tag style="width: 90px;margin-left: 5px;text-align: center;">对战占比</el-tag>
      <el-input
      :disabled="isActive"
        v-model="rateBattle"
        style="width: 90px;margin-left: 5px"

      />
      <el-tag style="width: 90px;margin-left: 5px;text-align: center;">报告占比</el-tag>
      <el-input
      :disabled="isActive"
        v-model="rateReport"
        style="width: 90px;margin-left: 5px"

      />
      <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        style="width: 100%"
      >
        <el-table-column
          label="学号"
          width="180"
        >
          <template slot-scope="scope">
            <i class="el-icon-reading" />
            <span style="margin-left: 10px">{{ scope.row.stuNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180"
        >
          <template slot-scope="scope">
            <i class="el-icon-user" />
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="课程名称"
          width="200"
        >
          <template slot-scope="scope">
            <i class="el-icon-notebook-2" />

            <el-tag size="medium">{{ scope.row.courseName }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="签到次数    |    签到成绩"
        width="300">
          <template slot-scope="scope">

            <el-tag style="width: 50px;margin-left: 5px;">{{ scope.row.signNum }}</el-tag>
            <el-input
            :disabled="isActive"
              v-model="scope.row.signGrade"
              style="width: 90px;margin-left: 5px"
              @change="handlerChange(scope.$index)"
            />

          </template>
        </el-table-column>
        <el-table-column label="报告总分    |    报告成绩"
        width="300">
          <template slot-scope="scope">

            <el-tag style="width: 50px;margin-left: 5px;">{{ scope.row.reportNum }}</el-tag>
            <el-input
            :disabled="isActive"
              v-model="scope.row.reportGrade"
              style="width: 90px;margin-left: 5px"
              @change="handlerChange(scope.$index)"
            />

          </template>
        </el-table-column>
        <el-table-column label="对战总分    |    对战成绩"
        width="300">
          <template slot-scope="scope">
            <el-tag style="width: 50px;margin-left: 5px;">{{ scope.row.battleNum }}</el-tag>
            <el-input
            :disabled="isActive"
              v-model="scope.row.battleGrade"
              style="width: 90px;margin-left: 5px"
              @change="handlerChange(scope.$index)"
            />

          </template>
        </el-table-column>

        <el-table-column label="总分">
          <template slot-scope="scope">
            <p>{{ scope.row.grade }}</p>
          </template>
        </el-table-column>

      </el-table>

    </div>
    <el-button type="primary" style="margin-top: 2cm;margin-left: 20cm;margin-bottom: 2cm;" :key="isActive" :disabled="isActive" @click.native="submit">确认提交</el-button>
    <el-button type="info" :disabled="isActive" @click="cancle">取消</el-button>
  </div>
  </div>
</template>

<script>
import { addStudent } from '../../api/student'
import { getRawGrades } from '../../api/teacher'
import { postStudentGrades } from '../../api/teacher'
export default {
  props: {

  },
  data() {
    return {
      isSelect: [...Array(20)].map(() => false),
      inputStuNumber: '',
      inputName: '',
      input: '',
      isActiveSub: false,
      rateSign:'',
      isActive:false,
      rateReport:'',
      rateBattle:'',
      tableData: [

      ],
      newObj: {
        stuNumber: '',
        name: '',
        courseName: '',
        signNum: 100,
        signGrade: 100,
        reportNum: 100,
        battleNum: 100,
        reportGrade: 100,
        battleGrade: 100,
        grade: ''
      },
      editIndex: null, // 保存正在编辑的对象的索引，注意这里的初始值不能为0及0以上的数
      rowID: ''
    }
  },
  watch: {
    'tableData': function(newVal) {
      this.tableData = newVal
    }
  },
  created() {
    const courseId = 42014603
    console.log('res')
    getRawGrades({ courseId }).then(res => {
      console.log(res)
      const length = res.tableData.length
      for (let i = 0; i < length; i++) {
        this.tableData.push(res.tableData[i])
      }
      if(this.tableData[0].grade!=null){
        this.isActive=true;
      }
    })
  },
  methods: {
    signyes(index) {
      console.log('yes')
      console.log(this.isSelect[index])
      console.log(index)
      // this.isSelect[index]=1
      this.$set(this.isSelect, index, !this.isSelect[index])
      console.log(this.isSelect[index])
    },
    signno(index) {
      this.$set(this.isSelect, index, true)
    },
    tableRowClassName({ row, rowIndex }) {
      this.rowID = rowIndex
      // console.log(this.rowID)
      if (this.rowID % 2 == 0) {
        return 'info-row'
      }
      if (this.rowID % 2 == 1) {
        return 'success-row'
      }
      return ''
    },
    handlerChange(x) {
      this.tableData[x].grade = Math.ceil(parseInt(this.tableData[x].signGrade) *parseInt(this.rateSign)/100 + parseInt(this.tableData[x].reportGrade) * parseInt(this.rateReport)/100 + parseInt(this.tableData[x].battleGrade) * parseInt(this.rateBattle)/100)
    },
    cancle() {
      this.$router.push({ path: '/' })
    },
    submit() {
      var tableData=[];
      for (let i = 0; i < this.tableData.length; i++) {
            tableData.push(this.tableData[i])
      }
      console.log(tableData)
      postStudentGrades(tableData).then(res => {
        console.log('yres')
      })
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f8fafc;
  }
  .el-table .info-row {
    background: #f1f2f5;
  }
</style>

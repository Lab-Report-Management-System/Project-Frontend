<template>
  <div>
    <p style="font-family:simhei;font-size: 25px;left: 10%;position: absolute;">{{ name }},你好！</p>
    <div style="top: 10%;position: absolute;width: 100%;">
      <el-table
        :data="tableData"
        border
        :row-class-name="tableRowClassName"
        :empty-text="none"
        style="width: 68%;left: 10%;top: 20%;"
      >
        <el-table-column
          prop="labName"
          label="实验报告名称"
          width="250"
        />
        <el-table-column
          prop="stuNumber"
          label="学号"
          width="120"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
        />
        <el-table-column
          prop="city"
          label="指导教师"
          width="150"
        >黄杰
        </el-table-column>
        <el-table-column
          label="已完成    |    未完成"
          width="200"
          style="position:relative;left:50%;"
        >
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-check" circle style="zoom: 0.8;" :disabled="!tableData[rowID].isActive" />
            <el-button type="primary" icon="el-icon-edit" circle style="zoom: 0.8;left:34%;position:absolute;":disabled="tableData[rowID].isActive" />
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="180"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" :disabled="!tableData[rowID].isActive" @click="handleClickEdit(scope.row)">预览</el-button>
            <el-button type="text" size="small" :disabled="tableData[rowID].isActive" @click="handleClickEdit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table .info-row {
    background: #F2F6FC;
  }
</style>

<script>
import { getStuInfo } from '../../api/student.js'
export default {

  data() {
    return {
      name: '',
      none: '暂无消息',
      rowID: '',
      tableData: []
    }
  },
  created() {
    var url = 'http://182.61.43.155:6001/api/stuInfo'
    const parms = { stuNumber: 1953603, name: '尚丙奇' }
    var data = new Object()
    // data.stuNumber=this.$router.query.stuNumber;
    data.stuNumber = 1953608
    data.name = '吴英豪'
    console.log(parms)
    getStuInfo(parms).then(res => {
      this.tableData = res
      console.log(this.tableData[0].name)
      this.name = this.tableData[0].name
    })
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      this.rowID = rowIndex
      if (this.tableData[rowIndex].state === 2) {
        return 'warning-row'
      }
      if (this.tableData[rowIndex].state === 1) {
        return 'success-row'
      }
      if (this.tableData[rowIndex].state === 0) {
        return 'info-row'
      }
      return ''
    },
    handleClickEdit(row) {
      this.$router.push({ path: '/example/labRep', query: {
        name: row.name,
        stuNumber: row.stuNumber,
        labID: row.labID,
        isActive: row.isActive
      }})
    }

  }

}
</script>

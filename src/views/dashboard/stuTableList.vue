<template>
  <el-table
    :data="tableData"
    border
    :row-class-name="tableRowClassName"
    :empty-text="none"
    style="width: 100%;top: 20%;"
  >

    <el-table-column
      label="实验报告名称"
      prop="labName"
      width="auto"
    >
      <template slot-scope="scope">
        <p>{{ tableData[rowID].labName }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="学号"
      width="120"
    >
      <template slot-scope="scope">
        <p>{{ tableData[rowID].stuNumber }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="120"
    >
      <template slot-scope="scope">
        <p>{{ tableData[rowID].name }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="指导教师"
      width="auto"
    >黄杰
    </el-table-column>

    <el-table-column
      label="已完成    |    未完成"
      width="180"
      style="position:relative;left:50%;"
    >

      <template slot-scope="scope">
        <el-button type="success" icon="el-icon-check" circle style="zoom: 0.8;" :disabled="!tableData[rowID].isActive" />
        <el-button type="primary" icon="el-icon-edit" circle style="zoom: 0.8;left:34%;position:absolute;" :disabled="tableData[rowID].isActive" />
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="120"
    >
      <template slot-scope="scope">
        <el-button type="text" size="small" :disabled="!tableData[rowID].isActive" @click="handleClickView(scope.row)">查看评分</el-button>
        <el-button type="text" size="small" :disabled="tableData[rowID].isActive" @click="handleClickEdit(scope.row)">编辑</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import { getLabReportId } from '@/api/student'

export default {
  props: [
    'tableData'
  ],

  data() {
    return {
      name: 'Ameis',
      none: '暂无消息',
      rowID: '',
      labReportId: null

    }
  },
  created() {
    // this.tableData2=this.tableData;
    console.log('sa')
    console.log(this.tableData)
    console.log(this.tableData[3])
    let aaa =this.tableData[3]
    console.log('sa')
    console.log(aaa.isActive)
    // console.log(this.tableData[3]["getisActive"])
    // initial();
    getLabReportId({ labId: 1 }).then(res => {
      const { labReportId } = res
      this.labReportId = labReportId
    })
    // console.log(this.tableData)
  },
  watch:{
    'tableData': function(newVal) {
      console.log("this.tableData")
      console.log(this.tableData)
      this.$set(this.tableData[3],isActive ,newVal[3].isActive)
      }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      this.rowID = rowIndex
      if (this.tableData[rowIndex].state == 2) {
        return 'warning-row'
      }
      if (this.tableData[rowIndex].state == 1) {
        return 'success-row'
      }
      if (this.tableData[rowIndex].state == 0) {
        return 'info-row'
      }
      return ''
    },
    handleClickEdit(row) {
      this.$router.push({ path: '/lab/submitReport', query: {
        state: this.tableData[1].state,
        labID: 1
      }})
    },
    handleClickView(row) {
      this.$router.push({ path: '/lab/viewRemarks', query: {
        labReportId: this.labReportId
      }})
    }

  }
  // created(){
  //     var url="http://121.5.175.203:8080/api/Video/getFavoriteVideo";
  //     var data=new Object;
  //     data.stuNumber=this.$router.query.stuNumber;
  //     data.name=this.$router.query.name;
  //     this.$axios.get(data,url)
  //     .then(res => {
  //            this.tableData=res.data;
  //     });
  //     this.name=this.tableData.name;
  // }
}
</script>

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

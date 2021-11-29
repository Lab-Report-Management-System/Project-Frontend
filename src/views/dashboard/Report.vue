<template>
  <div>
    <h3 style="text-align: center;">{{ title }}</h3>
    <div style="margin: 0 10px; padding: 16px; background: #eee; border-radius: 6px;">{{ desc }}</div>
    <el-row :gutter="10">
      <!--表格-->
      <el-col :sm="21" :xs="24">
        <el-card style="margin: 10px">
          <div style=" padding: 0 5px 5px 0; text-align: right">
            <el-button v-if="year.length >= 5 && year.length<10" type="success" icon="el-icon-plus" circle size="small" @click="add" />
            <el-button v-if="year.length > 5 && year.length<=10" type="danger" icon="el-icon-minus" circle size="small" @click="remove" />
          </div>
          <el-table :data="tableData" border stripe style="width: 100%" size="mini">
            <el-table-column label="序号" width="50" align="center">
              <template slot-scope="scope">
                {{ scope.row.index }}
              </template>
            </el-table-column>
            <el-table-column label="时间（年份）" width="180" align="center">
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
            <el-table-column v-for="(item, index) in year" :key="index" :label="item" align="center">
              <template slot-scope="scope">
                <el-input v-model="scope.row[item]" />
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <!--右侧区域-->
      <el-col :sm="3" :xs="24">
        <div style="margin-top: 25vh;text-align: center;">
          <el-progress type="circle" :percentage="progress" />
          <div style="text-align: center;margin-top: 10px">完成度: {{ progress }}%</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '差值法评价互斥方案实验',
      desc: '111',
      year: ['1', '2', '3', '4', '5'],
      tableData: [
        { index: '1', name: '现金录入（差额）', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '1.1', name: '年收入（差额）', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2', name: '现金流出（差额）', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2.1', name: '投资差额', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2.2', name: '运维成本差额', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2.3', name: '人员成本差额', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '3', name: '净现金流量', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '3.1', name: '累计净现金流量', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '指标', name: '净现值NPV（10%）', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '', name: '内部收益率', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '', name: '投资收益率（年）', 1: '', 2: '', 3: '', 4: '', 5: '' }
      ],
      progress: 50
    }
  },
  methods: {
    add() {
      console.log(this.tableData)
      this.year.push(this.year.length + 1 + '')
    },
    remove() {
      this.year.pop()
    }
  }
}
</script>

<style lang="scss" scoped>
.line{
  text-align: center;
}
.labCon{
    .el-input span{
        height:1000px;
    }
}
</style>


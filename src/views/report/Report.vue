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
          <el-table :data="tableData.data" border stripe style="width: 100%" size="mini">
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
            <el-table-column v-for="(item, index) in year" :key="index" :label="index" align="center">
              <template slot-scope="scope">
                <el-input v-model="scope.row[index]" @change="handlerChange" />
              </template>
            </el-table-column>
          </el-table>
          <el-col>
            <p>净现值NPV<el-select v-model="NPVper" placeholder="0%" style="width: 8%;margin-left: 0.5cm">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
              <el-input v-model="NPVvalue" style="width: 15%;margin-left: 0.5cm" @change="handlerChange" /></p>
          </el-col>

          <el-table :data="dataResult" border stripe style="width: 45%" size="mini">
            <el-table-column width="200" align="center">
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
            <el-table-column v-for="(item, index) in dy" :key="index" width="200" align="center">
              <template slot-scope="scope">
                <el-input v-model="scope.row[item]" @change="handlerChange(scope.row[item])" />
              </template>
            </el-table-column>
          </el-table>
          <el-col style="position: relative;top: 20%;left: 60%;margin-top: -4cm;">
            <el-row>
              <el-button type="primary" plain style="z-index: 5;width:100px" @click="getChart">生成图像</el-button>
            </el-row>
            <el-row style="margin-top: 0.2cm;">
              <el-button type="primary" plain style="z-index: 5;width:100px" @click="cpIRR">计算IRR</el-button>
            </el-row>
            <el-row style="margin-top: 0.2cm;">
              <el-button type="primary" plain style="z-index: 5;width:100px" @click="cpNPV">计算NPV</el-button>
            </el-row>
            <el-row style="margin-top: 0.2cm;">
              <el-button type="primary" plain style="z-index: 5;width:150px" @click="cpTouZi">计算投资回收年</el-button>
            </el-row>
          </el-col>
          <el-col style="margin-top: 0.5cm;margin-left: 2.5cm;margin-bottom: 0.5cm">
            <el-button type="primary" plain :disabled="isActive" @click="onSubmit">提交</el-button>
            <el-button type="warning" plain :disabled="isActive" @click="onSave">暂存</el-button>
            <el-button type="info" plain @click="onCancel">取消</el-button>

          </el-col>
        </el-card>
      </el-col>
      <!--右侧区域-->
      <el-col :sm="3" :xs="24">
        <div style="margin-top: 25vh;text-align: center;">
          <el-progress type="circle" :percentage.number="Math.ceil(100*progress/(year_length*12))" />
          <div v-model.number="year_length" style="text-align: center;margin-top: 10px">完成度: {{ Math.ceil(100*progress/(year_length*12)) }}%</div>
        </div>
      </el-col>

    </el-row>
    <ve-line :data="chartData" />
  </div>
</template>

<script>
import { submitLab } from '@/api/student'
export default {
  data() {
    return {
      title: '差值法评价互斥方案实验',
      desc: '本实验需要每一位同学查阅相关资料，获取近5-10年的现金数据，并计算对应的收入差额、净现值NPV、内部收益率等。\n' +
        '请将相关数据填入以下表格中。',

      year: ['1', '2', '3', '4', '5', '6'],
      dy: ['1'],
      NPVvalue: '',
      NPVper: '',
      options: [{
        label: '6%',
        value: 0.06
      }, {
        label: '8%',
        value: 0.08
      }, {
        label: '10%',
        value: 0.1
      }, {
        label: '12%',
        value: 0.12
      }],
      tableData: { data: [
        { index: 'A', name: '方案A年现金流', 0: '-500', 1: '50', 2: '120', 3: '200', 4: '200', 5: '' },
        { index: '', name: '累计现金流', 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: 'B', name: '方案B年现金流', 0: '-800', 1: '80', 2: '250', 3: '300', 4: '300', 5: '' },
        { index: '', name: '累计现金流', 0: '', 0: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '1', name: '现金录入（差额）', 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '1.1', name: '年收入（差额）', 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2', name: '现金流出（差额）', 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2.1', name: '投资差额', 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2.2', name: '运维成本差额', 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2.3', name: '人员成本差额', 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '3', name: '净现金流量', 0: -1000, 1: -200, 2: -32, 3: 172, 4: 418, 5: 710 },
        { index: '3.1', name: '累计净现金流量', 0: 0, 1: 0, 2: 0, 3: 0, 4: -642, 5: 68 }
      ],
      state: null },
      isActive: false,
      dataResult: [
        // { index: '指标', name: '净现值NPV（10%）', 1: ''},
        { index: '', name: 'IRR内部收益率', 1: '' },
        { index: '', name: '投资收益率（年）', 1: '' }
      ],
      NPV: { name: '净现值NPV', 1: '' },
      progress: 18,
      allNum: '',
      year_length: 6,
      chartData: {
        columns: ['NPV', '百分比R'],
        rows: [
          { 'NPV': '0.02', '百分比R': 0 },
          { 'NPV': '0.04', '百分比R': 0 },
          { 'NPV': '0.06', '百分比R': 0 },
          { 'NPV': '0.08', '百分比R': 0 },
          { 'NPV': '0.10', '百分比R': 0 },
          { 'NPV': '0.12', '百分比R': 0 },
          { 'NPV': '0.14', '百分比R': 0 },
          { 'NPV': '0.16', '百分比R': 0 },
          { 'NPV': '0.18', '百分比R': 0 },
          { 'NPV': '0.20', '百分比R': 0 },
          { 'NPV': '0.22', '百分比R': 0 },
          { 'NPV': '0.24', '百分比R': 0 },
          { 'NPV': '0.26', '百分比R': 0 },
          { 'NPV': '0.28', '百分比R': 0 },
          { 'NPV': '0.30', '百分比R': 0 },
          { 'NPV': '0.32', '百分比R': 0 },
          { 'NPV': '0.34', '百分比R': 0 },
          { 'NPV': '0.36', '百分比R': 0 },
          { 'NPV': '0.38', '百分比R': 0 },
          { 'NPV': '0.40', '百分比R': 0 },
          { 'NPV': '0.42', '百分比R': 0 },
          { 'NPV': '0.44', '百分比R': 0 },
          { 'NPV': '0.46', '百分比R': 0 },
          { 'NPV': '0.48', '百分比R': 0 },
          { 'NPV': '0.50', '百分比R': 0 },
          { 'NPV': '0.52', '百分比R': 0 },
          { 'NPV': '0.54', '百分比R': 0 },
          { 'NPV': '0.56', '百分比R': 0 },
          { 'NPV': '0.58', '百分比R': 0 },
          { 'NPV': '0.60', '百分比R': 0 },
          { 'NPV': '0.62', '百分比R': 0 },
          { 'NPV': '0.64', '百分比R': 0 },
          { 'NPV': '0.66', '百分比R': 0 },
          { 'NPV': '0.68', '百分比R': 0 },
          { 'NPV': '0.70', '百分比R': 0 },
          { 'NPV': '0.72', '百分比R': 0 },
          { 'NPV': '0.74', '百分比R': 0 },
          { 'NPV': '0.76', '百分比R': 0 },
          { 'NPV': '0.78', '百分比R': 0 },
          { 'NPV': '0.80', '百分比R': 0 },
          { 'NPV': '0.82', '百分比R': 0 }
        ]
      }
    }
  },
  watch: {
    'progress': function(newVal) {
      this.fullname = newVal
    }
  },
  created() {
    getChart()
  },
  methods: {
    getChart() {
      const i = 0
      let fValue = 0.0
      const fDerivative = 0.0
      let r = 0.02
      for (let j = 0; j < this.chartData.rows.length; j++) {
        fValue = 0
        for (let k = -1; k < this.year.length - 1; k++) {
          // console.log(this.tableData.data[6][k+1])
          // console.log(this.chartData.rows[k].百分比R)
          fValue = fValue + (this.tableData.data[10][k + 1] / (Math.pow(1.0 + r, k + 1)))
          // console.log(fValue)
          // fDerivative += -k * this.tableData.data[6][k+1] / Math.pow(1.0 + x0, k + 1);
        }
        this.chartData.rows[j].百分比R = fValue
        r = r + 0.02
      }
    },
    add() {
      // this.progress++;
      console.log(this.tableData)
      this.year.push(this.year.length + 1 + '')
      this.year_length++
    },
    remove() {
      this.year.pop()
    },
    onSubmit() {
      console.log('yes')
      // const params = this.tableData
      //  1 for submit
      this.tableData.state = 1
      // params['state'] = 1
      // console.log(params)
      submitLab(this.tableData).then(res => {
        console.log(res)
        this.$message('提交成功!')
      })
    },
    onSave() {
      console.log('yes')
      const params = this.tableData
      //  0 for save
      params['state'] = 0
      submitLab(params)
      this.$message('暂存成功!')
    },
    computeNPV() {
      const i = 0
      let fValue = 0.0
      const fDerivative = 0.0
      for (let k = -1; k < this.year.length - 1; k++) {
        // console.log(this.tableData.data[6][k+1])
        console.log((this.tableData.data[10][k + 1] / (Math.pow(1.0 + this.NPVper, k + 1))))
        fValue = fValue + (this.tableData.data[10][k + 1] / (Math.pow(1.0 + this.NPVper, k + 1)))
        // console.log(fValue)
        // fDerivative += -k * this.tableData.data[6][k+1] / Math.pow(1.0 + x0, k + 1);
      }
      return Math.round(fValue)
    },
    computeIRR() {
      const maxIterationCount = 20
      const absoluteAccuracy = 1.0E-007
      let x0 = 0.1
      let i = 0
      while (i < maxIterationCount) {
        let fValue = 0.0
        let fDerivative = 0.0
        for (let k = -1; k < this.year.length - 1; k++) {
          fValue += this.tableData.data[10][k + 1] / Math.pow(1.0 + x0, k + 1)
          fDerivative += -(k + 1) * this.tableData.data[10][k + 1] / Math.pow(1.0 + x0, k + 2)
        }
        const x1 = x0 - fValue / fDerivative
        if (Math.abs(x1 - x0) <= absoluteAccuracy) {
          return x1
        }
        x0 = x1
        i++
      }
      return x0
    },
    cpIRR() {
      const a = this.computeIRR()
      this.dataResult[0][1] = Math.round(a * 10000) / 100
      this.dataResult[0][1] = this.dataResult[0][1].toString() + '%'
      console.log(a)
    },
    cpNPV() {
      const a = this.computeNPV()
      this.NPVvalue = a
      // console.log(a)
    },
    onCancel() {
      // console.log(this.NPVper)
      this.$router.push({ path: '/dashboard' })
    },
    cpTouZi() {
      let num = 0
      for (let k = 0; k < this.year.length; k++) {
        if (this.tableData.data[11][k + 1] > 0) {
          num = k
          break
        }

        // this.dataResult[1][1] = 4.90
      }
      this.dataResult[1][1] = Math.round((num + Math.abs(this.tableData.data[11][num] / this.tableData.data[10][num + 1])) * 100) / 100
    },
    handlerChange(x) {
      if (x != '') {
        this.progress++
      }
      if (x == '') {
        this.progress--
      }
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

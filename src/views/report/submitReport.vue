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
                <el-input v-model="scope.row[item]" @change="handlerChange" />
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
              <el-input v-model="NPVvalue" style="width: 15%;margin-left: 0.5cm" @change="handleChangeNPV" /></p>
          </el-col>

          <el-table :data="dataResult" border stripe style="width: 45%" size="mini" >
            <el-table-column width="200" align="center">
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
            <el-table-column v-for="(item, index) in dy" :key="index" width="200" align="center">
              <template slot-scope="scope">
                <el-input v-model="scope.row[item]" @change="handleDataResultChange" />
              </template>
            </el-table-column>
          </el-table>
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
  </div>
</template>

<script>
import { submitLab } from '@/api/student'
import { getReportDetails } from '@/api/report'
import { getReportState } from '@/api/student'

export default {
  data() {
    return {
      labId: 1,
      title: '差值法评价互斥方案实验',
      desc: '本实验需要每一位同学查阅相关资料，获取近5-10年的现金数据，并计算对应的收入差额、净现值NPV、内部收益率等。\n' +
        '请将相关数据填入以下表格中。',
      // year: ['1', '2', '3', '4', '5', '6','7'],
      year: [],
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
      ]
      },
      isActive: false,
      dataResult: [
        // { index: '指标', name: '净现值NPV（10%）', 1: ''},
        { index: '', name: 'IRR内部收益率', 1: '' },
        { index: '', name: '投资收益率（年）', 1: '' }
      ],
      NPV: { name: '净现值NPV', 1: '' },
      progress: 72,
      allNum: '',
      year_length: 6,
      state: null,
      canSubmit: true
    }
  },
  watch: {
    'progress': function(newVal) {
      this.fullname = newVal
    }
  },
  created() {
    getReportState({ 'labId': 1 }).then(res => {
      const { state } = res
      console.log('yessss')
      console.log(state)
      if (state == 2) {
        getReportDetails().then(res => {
          console.log(res)
          const { tableData, dataResult, NPVper, NPV, comments, ratings } = res
          this.tableData = tableData
          console.log('test')
          const tmp = Object.keys(tableData.data[10])
          console.log(tmp.length)
          console.log(tableData.data[10])
          for (let ii = 1; ii < tmp.length - 2; ii++) {
            this.year.push(ii)
          }
          // this.dataResult[0]['2'] = dataResult[0]['1']
          // this.dataResult[1]['2'] = dataResult[1]['1']
          this.dataResult = dataResult
          console.log(NPV)
          this.NPVper = NPVper
          this.NPV = NPV
          this.NPVvalue = this.NPV[1]
          console.log('yes')
          console.log(this.year_length)
          this.year_length = this.tableData[0].length - 1
          console.log(this.year_length)
          // this.comments = comments
          // this.ratings = ratings
        })
      }
    })
    // this.isActive = this.$route.query.state === 1
  },
  methods: {
    handleDataResultChange() {
      const percent = parseFloat(this.dataResult[0]['1'])
      if ((percent <= 0) || (percent > 100) || (isNaN(percent))) {
        this.$message.error('IRR内部收益率必须是一个正百分数')
        this.canSubmit = false
        this.dataResult[0]['1'] = ''
      } else {
        this.canSubmit = true
        this.dataResult[0]['1'] = percent.toFixed(2)
      }
      const year = parseInt(this.dataResult[1]['1'])
      if ((year <= 0) || (isNaN(year))) {
        this.$message.error('投资收益率必须是一个正整数')
        this.canSubmit = false
        this.dataResult[1]['1'] = ''
      } else {
        this.canSubmit = true
        this.dataResult[1]['1'] = year
      }
    },
    handleChangeNPV() {
      const value = parseFloat(this.NPVvalue)
      if ((value <= 0) || (isNaN(value))) {
        this.$message.error('净现值NPV必须是一个正数')
        this.canSubmit = false
        this.NPVvalue = ''
      } else {
        this.canSubmit = true
        this.NPVvalue = value
      }
    },
    add() {
      // this.progress++;
      // console.log(this.tableData)
      this.year.push(this.year.length + 1 + '')
      this.year_length++
    },
    remove() {
      const i = this.year.pop()
      console.log(i)
      delete this.tableData.data[10][i]
      // this.tableData.data[10].pop()
      console.log('this.tableData.data[10]')
      console.log(this.tableData.data[10])
    },
    onSubmit() {
      if (!this.canSubmit) {
        this.$message.error('请输入所有的参数')
        return
      }
      // console.log('yes')
      this.state = 1
      submitLab({ 'labId': this.labId, 'year_length': this.year_length, 'tableData': this.tableData, 'NPVper': this.NPVper, 'NPV': this.NPV, 'dataResult': this.dataResult, 'state': this.state }).then(res => {
        // console.log(res)
        this.$message('提交成功!')
      })
      this.$router.push({ path: '/lab/stuLabManage' })
    },
    onSave() {
      if (!this.canSubmit) {
        this.$message.error('请输入所有的参数')
        return
      }
      console.log('???wtf')
      this.NPV[1] = this.NPVvalue
      console.log(this.NPV)
      this.state = 2
      submitLab({ 'labId': this.labId, 'year_length': this.year_length, 'tableData': this.tableData, 'NPVper': this.NPVper, 'NPV': this.NPV, 'dataResult': this.dataResult, 'state': this.state }).then(res => {
        // console.log(res)
        // TODO 不一定成功
        this.$message('暂存成功!')
      })
      this.$router.push({ path: '/lab/stuLabManage' })
    },
    onCancel() {
      // console.log(this.NPVper)
      this.$router.push({ path: '/lab/stuLabManage' })
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

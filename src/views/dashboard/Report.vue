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
                <el-input v-model="scope.row[item]" @change="handlerChange"/>
              </template>
            </el-table-column>
          </el-table>
          <el-col>
            <p>净现值NPV<el-select v-model="NPVper" placeholder="0%" style="width: 8%;margin-left: 0.5cm">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input v-model="NPVvalue" @change="handlerChange" style="width: 15%;margin-left: 0.5cm"/></p>
          </el-col>

          <el-table :data="dataResult" border stripe style="width: 100%" size="mini">
              <el-table-column width="200" align="center">
                <template slot-scope="scope">
                  {{ scope.row.name }}
                </template>
              </el-table-column>
              <el-table-column v-for="(item, index) in dy" :key="index" width="200" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row[item]" @change="handlerChange(scope.row[item])"/>
                </template>
              </el-table-column>

          </el-table>
          <el-col style="margin-top: 0.5cm;margin-left: 2.5cm;margin-bottom: 0.5cm">
            <el-button type="primary" plain :disabled="isActive" @click="onSubmit">提交</el-button>
            <el-button type="warning" plain @click="onSave" :disabled="isActive">暂存</el-button>
            <el-button type="info" plain @click="onCancel">取消</el-button>
            <el-button type="primary" plain @click="cpIRR">计算IRR</el-button>
            <el-button type="primary" plain @click="cpNPV">计算NPV</el-button>
            <!-- <el-button type="primary" plain @click="cpIRR">计算回收年</el-button> -->
          </el-col>
        </el-card>
      </el-col>
      <!--右侧区域-->
      <el-col :sm="3" :xs="24">
        <div style="margin-top: 25vh;text-align: center;">
          <el-progress type="circle" :percentage.number="Math.ceil(100*progress/(year_length*8))" />
          <div style="text-align: center;margin-top: 10px" v-model.number="year_length">完成度: {{ Math.ceil(100*progress/(year_length*8))}}%</div>
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
      desc: '软件工程经济学实验',
      year: ['1', '2', '3', '4', '5'],
      dy:['1'],
      NPVvalue:"",
      NPVper:"",
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
      tableData: [
        { index: '1', name: '现金录入（差额）', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '1.1', name: '年收入（差额）', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2', name: '现金流出（差额）', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2.1', name: '投资差额', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2.2', name: '运维成本差额', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '2.3', name: '人员成本差额', 1: '', 2: '', 3: '', 4: '', 5: '' },
        { index: '3', name: '净现金流量', 1: -1000, 2: -200, 3: -32, 4: 172, 5: 418 },
        { index: '3.1', name: '累计净现金流量', 1: '', 2: '', 3: '', 4: '', 5: '' }
      ],
      isActive: false,
      dataResult:[
        // { index: '指标', name: '净现值NPV（10%）', 1: ''},
        { index: '', name: 'IRR内部收益率', 1: ''},
        { index: '', name: '投资收益率（年）', 1: ''}
      ],
      NPV:{ name: '净现值NPV', 1: ''},
      progress: 5,
      allNum:"",
      year_length:5
    }
  },
  watch: {
            'progress': function(newVal){
                this.fullname = newVal
            }
        },
  methods: {
    add() {
      // this.progress++;
      console.log(this.tableData)
      this.year.push(this.year.length + 1 + '')
      this.year_length++;
    },
    remove() {
      this.year.pop()
    },
    onSubmit() {
      const parms = { stuNumber: this.$route.query.stuNumber, labID: this.$route.query.labID, labName: this.labForm.labName,
        labAim: this.labForm.labAim,
        labEquip: this.labForm.labEquip,
        labPrin: this.labForm.labPrin,
        labStep: this.labForm.labStep,
        labPhe: this.labForm.labPhe,
        labConclu: this.labForm.labConclu,
        isActive: true }
      console.log('yes')
      submitLab(parms).then(res => {
        console.log(res)
      })
      this.$message('提交成功!')
    },
    onSave() {
      const parms = { stuNumber: this.stuNumber, labID: this.labForm.labID, labName: this.labForm.labName,
        labAim: this.labForm.labAim,
        labEquip: this.labForm.labEquip,
        labPrin: this.labForm.labPrin,
        labStep: this.labForm.labStep,
        labPhe: this.labForm.labPhe,
        labConclu: this.labForm.labConclu,
        isActive: false }

      console.log('yes')
      console.log(parms)
      submitLab(parms)
      this.$message('暂存成功!')
    },
    computeNPV(){
        let i = 0;
        let fValue = 0.0;
        let fDerivative = 0.0;
        for (let k = 0; k < this.year.length; k++) {
            // console.log(this.tableData[6][k+1])
            console.log((this.tableData[6][k+1] / (Math.pow(1.0 + this.NPVper, k))))

            fValue = fValue+(this.tableData[6][k+1] / (Math.pow(1.0 + this.NPVper, k)));

            // console.log(fValue)
            // fDerivative += -k * this.tableData[6][k+1] / Math.pow(1.0 + x0, k + 1);
        }

        return Math.round(fValue);
    },
    computeIRR(){
        let maxIterationCount = 20;
        let absoluteAccuracy = 1.0E-007;
        let x0 = 0.1;
        let i = 0;
        while (i < maxIterationCount) {
            let fValue = 0.0;
            let fDerivative = 0.0;
            for (let k = 0; k < this.year.length; k++) {
                fValue += this.tableData[6][k+1] / Math.pow(1.0 + x0, k);
                fDerivative += -k * this.tableData[6][k+1] / Math.pow(1.0 + x0, k + 1);
            }
            let x1 = x0 - fValue / fDerivative;
            if (Math.abs(x1 - x0) <= absoluteAccuracy) {
                return x1;
            }
            x0 = x1;
            i++;
        }
        return x0;
    },
    cpIRR() {
      let a=this.computeIRR();
      this.dataResult[0][1]=Math.round(a*10000)/100;
      this.dataResult[0][1]=this.dataResult[0][1].toString()+"%";
      console.log(a)
    },
    cpNPV() {
      let a=this.computeNPV();
      this.NPVvalue=a;
      // console.log(a)
    },
    onCancel() {
      // console.log(this.NPVper)
      this.$router.push({ path: '/dashboard' })
    },
    handlerChange(x){
      if(x!=""){
        this.progress++;
      }
      if(x==""){
        this.progress--;
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

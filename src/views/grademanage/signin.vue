 <template>
   <div>
     <div style="position: relative;left: 20%;top: 10%;width: 80%;">
       <div class="addInfo">
         <div style="position: absolute;background-color: #55aaff; opacity: 0.1;width: 700px;height: 150px;border-radius: 25px;z-index: 0;"></div>
         <div style="margin-left: 1cm;z-index: 5;">
           <el-row style="display: inline-block;margin-top: 0.5cm;">
           <p style="">学号:</p>
             <el-input
               placeholder="请输入内容"
               prefix-icon="el-icon-search"
               style="width: 85%;"
               v-model="inputStuNumber">
             </el-input>
             </el-row>
            <el-row style="display: inline-block;margin-top: 0.5cm;">
              <p>姓名:</p>
              <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                 style="width: 85%;"
                v-model="inputName">
              </el-input>
            </el-row>
            <el-row style="display: inline-block;">
                        <el-button type="primary" plain style="width: 150px;" @click="addSign()">补签</el-button>
            </el-row>
         </div>
       </div>
       <div style="margin-top: 2cm;">
         <el-table
           :data="tableData"
          :row-class-name="tableRowClassName"
           style="width: 70%">
           <el-table-column
             label="学号"
             width="180">
             <template slot-scope="scope">
               <i class="el-icon-reading"></i>
               <span style="margin-left: 10px">{{ scope.row.stuNumber }}</span>
             </template>
           </el-table-column>
           <el-table-column
             label="姓名"
             width="180">
             <template slot-scope="scope">
               <i class="el-icon-user"></i>
               <span style="margin-left: 10px">{{ scope.row.name }}</span>
             </template>
           </el-table-column>
           <el-table-column
             label="课程名称"
             width="360">
             <template slot-scope="scope">
               <i class="el-icon-notebook-2"></i>
               <!-- <span style="margin-left: 10px">{{ scope.row.courseName }}</span> -->
               <el-tag size="medium">{{ scope.row.courseName }}</el-tag>
             </template>
           </el-table-column>
           <el-table-column label="签到    |    未签到">
             <template slot-scope="scope">
               <!-- <el-button
                 size="mini"
                 type="danger"
                 style="opacity: 0.9;"
                 @click="del(scope.$index)">删 除</el-button> -->
                <el-button type="success" icon="el-icon-check" circle :disabled="isSelect[scope.$index]" @click="signyes(scope.$index)"></el-button>
                <el-button type="primary" icon="el-icon-edit" circle :disabled="isSelect[scope.$index]" @click="signno(scope.$index)"></el-button>

             </template>
           </el-table-column>
         </el-table>
       </div>
     </div>
   </div>
 </template>

 <script>
   import {getStudentList} from '../../api/student'
   import {checkinStudent} from '../../api/teacher'
   export default {
     props:{
     },
     data() {
       return {
         isSelect:[...Array(10)].map(()=>false),
         inputStuNumber:'',
         inputName:'',
         tableData: [{
           stuNumber: '1950001',
           name: '小叶',
           courseName: '软件工程经济学'
         }, {
           stuNumber: '1950002',
           name: '小王',
           courseName: '软件工程经济学'
         }, {
           stuNumber: '1950003',
           name: '小周',
           courseName: '软件工程经济学'
         }, {
           stuNumber: '1950004',
           name: '小尚',
           courseName: '软件工程经济学'
         },{
           stuNumber: '1950005',
           name: '小吴',
           courseName: '软件工程经济学'
         }, {
           stuNumber: '1950004',
           name: '小尚',
           courseName: '软件工程经济学'
         },{
           stuNumber: '1950005',
           name: '小吴',
           courseName: '软件工程经济学'
         }
         ],
         newObj: {
           stuNumber: '',
           name: '',
           courseName: ''
           },
         editIndex: null,// 保存正在编辑的对象的索引，注意这里的初始值不能为0及0以上的数
        rowID:""
       }
     },
     created() {
       let courseId = 42014603
       getStudentList({courseId}).then(res=>{
         console.log(res)
         let length=res.data.tableData.length
         for(let i=0;i<length;i++){
           this.tableData.push(res.data.tableData[i])
         }

         })
     },
     watch: {
       'progress': function(newVal) {
         this.fullname = newVal
       }
     },
     methods: {
       signyes(index){
         // console.log("yes")
         // this.isSelect[index]=false;
         // console.log(this.isSelect[index])
         //  this.$nextTick(() => {
         //      this.$set(this.isSelect,index,true)
         //      // this.isSelect[index]=true;
         //      this.$forceUpdate();
         //      console.log(this.isSelect)
         //  })
         let studentId = parseInt(this.tableData[index].stuNumber)
        checkinStudent({studentId}).then(res=>{
          console.log(res)
        })
          // console.log(this.isSelect[index])
          // this.$forceUpdate();
       },
       signno(index){
         // console.log(this.isSelect[index])
          // this.$set(this.isSelect,index,true)
          // console.log(this.isSelect)
          // this.$forceUpdate();
       },
       tableRowClassName({ row, rowIndex }) {
         this.rowID = rowIndex
         // console.log(this.rowID)
         if (this.rowID%2  ==0) {
           return 'info-row'
         }
         if (this.rowID%2  == 1) {
           return 'success-row'
         }
         return ''
       },
      addSign(){
        let studentId = this.inputStuNumber
        checkinStudent({studentId}).then(res=>{
          console.log(res)
      })},
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

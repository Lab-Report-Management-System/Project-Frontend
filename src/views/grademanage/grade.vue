 <template>
   <div>

       <div style="margin-top: 2cm;margin-left: 2cm;">
         <el-table
           :data="tableData"
          :row-class-name="tableRowClassName"
           style="width: 95%">
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
           <el-table-column label="签到次数    |    签到成绩">
             <template slot-scope="scope">
               <!-- <el-button
                 size="mini"
                 type="danger"
                 style="opacity: 0.9;"
                 @click="del(scope.$index)">删 除</el-button> -->
                <el-tag>{{scope.row.signNum}}</el-tag>
                <el-input
                  v-model="scope.row.signGrade"
                  style="width: 90px;margin-left: 5px">
                </el-input>

             </template>
           </el-table-column>
           <el-table-column label="报告总分    |    报告成绩">
             <template slot-scope="scope">
               <!-- <el-button
                 size="mini"
                 type="danger"
                 style="opacity: 0.9;"
                 @click="del(scope.$index)">删 除</el-button> -->
                <el-tag>{{scope.row.reportNum}}</el-tag>
                <el-input
                  v-model="scope.row.reportGrade"
                  style="width: 90px;margin-left: 5px">
                </el-input>


             </template>
           </el-table-column>
           <el-table-column label="对战总分    |    对战成绩">
             <template slot-scope="scope">
               <!-- <el-button
                 size="mini"
                 type="danger"
                 style="opacity: 0.9;"
                 @click="del(scope.$index)">删 除</el-button> -->
                <el-tag>{{scope.row.battleNum}}</el-tag>
                <el-input
                  v-model="scope.row.battleGrade"
                  style="width: 90px;margin-left: 5px">
                </el-input>

             </template>
           </el-table-column>
         </el-table>

       </div>
        <el-button type="primary" style="margin-top: 2cm;margin-left: 20cm;margin-bottom: 2cm;">确认提交</el-button>
        <el-button type="info">取消</el-button>
     </div>
   </div>
 </template>

 <script>
   import {addStudent} from '../../api/student'
   import {getStudentList} from '../../api/student'
   export default {
     props:{

     },
     data() {
       return {
         isSelect:[...Array(20)].map(()=>false),
         inputStuNumber:'',
         inputName:'',
         input:'',
         tableData: [{
           stuNumber: '1950001',
           name: '小叶',
           courseName: '软件工程经济学',
           signNum:100,
           signGrade:100,
           reportNum:100,
           battleNum:100,
           reportGrade:100,
           battleGrade:100,

         }, {
           stuNumber: '1950002',
           name: '小王',
           courseName: '软件工程经济学',
           signNum:100,
           signGrade:100,
           reportNum:100,
           battleNum:100,
           reportGrade:100,
           battleGrade:100,
         }, {
           stuNumber: '1950003',
           name: '小周',
           courseName: '软件工程经济学',
           signNum:100,
           signGrade:100,
           reportNum:100,
           battleNum:100,
           reportGrade:100,
           battleGrade:100,
         }, {
           stuNumber: '1950004',
           name: '小尚',
           courseName: '软件工程经济学',
           signNum:100,
           signGrade:100,
           reportNum:100,
           battleNum:100,
           reportGrade:100,
           battleGrade:100,
         },{
           stuNumber: '1950005',
           name: '小吴',
           courseName: '软件工程经济学',
           signNum:100,
           signGrade:100,
           reportNum:100,
           battleNum:100,
           reportGrade:100,
           battleGrade:100,
         }, {
           stuNumber: '1950004',
           name: '小尚',
           courseName: '软件工程经济学',
           signNum:100,
           signGrade:100,
           reportNum:100,
           battleNum:100,
           reportGrade:100,
           battleGrade:100,
         },{
           stuNumber: '1950005',
           name: '小吴',
           courseName: '软件工程经济学',
           signNum:100,
           signGrade:100,
           reportNum:100,
           battleNum:100,
           reportGrade:100,
           battleGrade:100,
         }
         ],
         newObj: {
           stuNumber: '',
           name: '',
           courseName: '',
           signNum:100,
           signGrade:100,
           reportNum:100,
           battleNum:100,
           reportGrade:100,
           battleGrade:100,
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
     methods: {
       signyes(index){
         console.log("yes")
         console.log(this.isSelect[index])
         console.log(index)
         // this.isSelect[index]=1
          this.$set(this.isSelect,index,!this.isSelect[index])
          console.log(this.isSelect[index])
       },
       signno(index){
          this.$set(this.isSelect,index,true)
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

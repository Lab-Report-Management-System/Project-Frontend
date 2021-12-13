<!-- <template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text"
             v-model.trim="newObj.name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number"
             v-model.number="newObj.age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="newObj.sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addOrEditFn">添加/修改</button>
    </div>
    <div>
      <table border="1"
             cellpadding="10"
             cellspacing="0"
             v-show="dataArr.length > 0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(obj, index) in dataArr"
            :key="index">
          <td>{{index + 1}}</td>
          <td>{{obj.name}}</td>
          <td>{{obj.aeg}}</td>
          <td>{{obj.sex}}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // username: '',
      // userage: 0,
      // gender: '',
      newObj: {
        name: '',
        age: 0,
        sex: ''
        },
      editIndex: null, // 保存正在编辑的对象的索引，注意这里的初始值不能为0及0以上的数
      dataArr: [
        {
          name: 'zs',
          age: 18,
          sex: '男'
        },
        {
          name: 'Jone',
          age: 21,
          sex: '女'
        }
      ]
    }
  },
  methods: {
    // 添加/修改 点击事件的方法
    addOrEditFn () {
      // 注意：对象是引用关系，所以必须让数组里的对象和newObj脱离引用关系，因为这里只有一层，于是我们可以利用浅拷贝实现
      let theObj = {...this.newObj}
      // let newObj = {
      //   name: this.username,
      //   age: this.userage,
      //   sex: this.gender
      // }

      if (this.editIndex !== null) {
        this.$set(this.dataArr, this.editIndex, theObj)

        this.editIndex = null // 更新后，保证下次点击是新增效果
      } else { // 新增
        this.dataArr.push(theObj)
      }
    },
    // 实现删除功能
    del (index) {
      this.dataArr.splice(index, 1)
    },
    // 实现编辑功能
    edit (index) {
      // 取出要编辑的对象信息
      const editObj = this.dataArr[index]
      // this.username = editObj.name
      // this.userage = editObj.age
      // this.gender = editObj.sex
      //优化
      this.newObj = {...editObj}

      this.editIndex = index // 保存当前的索引值
    }
  }
}
</script>
 -->
   <!-- <template>
     <div style="position: absolute;left: 20%;top: 10%;width: 80%;">
       <el-table
         :data="tableData"
         style="width: 80%">
         <el-table-column
           prop="stuNumber"
           label="学号"
           width="180">
         </el-table-column>
         <el-table-column
           prop="name"
           label="姓名"
           width="180">
         </el-table-column>
         <el-table-column
           prop="courseName"
           label="课程名称"
           width="350">
         </el-table-column>
         <el-table-column
           width="150">
           <el-button @click="del(index)">删除</el-button>
         </el-table-column>
         <el-table-column
           width="150">
           <el-button @click="edit(index)">编辑</el-button>
         </el-table-column>
       </el-table>
     </div>
   </template>

   <script>
     export default {
       data() {
         return {
           tableData: [{
             stuNumber: '1950001',
             name: '王小虎',
             courseName: '软件工程经济学'
           }, {
             stuNumber: '1950002',
             name: '王小虎',
             courseName: '软件工程经济学'
           }, {
             stuNumber: '1950003',
             name: '王小虎',
             courseName: '软件工程经济学'
           }, {
             stuNumber: '1950004',
             name: '王小虎',
             courseName: '软件工程经济学'
           },{
             stuNumber: '1950005',
             name: '王小虎',
             courseName: '软件工程经济学'
           }
           ],
           newObj: {
             stuNumber: '',
             name: '',
             courseName: ''
             },
           editIndex: null, // 保存正在编辑的对象的索引，注意这里的初始值不能为0及0以上的数
         }
       },
       methods: {
         // 添加/修改 点击事件的方法
         addOrEditFn () {
           // 注意：对象是引用关系，所以必须让数组里的对象和newObj脱离引用关系，因为这里只有一层，于是我们可以利用浅拷贝实现
           let theObj = {...this.newObj}
           // let newObj = {
           //   name: this.username,
           //   age: this.userage,
           //   sex: this.gender
           // }

           if (this.editIndex !== null) {
             this.$set(this.dataArr, this.editIndex, theObj)

             this.editIndex = null // 更新后，保证下次点击是新增效果
           } else { // 新增
             this.dataArr.push(theObj)
           }
         },
         // 实现删除功能
         del (index) {
           this.dataArr.splice(index, 1)
         },
         // 实现编辑功能
         edit (index) {
           // 取出要编辑的对象信息
           const editObj = this.dataArr[index]
           // this.username = editObj.name
           // this.userage = editObj.age
           // this.gender = editObj.sex
           //优化
           this.newObj = {...editObj}

           this.editIndex = index // 保存当前的索引值
         }
      }
     }
   </script>
 -->
 <template>
   <div style="position: absolute;left: 20%;top: 10%;width: 80%;">
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
                      <el-button type="primary" plain style="width: 150px;" @click="addOrEditFn()">添加</el-button>
          </el-row>

       </div>

     </div>
     <div style="margin-top: 2cm;">
       <el-table
         :data="tableData"
         style="width: 100%">
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
         <el-table-column label="操作">
           <template slot-scope="scope">
             <el-button
               size="mini"
               type="danger"
               style="opacity: 0.9;"
               @click="del(scope.$index)">删 除</el-button>
           </template>
         </el-table-column>
       </el-table>
     </div>

   </div>
 </template>

 <script>
   export default {
     data() {
       return {
         inputStuNumber:'',
         inputName:'',
         tableData: [{
           stuNumber: '1950001',
           name: '王小虎',
           courseName: '软件工程经济学'
         }, {
           stuNumber: '1950002',
           name: '王小虎',
           courseName: '软件工程经济学'
         }, {
           stuNumber: '1950003',
           name: '王小虎',
           courseName: '软件工程经济学'
         }, {
           stuNumber: '1950004',
           name: '王小虎',
           courseName: '软件工程经济学'
         },{
           stuNumber: '1950005',
           name: '王小虎',
           courseName: '软件工程经济学'
         }
         ],
         newObj: {
           stuNumber: '',
           name: '',
           courseName: ''
           },
         editIndex: null// 保存正在编辑的对象的索引，注意这里的初始值不能为0及0以上的数
       }
     },
     methods: {
       // 添加/修改 点击事件的方法
       addOrEditFn () {
         // 注意：对象是引用关系，所以必须让数组里的对象和newObj脱离引用关系，因为这里只有一层，于是我们可以利用浅拷贝实现
         // let theObj = {...this.newObj}
         let newObj = {
           stuNumber: this.inputStuNumber,
           name: this.inputName,
           courseName: '软件工程经济学'
         }

         if (this.editIndex !== null) {
           this.$set(this.tableData, this.editIndex, theObj)

           this.editIndex = null // 更新后，保证下次点击是新增效果
         } else { // 新增
           this.tableData.push(newObj)
           console.log("yes")
         }
       },
       // 实现删除功能
       del (index) {
         this.tableData.splice(index, 1)
       },
       // 实现编辑功能
       edit (index) {
         // 取出要编辑的对象信息
         const editObj = this.tableData[index]
         // this.username = editObj.name
         // this.userage = editObj.age
         // this.gender = editObj.sex
         //优化
         this.newObj = {...editObj}

         this.editIndex = index // 保存当前的索引值
       }
     }
   }
 </script>

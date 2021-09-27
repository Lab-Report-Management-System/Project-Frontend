<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" prop="id" width="95">

      </el-table-column>
      <el-table-column label="Title" prop="title" width="200">

      </el-table-column>
      <el-table-column label="Data" width="210" prop="data" align="center">
<!--        <template slot-scope="scope">-->
<!--          <span>{{ scope.row.author }}</span>-->
<!--        </template>-->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { getList } from '@/api/table'
import { getForm } from '@/api/test'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // console.log('before fetch')
      this.listLoading = true
      // getList().then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })
      getForm().then(response => {
        this.list = response
        console.log(response)
        this.listLoading = false
      })
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <!--<h4 class="title">Custom table with pagination</h4>-->
      <p class="category">
        角色不同，权限不同。
      </p>
    </div>
    <div class="col-md-12 card">
      <!--<div class="card-header">-->
        <!--<div class="category">Extended tables</div>-->
      <!--</div>-->
      <div class="card-content row">
        <div class="col-sm-6">
          <div class="pull-left">
            <label>
              <input type="search" class="form-control input-sm" placeholder="Search records" v-model="searchQuery" aria-controls="datatables">
            </label>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="pull-right">
            <button class="btn btn-icon btn-twitter" @click="showAddDialog = true">
              <i class="ti-plus"></i>
            </button>
          </div>
        </div>
        <div class="col-sm-12">
          <el-table class="table-striped"
                    :data="queriedData"
                    border
                    style="width: 100%">
            <el-table-column v-for="column in tableColumns"
                             :key="column.label"
                             :min-width="column.minWidth"
                             :prop="column.prop"
                             :label="column.label">
            </el-table-column>
            <el-table-column
              :min-width="120"
              fixed="right"
              label="Actions">
              <template slot-scope="props">
                <a class="btn btn-simple btn-xs btn-info btn-icon like" @click="handleLike(props.$index, props.row)"><i class="ti-heart"></i></a>
                <a class="btn btn-simple btn-xs btn-warning btn-icon edit" @click="handleEdit(props.$index, props.row)"><i class="ti-pencil-alt"></i></a>
                <a class="btn btn-simple btn-xs btn-danger btn-icon remove"  @click="handleDelete(props.$index, props.row)"><i class="ti-close"></i></a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="col-sm-6 pagination-info">
          <p class="category">Showing {{from + 1}} to {{to}} of {{total}} entries</p>
        </div>
        <div class="col-sm-6">
          <p-pagination class="pull-right"
                        v-model="pagination.currentPage"
                        :per-page="pagination.perPage"
                        :total="pagination.total">
          </p-pagination>
        </div>
      </div>
    </div>
    <!--添加弹出框-->
    <AddDialog :showDialog="showAddDialog" :closeDialog="closeAddDialog" :openDialog="openAddDialog" :submit="addSubmit" :model="model" :modelValidations="modelValidations" width="30%" :fullscreen="true"/>

  </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn, Select, Option} from 'element-ui'
  import PPagination from '@/components/UIComponents/Pagination.vue'
  import AddDialog from '@/components/Dialog/addDialog'
  import users from './users'
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Select)
  Vue.use(Option)
  export default{
    components: {
      PPagination,
      AddDialog
    },
    computed: {
      pagedData () {
        return this.tableData.slice(this.from, this.to)
      },
      /***
       * Searches through table data and returns a paginated array.
       * Note that this should not be used for table with a lot of data as it might be slow!
       * Do the search and the pagination on the server and display the data retrieved from server instead.
       * @returns {computed.pagedData}
       */
      queriedData () {
        if (!this.searchQuery) {
          this.pagination.total = this.tableData.length
          return this.pagedData
        }
        let result = this.tableData
          .filter((row) => {
            let isIncluded = false
            for (let key of this.propsToSearch) {
              let rowValue = row[key].toString()
              if (rowValue.includes && rowValue.includes(this.searchQuery)) {
                isIncluded = true
              }
            }
            return isIncluded
          })
        this.pagination.total = result.length
        return result.slice(this.from, this.to)
      },
      to () {
        let highBound = this.from + this.pagination.perPage
        if (this.total < highBound) {
          highBound = this.total
        }
        return highBound
      },
      from () {
        return this.pagination.perPage * (this.pagination.currentPage - 1)
      },
      total () {
        this.pagination.total = this.tableData.length
        return this.tableData.length
      }
    },
    data () {
      return {
        pagination: {
          perPage: 5,
          currentPage: 1,
          total: 0
        },
        searchQuery: '',
        propsToSearch: ['name', 'email', 'age', 'salary'], // 搜索项
        tableColumns: [
          {
            prop: 'name',
            label: 'Name',
            minWidth: 200
          },
          {
            prop: 'email',
            label: 'Email',
            minWidth: 250
          },
          {
            prop: 'age',
            label: 'Age',
            minWidth: 100
          },
          {
            prop: 'salary',
            label: 'Salary',
            minWidth: 120
          }
        ],
        tableData: users,
        showAddDialog: false,
        model: {
          name: {
            name: 'name',
            label: '姓名',
            value: '',
            type: 'text',
            placeholder: '输入您的姓名',
            after: '$'
          },
          email: {
            name: 'email',
            label: '邮箱',
            value: '',
            type: 'email',
            placeholder: '输入您的邮箱'
          },
          password: {
            name: 'password',
            label: '密码',
            value: '',
            type: 'password',
            placeholder: '输入您的密码'
          },
          desc: {
            name: 'desc',
            label: '备注',
            value: '',
            type: 'textarea',
            placeholder: '输入备注信息'
          },
          type: {
            name: 'type',
            label: '类型',
            value: 2,
            type: 'select',
            placeholder: '选择类型',
            options: [
              {
                label: '管理人员',
                value: 1
              },
              {
                label: '编辑人员',
                value: 2
              },
              {
                label: '运营人员',
                value: 3
              }
            ]
          }
        },
        modelValidations: {
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            min: 5
          },
          name: {
            required: true,
            min: 4,
            max: 10
          }
        }
      }
    },
    methods: {
      closeAddDialog () {
        this.showAddDialog = false
      },
      openAddDialog () {
        this.showAddDialog = true
      },
      addSubmit (model) {
        console.log('addSubmit', model)
      },
      handleLike (index, row) {
        alert(`Your want to like ${row.id}`)
      },
      handleEdit (index, row) {
        alert(`Your want to edit ${row.name}`)
      },
      handleDelete (index, row) {
        let vm = this
        vm.$confirm('确认删除 ?', '提示', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let indexToDelete = vm.tableData.findIndex((tableRow) => tableRow.id === row.id)
          if (indexToDelete >= 0) {
            vm.tableData.splice(indexToDelete, 1)
          }
        })
      }
    }
  }
</script>
<style>
</style>

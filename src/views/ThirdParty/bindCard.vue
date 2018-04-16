<template>
  <div class="row">
    <!--<div class="col-md-12">-->
      <!--<h4 class="title">Custom table with pagination</h4>-->
      <!--<p class="category">-->
        <!--将客户银行卡绑定到支付平台-->
      <!--</p>-->
    <!--</div>-->
    <div class="col-md-12 card">
      <div class="card-header">
        <div class="category">将客户银行卡绑定到支付平台</div>
      </div>
      <div class="card-content row">
        <div class="col-sm-6">
          <div class="pull-left">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="pull-right">
            <Upload id="bindCardExcel" extensions="xls,xlsx" :on-success="uploadSuccess" :on-progress="uploadProgress"/>
          </div>
        </div>
        <div class="col-sm-12" style="margin-top: 16px;">
          <el-table class="table-striped"
                    :data="queriedData"
                    border
                    style="width: 100%">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column v-for="column in tableColumns"
                             :key="column.label"
                             :min-width="column.minWidth"
                             :prop="column.prop"
                             :label="column.label">
            </el-table-column>
            <el-table-column
              :min-width="140"
              fixed="right"
              label="操作">
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
  import PPagination from '@/components/UIComponents/Pagination'
  import AddDialog from '@/components/Dialog/addDialog'
  import Upload from '@/components/UIComponents/Upload'
  import XLSX from 'xlsx'
  import {EXCEL_HEADER_BIND_CARD} from '@/common/common'
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Select)
  Vue.use(Option)
  export default{
    components: {
      PPagination,
      AddDialog,
      Upload
    },
    computed: {
      pagedData () {
        return this.tableData.slice(this.from, this.to)
      },
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
        propsToSearch: ['name', 'idcard', 'bankcard', 'mobile'], // 搜索项
        tableColumns: [
          {
            prop: 'branch_name',
            label: '机构',
            minWidth: 80
          },
          {
            prop: 'member_name',
            label: '操作用户',
            minWidth: 60
          },
          {
            prop: 'apply_date',
            label: '申请日期',
            minWidth: 100
          },
          {
            prop: 'excel_file',
            label: '文件下载',
            minWidth: 60
          },
          {
            prop: 'item_count',
            label: '总条数',
            minWidth: 60
          },
          {
            prop: 'fail_count',
            label: '失败条数',
            minWidth: 60
          }
        ],
        tableData: []
      }
    },
    methods: {
      uploadSuccess (file) {
        console.log('上传成功', file, file.url)
        // 添加导入记录
        this.importExcel(file)
        // 读取数据
        this.readExcelData(file.getNative())
      },
      uploadProgress (file) {

      },
      submitExcelData (list) {
        let vm = this
        vm.$store.dispatch('bindCard', { userId: 1, data: list })
        // 添加到当前列表
        vm.tableData = [...vm.tableData, ...list]
      },
      importExcel (file) {
        this.$store.dispatch('importExcel', { userId: 1, file: file })
      },
      readExcelData (f) {
        let vm = this
        let rABS = true
        console.log(f)
        let reader = new FileReader()
        reader.onload = function (e) {
          let data = e.target.result
          if (!rABS) data = new Uint8Array(data)
          let workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'})
          let worksheet = workbook.Sheets[workbook.SheetNames[0]]
          let jsonData = XLSX.utils.sheet_to_json(worksheet)
          // 组装数据
          let list = []
          if (jsonData && jsonData instanceof Array) {
            jsonData.forEach(item => {
              let row = {}
              for (let prop in item) {
                row[EXCEL_HEADER_BIND_CARD[prop]] = item[prop]
              }
              list.push(row)
            })
            console.log('list', list)
            vm.submitExcelData(list)
          }
        }
        if (rABS) reader.readAsBinaryString(f); else reader.readAsArrayBuffer(f)
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

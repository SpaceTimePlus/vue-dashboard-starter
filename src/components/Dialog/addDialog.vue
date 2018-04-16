<template>
  <el-dialog :title="title" :visible="showDialog" @close="closeDialog" @open="openDialog" modal="false" :width="width"
             :fullscreen="fullscreen" append-to-body>
    <div>
      <form class="form-horizontal">
        <div class="form-group" v-for="item in model">
          <block
            v-if="item.type === 'text' || item.type === 'email' || item.type === 'number' || item.type === 'url' || item.type === 'password'">
            <label class="col-md-3 control-label">{{item.label}}</label>
            <div class="col-md-9">

              <div class="input-group" STYLE="width: 100%">
                <span v-if="item.before" class="input-group-addon">{{item.before}}</span>
                <input :type="item.type"
                       v-validate="modelValidations[item.name]"
                       v-model="item.value"
                       :placeholder="item.placeholder"
                       class="form-control">
                <span v-if="item.after" class="input-group-addon">{{item.after}}</span>
              </div>

            </div>
          </block>

          <block v-if="item.type === 'textarea'">
            <label class="col-md-3 control-label">{{item.label}}</label>
            <div class="col-md-9">
              <textarea class="form-control"
                        v-validate="modelValidations[item.name]"
                        v-model="item.value"
                        :placeholder="item.placeholder" rows="3"></textarea>
            </div>
          </block>

          <block v-if="item.type === 'select'">
            <label class="col-md-3 control-label">{{item.label}}</label>
            <div class="col-md-9">
              <el-select class="select-default"
                         size=""
                         placeholder="Single Select"
                         style="width: 100%"
                         v-model="item.value">
                <el-option v-for="option in item.options"
                           :value="option.value"
                           :label="option.label"
                           :key="option.value">
                </el-option>
              </el-select>
            </div>
          </block>
        </div>
      </form>
    </div>
    <div slot="footer" class="dialog-footer center" style="margin-top:20px;">
      <button @click.prevent="validate" class="btn btn-fill btn-info btn-wd">确定</button>
    </div>
  </el-dialog>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {mapFields} from 'vee-validate'

  export default {
    data () {
      return {}
    },
    props: {
      title: {
        type: String,
        default: '添加'
      },
      showDialog: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: ''
      },
      fullscreen: {
        type: Boolean,
        default: false
      },
      closeDialog: {
        type: Function,
        default: function () {
        }
      },
      openDialog: {
        type: Function,
        default: function () {
        }
      },
      submit: {
        type: Function,
        default: function () {
        }
      },
      dataFormat: {
        type: String,
        default: 'value' // value: 只返回值；all: 返回所有
      },
      model: {
        type: Object,
        default: {}
      },
      modelValidations: {
        type: Object,
        default: {}
      }
    },
    computed: {
      ...mapFields(['requiredText', 'email', 'number', 'url', 'email', 'password', 'confirm']),
      ...mapGetters([])
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        let vm = this
        vm.$validator.validateAll().then(isValid => {
          console.log('isValid', isValid)
          if (isValid) {
            console.log('this.model', vm.model)
            if (vm.dataFormat === 'value') {
              let result = {}
              Object.keys(vm.model).forEach(item => {
                result[item] = vm.model[item].value
              })
              vm.submit(result)
            } else {
              vm.submit(vm.model)
            }
          }
        })
      }
    },
    components: {}
  }
</script>
<style>

</style>

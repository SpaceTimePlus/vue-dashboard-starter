<template>
  <div>
    <input type="file" :id="id" style="display:none" @change="change"/>
    <div @click="upload" style="">
      <slot name="click">
        <el-button size="small" type="success">
          批量导入
        </el-button>
      </slot>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        params: {}
      }
    },
    props: {
      id: '',
      multiple: false,
      extensions: {
        type: String,
        default: '*'
      },
      onSuccess: {
        type: Function,
        default: function (file) {
          console.log('upload url : ' + file.url)
        }
      },
      onProgress: {
        type: Function,
        default: function (file) {
          console.log('onProgress', file.percent)
        }
      },
      onError: {
        type: Function,
        default: function (err) {
          console.log('onError', err)
        }
      }
    },
    watch: {
      files: function (value) {
      }
    },
    computed: {
      ...mapGetters([])
    },
    mounted () {
      this.init()
    },
    methods: {
      upload () {
        document.getElementById(this.id).click()
      },
      change (e) {
        console.log('change', e)
      },
      aliyunSts () {
        return this.$store.dispatch('aliyunSts')
      },
      aliyunSignatrue () {
        return this.$store.dispatch('aliyunSignatrue')
      },
      set_upload_param (up, filename) {
        // 设置上传参数，并启动上传
        let vm = this
        let key = vm.params.dir + '/' + filename
        let multipartParams = {
          'key': key,
          'policy': vm.params.policy,
          'OSSAccessKeyId': vm.params.accessId,
          'success_action_status': '200',
          'signature': vm.params.signature
        }
        up.setOption({
          'url': vm.params.host,
          'multipart_params': multipartParams
        })
        up.start()
      },
      async init () {
        let vm = this

        let uploader = new plupload.Uploader({
          runtimes: 'html5,flash,silverlight,html4',
          browse_button: vm.id,
          multi_selection: vm.multiple,
          // container: document.getElementById('upload'),
          flash_swf_url: 'http://static.weiwuu.com/js/plupload/moxie.swf',
          silverlight_xap_url: 'http://static.weiwuu.com/js/plupload/moxie.xap',
          url: 'http://oss.aliyuncs.com',
          filters: {
            mime_types: [
              {title: 'files extensions', extensions: vm.extensions}
            ],
            max_file_size: '10mb',
            prevent_duplicates: true
          },
          init: {
            PostInit: async function () {
              // 初始化
              // 获取签名信息
              let aliyunSignatrue = await vm.aliyunSignatrue()
              vm.params = aliyunSignatrue
            },
            FilesAdded: function (up, files) {
              console.log(up, files)
              plupload.each(files, function (file) {
                vm.set_upload_param(uploader, file.id, false)
                console.log('files', files[0])
              })
            },
            BeforeUpload: async function (up, file) {
              // 判断签名参数是否有效，如果失效，则重新获取
              let expire = vm.params.expire * 1000
              let now = new Date().getTime()
              if (now > expire) {
                let aliyunSignatrue = await vm.aliyunSignatrue()
                vm.params = aliyunSignatrue
              }
            },
            UploadProgress: function (up, file) {
              // 上传进度反馈
              vm.onProgress(file)
            },
            FileUploaded: function (up, file, info) {
              // 文件路径
              let url = `${vm.params.host}/${vm.params.dir}/${file.id}`
              file.url = url
              // 上传成功反馈
              vm.onSuccess(file)
            },
            UploadComplete: function (up, files) {
              // 所有文件都上传完成
              console.log('UploadComplete', files)
            },
            Error: function (up, err) {
              // 上传错误反馈
              vm.onError(err)
              let errText = ''
              if (err.code === -600) {
                errText = '文件过大'
              } else if (err.code === -601) {
                errText = '文件类型错误'
              } else if (err.code === -602) {
                errText = '重复上传文件'
              } else {
                errText = '网络异常，请稍后重试'
              }
              this.$message.error(errText)
            }
          }
        })
        uploader.init()
      }
    },
    components: {
    }
  }
</script>
<style>

</style>

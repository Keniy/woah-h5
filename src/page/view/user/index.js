import Vue from 'common/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import WoahSelect from 'components/woah-select'
import { oss, accessId, accessKey, host, bucket } from 'common/aliOss'
import { post } from 'common/http'
import Base64 from 'Base64'
import Crypto from 'crypto'

@Component({
    name: 'UserList',
    mixins: [template],
    components: {
        WoahSelect
    }
})
export default class UserList extends Vue {

    options = [{
        value: '选项1',
        label: '黄金糕'
    }, {
        value: '选项2',
        label: '双皮奶'
    }, {
        value: '选项3',
        label: '蚵仔煎'
    }, {
        value: '选项4',
        label: '龙须面'
    }, {
        value: '选项5',
        label: '北京烤鸭'
    }]
    value2 = []
    fileList = []

    created() {
        this.showMessage('from UserList')
    }

    handleClick() {
        this.loading = false
        alert(this.loading)
    }

    /**
       * @description [fnUploadRequest 覆盖默认的上传行为，实现自定义上传]
       * @param    {object}   option [上传选项]
       * @return   {null}   [没有返回]
       */
    async fnUploadRequest(option) {
        oss.ossUploadFile(option)
    }

    async fileUpload(option) {
        

        let policyText = {
            'expiration': '2020-01-01T12:00:00.000Z',
            'conditions': [
                'content-length-range', 0, 1048576000
            ]
        }
        let policy = Base64.encode(JSON.stringify(policyText))
        // let bytes = Crypto.Hmac(Crypto.)

        let formData = new FormData()
        formData.append('name', option.file.name)
        formData.append('key', 'lzcloud/sit/' + option.file.name)
        formData.append('policy', policy)
        formData.append('OSSAccessKeyId', accessId)
        formData.append('success_action_status', '200')
        formData.append('signature', accessId)
    }

    // 视频上传
    beforeUploadVideo(file) {
        //todo
    }

    // 视频上传成功后
    handleVideoSuccess(response, file, fileList) {
        //todo
    }

    // 视频添加多个视频文件事件
    beyondFile(files, fileList) {
        //todo
    }
    
}
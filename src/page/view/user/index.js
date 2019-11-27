import Vue from 'common/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import WoahSelect from 'components/woah-select'
import { oss, accessId, accessKey, host, bucket } from 'common/aliOss'
import { post } from 'common/http'
import Base64 from 'Base64'

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
    valueText = null

    tableData = [
        {
            date: '2016-05-02',
            name: '袜子',
            money: 123,
            num: 1
        },
        {
            date: '2016-05-04',
            name: '手套',
            money: 213,
            num: 1
        },
        {
            date: '2016-05-01',
            name: '帽子',
            money: 3,
            num: 1
        },
        {
            date: '2016-05-03',
            name: '管他呢',
            money: 321,
            num: 1
        }
    ]

    ruleForm = {
        // name: null,
        // age: null
    }

    ruleFormOpts = [
        {
            label: '姓名',
            prop: 'name'
        },
        {
            label: '年龄',
            prop: 'age'
        }
    ]

    created() {
        this.showMessage('from UserList')
        
    }
    
    mounted() {
        console.log(this.$refs['down'])

        this.handleKeyDown()
    }

    handleClick() {
        this.loading = false
        alert(this.loading)
    }

    handleKeyDown() {
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
    
    deleteRow(index, rows) {
        rows.splice(index, 1);
    }
    
    AddRow(index, rows) {
        rows.splice(index, 0, this.tableData[index]);
    }
}
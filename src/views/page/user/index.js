import Vue from 'common/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import { WoahSelect, ProgressCircle } from 'components'
@Component({
    name: 'UserList',
    mixins: [template],
    components: {
        WoahSelect,
        ProgressCircle
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
    query = null
    selectedRows = []

    tableData = [
        {
            rowNum: 1,
            date: '2016-05-02',
            name: '袜子',
            money: 123,
            num: 1,
        },
        {
            rowNum: 2,
            date: '2016-05-04',
            name: '手套',
            money: 213,
            num: 1
        },
        {
            rowNum: 3,
            date: '2016-05-01',
            name: '帽子',
            money: 3,
            num: 1
        },
        {
            rowNum: 4,
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

    temp = '词条索引;名称|1;独头蒜|2;白皮蒜|3;红皮蒜|4'

    menuList = [
        { id: 1, parentId: '' },
        { id: 2, parentId: '' },
        { id: 3, parentId: 1 },
        { id: 4, parentId: 2 },
        { id: 5, parentId: 3 },
        { id: 6, parentId: 5 },
        { id: 7, parentId: 5 }
    ]

    pList = [
        {
            label: '回款比例',
            value: 87,
            color: '#5B8FF9'
        },
        {
            label: '付款比例',
            value: 100,
            color: '#F6BD16'
        },
        {
            label: '收款比例',
            value: 75,
            color: '#FF9845'
        }
    ]

    created() {
        let resultMenu = this.listToTree(this.menuList)
    }
    handleTransData() {
        let _temp = this.temp.split(';')
        let arr = []
        _temp.filter(item => {
            let splitObj = item.split('|')
            if (splitObj.length > 1) {
                let obj = {
                    label: splitObj[0],
                    value: splitObj[1]
                }
                arr.push(obj)
            }
        })
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

    listToTree(srcList) {
        let result = []
        let nodeInfo = this.menuList.reduce((data, node) => (data[node.id] = node, data), {} )
        console.log('nodeInfo', nodeInfo);
        

        srcList.forEach(node => {
            if (!node.parentId) {
                result.push(node)
                return
            }
            let parent = nodeInfo[node.parentId]
            parent.children = parent.children || []
            parent.children.push(node)
        })
        return result
    }

    handleSelectionChange(row) {
        this.selectedRows = row
    }

    onSelected(check, val, index) {
        if (check) {
            this.selectedRows.push(val)
        } else {
            this.selectedRows.splice(index, 1)
        }
    }

    onMultipleDel() {
        this.selectedRows.filter((item, index) => {
            this.tableData.filter((table, tabIdx) => {
                if (item.rowNum === table.rowNum) {
                    this.tableData.splice(tabIdx, 1)
                }
            })
        })
    }

    onCellStyle({ row, column, columnIndex }) {
        if (columnIndex === 1) {
            return 'red'
        }
    }
}
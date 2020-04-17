function addAreaColor(arr) {
    let a = []
    for (var i = 0, len = arr.length; i < len; i++) {
        var name = arr[i].name.split(',')

        for (var j = 0, len2 = name.length; j < len2; j++) {
            a.push({
                name: name[j].trim(),
                itemStyle: {
                    normal: {
                        areaColor: arr[i].color,
                        color: arr[i].color
                    }
                }
            })
        }
    }
    return a
}

// export let regions = addAreaColor([{
//     name: '广东, 广西, 海南',
//     color: '#0976e6'
// }, {
//     name: '台湾, 福建, 浙江, 江西, 安徽, 江苏, 山东',
//     color: '#2589f0'
// }, {
//     name: '湖南, 湖北, 河南',
//     color: '#55a4f6'
// }, {
//     name: '西藏, 新疆, 四川, 甘肃, 贵州, 重庆, 青海, 云南',
//     color: '#7cb9f8'
// }])

export let regions = addAreaColor([
    { name: '北京', value: '' },
    { name: '天津', value: '' },
    { name: '上海', value: '' },
    { name: '重庆', value: '' },
    { name: '河北', value: '' },
    { name: '河南', value: '' },
    { name: '云南', value: '' },
    { name: '辽宁', value: '' },
    { name: '黑龙江', value: '' },
    { name: '湖南', value: '' },
    { name: '安徽', value: '' },
    { name: '山东', value: '' },
    { name: '新疆', value: '' },
    { name: '江苏', value: '' },
    { name: '浙江', value: '' },
    { name: '江西', value: '' },
    { name: '湖北', value: '' },
    { name: '广西', value: '' },
    { name: '甘肃', value: '' },
    { name: '山西', value: '' },
    { name: '内蒙古', value: '' },
    { name: '陕西', value: '' },
    { name: '吉林', value: '' },
    { name: '福建', value: '' },
    { name: '贵州', value: '' },
    { name: '广东', value: '' },
    { name: '青海', value: '' },
    { name: '西藏', value: '' },
    { name: '四川', value: '' },
    { name: '宁夏', value: '' },
    { name: '海南', value: '' },
    { name: '台湾', value: '' },
    { name: '香港', value: '' },
    { name: '澳门', value: '' }
])


export default {
    title: {
        x: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    geo: {
        map: 'china',
        roam: false,
        layoutSize: '100%',
        zoom: 1.25,
        itemStyle: {
            normal: {
                areaColor: '#95c8fd',
                borderColor: '#629ad5'
            },
            emphasis: {
                areaColor: '#0962c0',
                color: '#fff'
            }
        },
        label: {
            normal: {
                show: true,
                color: '#fff'
            },
            emphasis: {
                color: '#fff'
            }
        },
        regions: regions
    }
    // ,
    // series: [
    //     {
    //         name: '',
    //         type: 'map',
    //         mapType: 'china',
    //         roam: false,
    //         itemStyle: {
    //             normal: { label: { show: true } },
    //             emphasis: { label: { show: true } }
    //         },
    //         data: [
                // { name: '北京', value: '' },
                // { name: '天津', value: '' },
                // { name: '上海', value: '' },
                // { name: '重庆', value: '' },
                // { name: '河北', value: '' },
                // { name: '河南', value: '' },
                // { name: '云南', value: '' },
                // { name: '辽宁', value: '' },
                // { name: '黑龙江', value: '' },
                // { name: '湖南', value: '' },
                // { name: '安徽', value: '' },
                // { name: '山东', value: '' },
                // { name: '新疆', value: '' },
                // { name: '江苏', value: '' },
                // { name: '浙江', value: '' },
                // { name: '江西', value: '' },
                // { name: '湖北', value: '' },
                // { name: '广西', value: '' },
                // { name: '甘肃', value: '' },
                // { name: '山西', value: '' },
                // { name: '内蒙古', value: '' },
                // { name: '陕西', value: '' },
                // { name: '吉林', value: '' },
                // { name: '福建', value: '' },
                // { name: '贵州', value: '' },
                // { name: '广东', value: '' },
                // { name: '青海', value: '' },
                // { name: '西藏', value: '' },
                // { name: '四川', value: '' },
                // { name: '宁夏', value: '' },
                // { name: '海南', value: '' },
                // { name: '台湾', value: '' },
                // { name: '香港', value: '' },
                // { name: '澳门', value: '' }
    //         ]
    //     }
    // ]
}
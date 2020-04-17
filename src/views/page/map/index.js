import Vue from 'common/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import ECharts from 'echarts'
import 'echarts/map/js/china.js'
import options from './data'

@Component({
    name: 'MapList',
    mixins: [template],
    components: {
        // ECharts
    }
})
export default class MapList extends Vue{
    created() {
        this.showMessage('from MapList')
    }

    mounted() {
        this.initMap()
        
    }

    handleClick() {
        // this.loading = true
        alert(this.loading)
    }

    initMap() {
        let chart = ECharts.init(document.getElementById('map'))
        chart.setOption(options)

        chart.on('click', (params) => {
            params.region.itemStyle.areaColor = '#0976e6'
            params.region.itemStyle.color = '#0976e6'
            chart.setOption(chart.getOption(), true)
        })
    }
}
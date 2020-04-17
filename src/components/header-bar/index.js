import Vue from 'common/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './index.vue'
import { Store as ComStore } from 'store/modules/common'
import MessageBox from '../message-box'

@Component({
    name: 'header-bar',
    mixins: [template],
    components: {
        MessageBox
    }
})
export default class HeaderBar extends Vue {
    @ComStore.getter('menuMode') menuMode
    @ComStore.getter('styleItem') styleItem
    activeIndex = '1'
    mode = null
    style = {}

    get isVertical() {
        return this.mode === 'vertical'
    }

    created () {

    }

    @Watch('menuMode', {
        immediate: true
    })
    onWatchMode(mode) {
        this.mode = mode
    }

    @Watch('styleItem', {
        immediate: true,
        deep: true
    })
    onWatchStyle(style) {
        this.style = { ...style }
    }
}
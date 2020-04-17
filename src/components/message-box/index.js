import Vue from 'common/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './index.vue'

@Component({
    name: 'messageBox',
    mixins: [template]
})
export default class MessageBox extends Vue {
    @Prop({ type: Number, default: 1 }) count
    activeName = "notice"

    created () {
    }

    onClick() {

    }

    onMessageBoxShow() {
        setTimeout(() => {
            this.loading = false
        }, 1000)
    }
}
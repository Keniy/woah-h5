import Vue from 'common/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'

@Component({
    name: 'sidebar',
    mixins: [template]
})
export default class SideBar extends Vue {

    created () {

    }
}
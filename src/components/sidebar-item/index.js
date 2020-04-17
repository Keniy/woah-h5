import Vue from 'common/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'

@Component({
    name: 'sidebarItem',
    mixins: [template]
})
export default class SidebarItem extends Vue {

    created () {

    }
}
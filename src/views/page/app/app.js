import Vue from 'common/base'
import Component from 'vue-class-component'
import template from './index.vue'

@Component({
    name: 'app',
    mixins: [template]
})
export default class App extends Vue {
}

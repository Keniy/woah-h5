import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import { Store as TagStore } from 'store/modules/tagsView'

@Component({
    name: 'tagsView',
    mixins: [template]
})
export default class TagsView extends Vue {
    @TagStore.getter('visitedTags') visitedTags

    created () {

    }

    onCloseSelectedTag(tag) {
        
    }
}
import Vue from 'common/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import { Store as ComStore } from 'store/modules/common'
import drawer from '../drawer'
import HeaderBar from '../header-bar'

@Component({
	name: 'layout',
	mixins: [template],
	components: {
		drawer,
		HeaderBar
	}
})
export default class Layout extends Vue {
	@ComStore.getter('defaultTheme') defaultTheme
	@ComStore.getter('menuMode') menuMode

	created () {
	}

	get key () {
		const { hash, fullPath, path } = this.$route
		return hash ? path : fullPath
	}

	get cachedViews() {
		return []
	}

	get isVertical() {
		return this.menuMode === 'vertical'
	}

	get headerStyle() {
		let obj = {}
		if (this.isVertical) {
			obj.paddingLeft = '0px'
		} else {
			obj.width = '100%'
		}
		return obj
	}
	
	get containerStyle() {
		let obj = {}
		if (this.isVertical) {
			obj.display = 'inline-block'
		}
		return obj
	}
}
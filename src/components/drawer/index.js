import Vue from 'common/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import { Store as ComStore } from 'store/modules/common'

@Component({
    name: 'drawer',
    mixins: [template]
})
export default class Drawer extends Vue {
    @ComStore.getter('themes') themes
    @ComStore.getter('defaultTheme') defaultTheme
    @ComStore.action('setTheme') setTheme
    @ComStore.action('setMenuMode') setMenuMode
    @ComStore.action('setStyle') setStyle

    options = {
        styles: [
            {
                label: '暗色菜单风格',
                prop: 'dark',
                style: {
                    backgroundColor: '#545c64',
                    textColor: '#fff',
                    activeTextColor: '#ffd04b'
                }
            }, 
            {
                label: '亮色菜单风格',
                prop: 'light',
                style: {
                    backgroundColor: '#fff',
                    textColor: 'rgba(0,0,0,.8)',
                    activeTextColor: 'rgba(0,0,0,.8)'
                }
            }
        ]
    }

    created () {

    }

    onOpenDrawer() {
		this.drawer = !this.drawer
    }
    
    onChangeTheme(theme) {
        this.setTheme(theme)
    }

    onChecked(theme) {
        return this.defaultTheme === `theme-${theme}`
    }

    onChangeViewMode(mode) {
        this.setMenuMode(mode)
    }

    onChangeViewStyle(style) {
        let item = this.options.styles.find(item => item.prop === style)
        this.setStyle(item.style)
    }
}
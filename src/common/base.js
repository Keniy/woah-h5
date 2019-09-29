import { Vue, Component, Mixins } from 'vue-property-decorator'
import Common from 'common/common'

@Component({
    name: 'Base'
})
export default class Base extends Mixins(Vue, Common) {
    
    showMessage(msg) {
        console.log('msg', msg)
    }
}
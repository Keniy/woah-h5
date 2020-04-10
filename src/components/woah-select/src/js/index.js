import debounce from 'throttle-debounce/debounce';
import { data } from './data'

export default {
    name: 'WoahSelect',
    props: {
        value: {
            require: true
        },
        multiple: {
            type: Boolean,
            default: false
        },
        configs: {
            type: Object,
            default: () => {
                return {
                    width: 450,
                    placement: 'bottom-start'
                }
            }
        },
        columns: {
            type: Array,
            default: () => [
                { label: 'ID', prop: 'id' },
                { label: '名称', prop: 'name' }
            ]
        }
    },
    data() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        return {
            visible: false,
            isOnComposition: false,
            softFocus: false,
            loading: false,
            query: null,
            inputWidth: 0,
            selected: [],
            tableData: data,
            pagination: {
                total: 0,
                size: 0,
                pageSizes: [10, 20, 50, 100],
                current: 1
            }
        }
    },
    created() {
        this.debouncedQueryChange = debounce(0, (value) => {
            this.handleQueryChange(value)
        })
    },

    mounted() {
        const input = this.$refs.woahInput
        this.$nextTick(_ => {
            document.addEventListener('click', this.$refs['woahPopover'].handleDocumentClick)
            if (input && input.$el) {
                this.inputWidth = input.$el.getBoundingClientRect().width
            }
        })
    },

    methods: {
        handleComposition(event) {
            const text = event.target.value
            this.loading = true
            if (event.type === 'compositionend') {
                this.isOnComposition = false
                this.$nextTick(_ => this.handleQueryChange(text))
            } else {
                const lastCharacter = text[text.length - 1] || ''
                this.isOnComposition = !this.common.utils.isKorean(lastCharacter)
            }
        },
        handleFocus(event) {
            this.visible = true
            if (!this.softFocus) {
                this.$emit('focus', event)
            } else {
                this.softFocus = false
            }
        },
        handleQueryChange(val) {
            this.visible = true
        },
        handleSizeChange(val) {

        },
        handleCurrentChange(val) {

        },
        handleRowSelect(row) {
            this.selected.push({
                label: row.name,
                value: row.id
            })
        },
        deleteTag(event, tag) {
            let index = this.selected.indexOf(tag)
            console.log(index);
            if (index > -1) {
                this.selected.splice(index, 1)
            }
        },
        resetInputWidth() {
            this.inputWidth = this.$refs.woalInput.$el.getBoundingClientRect().width
        }
    }
}
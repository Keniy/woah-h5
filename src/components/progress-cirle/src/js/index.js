
export default {
    props: {
        percent: {
            type: Number,
            default: 0
        },
        color: {
            type: String
        },
        label: {
            type: String
        },
        width: {
            type: Number,
            default: 160
        },
        height: {
            type: Number,
            default: 160
        }
    },
    data () {
        return {
            ratio: 1,
            r: 47
        }
    },
    created() {
    },
    computed: {
        d () {
            const { ratio } = this
            return this.getD(ratio)
        }
    },
    mounted () {
        let timer = setInterval(() => {
            if (this.ratio > this.percent) {
                this.ratio = this.percent
                clearInterval(timer)
                timer = null
                return
            }
            this.ratio += 1
        }, 16)
    },
    methods: {
        getD (ratio) {
            if (ratio >= 100) {
                ratio = 99.999
            }
            const angle = Math.PI / 50 * ratio
            const r = this.r
            
            const x = r * Math.cos(angle)
            const y = -r * Math.sin(angle)
            const isBigAngle = Number(ratio > 50)
            return `M 47 0 A 47 47 0 ${isBigAngle} 0 ${x} ${y}`
        }
    }
}
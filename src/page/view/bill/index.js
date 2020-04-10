import Vue from 'common/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import $ from 'jquery'

@Component({
    name: 'yearly-bill',
    mixins: [ template ]
})
export default class YearlyBill extends Vue {

    curPage = 1
    PageL = 0
    canTouch = false
    startY = 0
    endY = 0
    diff = 0
    publicPath = process.env.BASE_URL
    audioSrc = ''

    created() {
        this.canTouch = true
    }

    mounted() {
        this.audioSrc =  require('../../../assets/music/2.mp3')
        // 初始化音乐
        this.initMusic()

        this.PageL = $('.page_box .page').length
        console.log(this.PageL);
        

        // 绑定事件
        document.body.addEventListener("touchstart", this.touchStart, { passive: false })
        document.body.addEventListener("touchmove", this.touchMove, { passive: false })
        document.body.addEventListener("touchend", this.touchEnd, { passive: false })

        this.addLoadEvent(this.preloader())

        $('.bj_end_button1').click(function(){
            location.reload();
        })

        // recalc
        this.reCalc()
    }

    touchStart(e) {
        let touch = e.touches[0]
        this.startY = touch.pageY
        document.getElementById('start').play()
    }

    touchMove(e) {
        let touch = e.touches[0]
        this.endY = touch.pageY
        this.diff = this.endY - this.startY
    }

    touchEnd(e) {
        if(Math.abs(this.diff) > 10 && this.canTouch){
            if(this.diff > 0){
                if(this.curPage <= 1){
                    return
                }
                
                $('.page' + this.curPage).removeClass('inTop outTop inDown outDown hide').addClass('outDown')
                this.curPage--
                $('.page' + this.curPage).removeClass('inTop outTop inDown outDown hide').addClass('inDown')
                this.handleArrowShow()
            }else{
                if(this.curPage >= this.PageL){
                    return
                }
                
                $('.page' + this.curPage).removeClass('inTop outTop inDown outDown hide').addClass('outTop')
                this.curPage++
                $('.page' + this.curPage).removeClass('inTop outTop inDown outDown hide').addClass('inTop')
                this.handleArrowShow()
            }
            this.canTouch = false
            setTimeout(() => {
                this.canTouch = true
                this.diff = 0
                $('.page' + (this.curPage - 1) + ', .page' + (this.curPage + 1)).addClass('hide')
            }, 1000)
        }
    }

    handleArrowShow() {
        if (this.curPage >= this.PageL) {
            $('.arrow').hide()
        } else {
            $('.arrow').show()
        }
    }

    preloader() {
        if (document.getElementById) {
            document.getElementById("preload-01").style.background = `url(${ this.publicPath }images/bj_01.jpg) no-repeat`
            document.getElementById("preload-02").style.background = `url(${ this.publicPath }images/bj_02.jpg) no-repeat`
            document.getElementById("preload-03").style.background = `url(${ this.publicPath }images/bj_03.jpg) no-repeat`
            // document.getElementById("preload-07").style.background = `url(${ this.publicPath }images/bj_07.jpg) no-repeat`
            if(document.getElementById("preload-04")){
                document.getElementById("preload-04").style.background = `url(${ this.publicPath }images/bj_04.jpg) no-repeat`
            }
            if(document.getElementById("preload-05")){
                document.getElementById("preload-05").style.background = `url(${ this.publicPath }images/bj_05.jpg) no-repeat`
            }
            if(document.getElementById("preload-08")){
                document.getElementById("preload-08").style.background = `url(${ this.publicPath }images/bj_08.jpg) no-repeat`
            }
            if(document.getElementById("preload-09")){
                document.getElementById("preload-09").style.background = `url(${ this.publicPath }images/bj_09.jpg) no-repeat`
            }
            document.getElementById("preload-06").style.background = `url(${ this.publicPath }images/bj_end.jpg) no-repeat` 
        }
    }

    addLoadEvent(func) {
        let oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;

        } else {
            this.$nextTIck(() => {
                if (oldonload) {
                    oldonload();
                }
                func();
            })
        }
    }

    isIphoneX() {
        return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
    }

    reCalc() {
        let docEle = document.documentElement
        let clientWidth = docEle.clientWidth
        if (!clientWidth) return
        if (clientWidth >= 750) {
            docEle.style.fontSize = '100px'
        } else {
            docEle.style.fontSize = 100 * (clientWidth / 750) + 'px'
        }
    }

    initMusic() {
        this.initWXSetting()
        document.getElementById('start').play()
        document.addEventListener("WeixinJSBridgeReady", function () {
            document.getElementById('start').play()
        }, false)
    }

   /**
    * @description
    * @author liugy
    * @date 2020-01-13
    * @memberof YearlyBill
    */
    initWXSetting() {
        this.wx.config({
            // 配置信息, 即使不正确也能使用 wx.ready
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
        })
        this.wx.ready(function() {
            document.getElementById('start').play()
            document.getElementById('start').volume = 0.8
        })
    }
}
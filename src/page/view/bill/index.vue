<template>
    <div>
        <div class="page_box">
            <!-- <audio src="../../../assets/music/2.mp3" controls="controls" loop="true" hidden="true" id="start" type="audio/mpeg" autoplay="autoplay"></audio> -->
            <audio loop id="start" autoplay preload>
                <source :src="audioSrc">
            </audio>
            <div class="page page1">
                <div class="page-top"></div>
                <div class="page-content page-content1">
                    <p class="page1-content-text page-content-text">时光总在不经意间流逝</p>
                    <p class="page1-content-text page-content-text">2019，一起走过的路</p>
                    <p class="page1-content-text page-content-text">你也许忘了，但我们记得……</p>
                </div>
                <div class="page-right page1-right"></div>
                <div class="page1-bottom-text">上滑开启你的年终报告</div>
                <div id="preload-01" class="cotent cotent1"></div>
            </div>

            <div class="page page2 hide">
                <div class="page-top"></div>
                <div class="page-right page2-right"></div>
                <div class="page-content">
                    <p class="page2-content-text page-content-text"><span class="font-number">2018</span>年<span class="font-number">10</span>月<span class="font-number">11</span>日</p>
                    <p class="page2-content-text page-content-text">是你在领筑互联梦想起航的日子</p>
                    <p class="page2-content-text page-content-text">这是我们一起走过的第<span class="fon t-number">462</span>天</p>
                    <p class="page2-content-text page-content-text">陪伴，是最长情的告白！</p>
                </div>
                <div id="preload-02" class="cotent cotent2"></div>
            </div>

            <!-- 第三页 -->
            <div class="page page3 hide">
                <div class="page-top"></div>
                <div class="page-right page3-right"></div>
                
                <!-- 家的时间 -->
                <img class="time-num home-hours-time-num" src="../../../assets/images/num8.png" alt="">
                <img class="time-num maohao-time-num" src="../../../assets/images/numpoint.png" alt="">
                <img class="time-num  home-minute-time-num" src="../../../assets/images/num5.png" alt="">
                <img class="time-num  home-second-time-num" src="../../../assets/images/num9.png" alt="">
                <!-- 公司的时间 -->
                <img class="time-num company-hours-time-num1" src="../../../assets/images/num2.png" alt="">
                <img class="time-num company-hours-time-num2" src="../../../assets/images/num3.png" alt="">
                <img class="time-num maohao-company-time-num" src="../../../assets/images/numpoint.png" alt="">
                <img class="time-num  company-minute-time-num" src="../../../assets/images/num5.png" alt="">
                <img class="time-num  company-second-time-num" src="../../../assets/images/num9.png" alt="">

                <div class="page-content">
                    <p class="page3-content-text page-content-text">这一年</p>
                    <p class="page4-content-text page-content-text page-content-text-height">前端小组从<span class="font-number">2</span>人扩大至<span class="font-number">5</span>人</p>
                    <p class="page4-content-text page-content-text page-content-text-height">领筑工程云团队从最初<span class="font-number">8</span>人扩大至<span class="font-number">16</span>人</p>
                    <p class="page4-content-text page-content-text page-content-text-height">进行了一场技术分享《组件库搭建与使用》的培训，参与人员<span class="font-number">10+</span>人。</p>
                    <p class="page4-content-text page-content-text page-content-text-height"></p>
                    
                </div>
                <div id="preload-03" class="cotent"></div>
            </div>
            <div class="page page4 hide">
                <div class="page-top"></div>
                <div class="page-right page2-right page4-right"></div>
                <div class="page-content">
                    <p class="page4-content-text page-content-text page-content-text-bottom">这一年</p>
                    <p class="page3-content-text page-content-text">你参与开发了<span class="font-number">8</span>个系统</p>
                    <p class="page3-content-text page-content-text">迭代了<span class="font-number">8</span>次大版本，<span class="font-number">2</span>次小版本</p>
                    <p class="page3-content-text page-content-text">完成了<span class="font-number">88</span>个任务</p>
                    <p class="page3-content-text page-content-text">解决了<span class="font-number">619</span>个bug</p>
                </div>
                <div id="preload-04" class="cotent"></div>
            </div>

            <!-- 第五页 -->
            <div class="page page5 hide">
                <div class="page-top"></div>
                <div class="page-right page2-right page5-right"></div>
                <div class="page-content">
                    <p class="page5-content-text page-content-text page-content-text-bottom">这一年</p>
                    <p class="page5-content-text page-content-text page-content-text-height">你进行了<span class="font-number">多</span>次系统优化</p>
                    <p class="page5-content-text page-content-text page-content-text-height">1. 解决多个系统间token共享问题，及多开窗口切换组织问题；</p>
                    <p class="page5-content-text page-content-text page-content-text-height">2. 优化接口异步路由加载引起的打包过慢问题；</p>
                    <p class="page5-content-text page-content-text page-content-text-height">3. 优化多级路由与菜单嵌套引起的缓存失效问题；</p>
                    <p class="page5-content-text page-content-text page-content-text-height">4. 优化页面数据缓存，及状态变更刷新页面问题。</p>
                    <p class="page5-content-text page-content-text page-content-text-height">...</p>
                </div>
                <div id="preload-05" class="cotent"></div>
            </div>

            <!-- 第六页 -->
            <div class="page page6 hide">
                <div class="page-top"></div>
                <div class="page-right page2-right page5-right"></div>
                <div class="page-content">
                    <p class="page5-content-text page-content-text page-content-text-bottom">来年展望</p>
                    <p class="page5-content-text page-content-text page-content-text-height">1. 加强对公司业务的理解；</p>
                    <p class="page5-content-text page-content-text page-content-text-height">2. 业务时间多看、多学、多练，提供自己的各项技能；</p>
                    <p class="page5-content-text page-content-text page-content-text-height">3. 工作中克服急躁情绪，积极对待每一项工作。</p>
                </div>
                <div id="preload-08" class="cotent"></div>
            </div>

            <!-- 第七页 -->
            <div class="page page7 hide">
                <div class="page-top"></div>
                <div class="page-right page2-right"></div>
                <!-- 面板 -->
                <div class="bj_panel_end bj_panel_end1">
                    <img class="bj_end_bar" src="../../../assets/images/bj_end_bar.png" alt="">
                    <!-- <div  class="bj_end_bar"></div> -->
                    <p class="title"></p>
                    <p class="keyword">你的年度关键词</p>

                    <!-- ！注意  bj_panel_end1对应匹配keyword-text1-->
                    <!-- <p class="keyword-text keyword-text1">智多星</p> -->
                    <!-- <p class="keyword-text keyword-text2">幸运星</p> -->
                    <p class="keyword-text keyword-text3">太难了</p>
                    <!-- ！注意 智多星描述 -->
                    <!-- <p class="desc">足智多谋、敢想敢为的智多星，说的就是你了。2019，敢不敢接受火眼金睛的xx的挑战？比比谁更聪明！</p> -->
                    <!-- ！注意 幸运星描述 -->
                    <!-- <p class="desc">人人都羡慕你的好运气，但越努力，才能越幸运。2019，什么也别说了，跟着xx（猫头鹰的名字）走就对了！</p> -->
                    <!-- ！注意 北极星描述 -->
                    <p class="desc">2020会更难吗？也许会，也许不会，但我们相信，只要心存希望，就能看见生活中的美好。「难」带来的，不是一条死胡同，也许是更多人生可能性。</p>
                </div>
                <!-- 按钮 -->
                <img class="bj_end_button bj_end_button1" src="../../../assets/images/bj_end_button2.png" alt="">
                <img class="bj_end_button bj_end_button2" src="../../../assets/images/bj_end_button1.png" alt="">
                <!-- <p class="inscription">谷川联行网络运营部诚意出品</p> -->
                <!-- logo -->
                <!-- <div class="logo"></div> -->
                <div id="preload-06" class="cotent"></div>
            </div>
        </div>


        <div class="arrow">
            <img src="../../../assets/images/arrow.png" alt="">
        </div>
    </div>
</template>

<style src='./index.scss' lang='scss' scoped></style>
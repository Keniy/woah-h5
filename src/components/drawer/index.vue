<template>
    <div class="drawer-panel">
        <el-drawer title="我是标题" :visible.sync="drawer" size="300px" :with-header="false">
            <div class="drawer-container">
                <div class="drawer-box">
                    <label>整体风格设置</label>
                    <div class="drawer-content">
                        <img src="@/assets/svg/left-right.svg" alt="暗色菜单风格" @click="onChangeViewStyle('dark')">
                        </img>
                        <img src="@/assets/svg/white-bg.svg" alt="亮色菜单风格" @click="onChangeViewStyle('light')"/>
                    </div>
                </div>

                <div class="drawer-box">
                    <label>主题色</label>
                    <div class="drawer-content">
                        <span class="drawer-tag" v-for="(item, index) in themes" :key="index" :class="item" @click="onChangeTheme(item)">
                            <i v-if="onChecked(item)" class="el-icon-check"/>
                        </span>
                    </div>
                </div>

                <div class="drawer-box">
                    <label>导航模式</label>
                    <div class="drawer-content">
                        <img src="@/assets/svg/left-right.svg" alt="暗色菜单风格" @click="onChangeViewMode('vertical')"/>
                        <img src="@/assets/svg/top-bottom.svg" alt="亮色菜单风格" @click="onChangeViewMode('horizontal')"/>
                    </div>
                </div>
            </div>
        </el-drawer>

        <div class="app-setting" @click="onOpenDrawer">
            <i class="el-icon-setting" />
        </div>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>

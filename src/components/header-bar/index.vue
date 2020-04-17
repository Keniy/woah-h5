<template>
    <div class="app-header">
        <div class="app-aside">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                :mode="mode"
                :background-color="style.backgroundColor"
                :active-text-color="style.activeTextColor"
                :text-color="style.textColor"
            >
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </div>
        <div class="app-user-wrapper" v-if="!isVertical">
            <div class="app-user-message">
                <div class="app-tips">
                    <message-box :count="12"/>
                </div>
            </div>
            <div class="app-user-info">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <img src="@/assets/images/avatar.jpg" alt=""> Admin
                        <i class="el-icon-arrow-down el-icon--right"></i> 
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-s-tools">账户设置</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>

<template>
    <div>
        <el-container class="app-container" :class="defaultTheme">
            <template v-if="isVertical">
                <el-header class="app-header">
                    <header-bar />
                </el-header>
                <el-container>
                    <el-main class="app-main">
                        <keep-alive :include="cachedViews" :max="200">
                            <router-view :key="key" />
                        </keep-alive>
                    </el-main>
                </el-container>
            </template>
            <template v-else>
                <el-container>
                    <el-header class="app-header">
                        <header-bar />
                    </el-header>
                    <el-main class="app-main">
                        <keep-alive :include="cachedViews" :max="200">
                            <router-view :key="key" />
                        </keep-alive>
                    </el-main>
                </el-container>
            </template>
            <drawer />
        </el-container>
    </div>
</template>

<style src="./index.scss" lang="scss" />

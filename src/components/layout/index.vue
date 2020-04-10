<template>
    <div>
        <el-container>
            <el-aside width="200px">
            </el-aside>

            <el-container>
                <el-header>
                </el-header>

                <el-main>
                    <router-view :key="key"/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped/>
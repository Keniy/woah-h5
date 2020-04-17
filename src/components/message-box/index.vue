<template>
    <div>
        <el-popover ref="messageBox" placement="bottom-start" width="300" trigger="click" @show="onMessageBoxShow">
            <div class="message-box">
                <el-tabs v-model="activeName" @tab-click="onClick" :stretch="true" v-loading="loading">
                    <el-tab-pane label="通知" name="notice">
                        <div class="message-content">
                            <div class="message-item">
                                <div class="message-icon">
                                    <i class="el-icon-s-comment"></i>
                                </div>
                                <div class="message-detail">
                                    <label>你收到了 14 份新周报</label>
                                    <label>一年前</label>
                                </div>
                            </div>
                            <div class="message-item">
                                <div class="message-icon">
                                    <i class="el-icon-s-comment"></i>
                                </div>
                                <div class="message-detail">
                                    <label>你推荐的 曲妮妮 已通过第三轮面试</label>
                                    <label>一年前</label>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="消息" name="message">消息</el-tab-pane>
                    <el-tab-pane label="待办" name="todo">待办</el-tab-pane>
                </el-tabs>
            </div>
            <div class="message-btn" slot="reference">
                <el-badge :value="count" class="item">
                    <i class="el-icon-bell" />
                </el-badge>
            </div>
        </el-popover>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>

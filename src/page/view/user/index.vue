<template>
    <div>
        User List
        <button @click="handleClick">Click me!</button>
        <!-- <woah-select/> -->
        <el-upload
            action
            :http-request="fnUploadRequest"
            :file-list="fileList"
            list-type="picture-card"
            :on-exceed="beyondFile"
            :on-success="handleVideoSuccess"
            :before-upload="beforeUploadVideo"
        >
        </el-upload>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>

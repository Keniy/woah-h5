<template>
    <div id="down" >
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

        <!-- <keep-alive key="1"> -->
            <el-input v-model="valueText"></el-input>
            <el-button ref="down" class="down" type="primary">OnKeyDown</el-button>
        <!-- </keep-alive> -->

        <!-- <keep-alive key="2">
            <el-input v-model="valueText"></el-input>
            <el-button ref="down" type="primary">OnKeyDown</el-button>
        </keep-alive> -->
        valueText:   {{valueText}}


        <el-table style="width: 100%" max-height="500" :data="tableData">
            <el-table-column prop="date" label="日期" width="100"></el-table-column>
            <el-table-column prop="name" label="商品" width="120"></el-table-column>
            <el-table-column prop="money" label="价格" width="100"></el-table-column>
            <el-table-column label="数量" width="150">
                <template slot-scope="scope">
                    <!-- <input type="number" prop="tableData.num" @change="handleChange(scope.$index, tableData)" style="width: 100%; size: auto;"></input> -->
                    <el-input-number type="number" v-model="scope.row.num" style="width: 100%; size: auto;"></el-input-number>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="200">
                <el-row slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger">移除</el-button>
                    <el-button @click.native.prevent="AddRow(scope.$index, tableData)" type="primary">添加</el-button>
                </el-row>
            </el-table-column>
        </el-table>

        <el-form :model="ruleForm">
            <el-form-item v-for="(item, index) in ruleFormOpts" :key="index" :label="item.label">
                <el-input v-model="ruleForm[item.prop]"/>
            </el-form-item>
            {{ ruleForm }}
        </el-form>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>

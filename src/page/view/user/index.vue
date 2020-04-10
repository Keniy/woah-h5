<template>
  <div id="down">
    <woah-select v-model="query" />

    <progress-circle v-for="(item, index) in pList" :key="index" :percent="item.value" :label="item.label" :color="item.color"></progress-circle>

    <el-button type="primary" @click="onMultipleDel">删除</el-button>

    <table class="el-table">
        <thead>
            <tr>
                <th></th>
                <th>序号</th>
                <th>日期</th>
                <th>姓名</th>
                <th>地址</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
                <td>
                    <el-checkbox type="checkbox" :key="index" @change="onSelected($event, item, index)"/>
                </td>
                <td>{{item.rowNum}}</td>
                <td>{{item.date}}</td>
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
            </tr>
        </tbody>
    </table>
    {{ selectedRows }}
    <!-- <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column>
    </el-table> -->
  </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>

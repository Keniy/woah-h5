<template>
    <div>
        <el-popover ref="woahPopover" v-bind="configs" v-model="visible" trigger="manual">
            <div slot="reference" ref="woahSelect" class="woah-select-layout">
                <div class="woah-select__tags"
                    :style="{ 'max-width': inputWidth - 32 + 'px' }"
                    ref="tags">
                    <span v-if="selected.length">
                        <el-tag 
                            closable 
                            type="info" 
                            @close="deleteTag($event, selected[0])" 
                            disable-transitions>
                            <span class="woah-select__tags-text">{{ selected[0].label }}</span>
                        </el-tag>
                        <el-tag 
                            class="woah-select__tag-length"
                            v-if="selected.length > 1"
                            :closable="false"
                            type="info" 
                            disable-transitions>
                            <span class="woah-select__tags-text">+ {{ selected.length -1 }}</span>
                        </el-tag>
                    </span>
                </div>
                <el-input
                    class="woah-select__input"
                    @focus="handleFocus"
                    @blur="softFocus = false"
                    @compositionstart="handleComposition"
                    @compositionupdate="handleComposition"
                    @compositionend="handleComposition"
                    @input="debouncedQueryChange"
                    v-model="query"
                    ref="woalInput" />
            </div>
            <transition 
                name="el-zoom-in-top">
                <div class="woah-select-content">
                    <el-table :data="tableData" style="width: 100%" v-loading="loading" max-height="400" @row-click="handleRowSelect">
                        <el-table-column v-for="(column, index) in columns" 
                            :key="index" 
                            v-bind="column">
                        </el-table-column>
                    </el-table>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pagination.current"
                        :page-sizes="pagination.pageSizes"
                        :page-size="pagination.size"
                        layout="total, sizes, prev, pager, next, jumper, slot"
                        :total="pagination.total">
                        <div name="slot" class="woah-select-refresh">
                            <i class="el-icon-refresh"></i>
                        </div>
                    </el-pagination>
                </div>
            </transition>
        </el-popover>
    </div>
</template>

<script src="./js/index"></script>

<style lang="scss" scoped>
.woah-select-layout {
    width: 240px;
    position: relative;
    display: inline-block;
    .woah-select__tags {
        position: absolute;
        line-height: normal;
        white-space: normal;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .woah-select__tag-length {
        margin-left: 4px;
    }
    .woah-select__input {
        max-width: 240px;
    }
}

.woah-select-content {
    cursor: pointer;
    .woah-select-refresh {
        display: inline-block;
        line-height: 28px;
        height: 28px;
        margin-left: 12px;
        .el-icon-refresh {
            font-size: 16px;
        }
    }
}
</style>


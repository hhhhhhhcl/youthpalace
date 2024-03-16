<template>
    <div class="search">
        <el-autocomplete clearable placeholder="请输入..." />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
//引入element-plus提供的图标
import {
    Search
} from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;

    //深度选择器
    ::v-deep .el-input__wrapper {
        width: 600px;
        margin-right: 10px;
    }
}
</style>
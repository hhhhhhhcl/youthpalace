<template>
    <div>
        <!--首页轮播图-->
        <Carousel />
        <!--首页搜索表单区域-->
        <Search />
        <!--底部展示兴趣特长频道结构-->
        <el-row gutter="20">
            <el-col :span="20">
                <!--兴趣活动子组件-->
                <Activity />
                <!--地区-->
                <Region />
                <!--展示机构卡片结构-->
                <div class="instruction">
                    <Card class="item" v-for="item in 10" :key="item"/>
                </div>
                <!--分页器-->
                <el-pagination
                        v-model:current-page="pageNo"
                        v-model:page-size="pageSize"
                        :page-sizes="[10,20,30,40]"
                        :background="false"
                        layout="prev,pager,next,jumper,->,sizes,total"
                        :total="40"
                />
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
//引入首页轮播图组件
import Carousel from './carousel/index.vue';
//引入首页搜索组件
import Search from './search/index.vue';
//引入首页兴趣活动组件
import Activity from './activity/index.vue';
//引入首页地区选择组件
import Region from './region/index.vue';
//引入首页机构卡片结构
import Card from './card/index.vue';
//分页器需要的数据
import {ref} from 'vue';
//分页器页码
let pageNo = ref<number>(1);
//分页器展示几条数据
let pageSize=ref<number>(10);
</script>
<style scoped lang="scss">
.instruction{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
        width: 48%;
        margin: 10px 0px;
    }
}
</style>

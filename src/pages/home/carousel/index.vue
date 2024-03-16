<template>
    <!--首页轮播图结构-->
    <el-carousel height="350px">
        <el-carousel-item v-for="item in imgList" :key="item">
            <img :src="item.url" />
        </el-carousel-item>
    </el-carousel>
</template>

<script setup lang="ts">
import image1 from "../../../assets/images/banner1.jpg";
import image2 from "../../../assets/images/banner2.jpg";
import image3 from "../../../assets/images/banner3.jpg";
import image4 from "../../../assets/images/banner4.jpg";

const imgList=[
    {url: image1},
    {url: image2},
    {url: image3},
    {url: image4},
];
</script>

<style scoped lang="scss">
img {
    width: 100%;
    height: 350px;
}
</style>
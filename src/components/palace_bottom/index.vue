<template>
    <div class="bottom">
        <div class="content">
            <div class="left"> 浙ICP备 07000455号-1  浙公网安备33010602001677号  电话0571-86510249</div>
            <div class="right">
                <span>联系我们</span>
                <span>合作伙伴</span>
                <span>用户协议</span>
                <span>隐私协议</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.bottom{
    width: 100%;
    height: 50px;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    .content{
        width:1200px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        .right{
            span{
                margin: 0px 5px;
            }
        }
    }
}

</style>
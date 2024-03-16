<template>
    <div class="activity">
        <h1>兴趣特长频道</h1>
        <div class="content">
            <div class="left">类型：</div>
            <ul class="type">
                <li class="active">全部</li>
                <li>球类</li>
                <li>棋类</li>
                <li>美术类</li>
                <li>书法类</li>
                <li>语言类</li>
                <li>唱歌类</li>
                <li>声乐类</li>
                <li>表演类</li>
                <li>戏曲类</li>
                <li>舞蹈类</li>
                <li>瑜伽类</li>
                <li>轮滑类</li>
                <li>手工类</li>
                <li>魔术类</li>
                <li>模特礼仪类</li>
                <li>运动竞技类</li>
                <li>国学经典类</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.activity {
    color: #7f7f7f;

    h1 {
        font-weight: 900;
        margin: 10px 0px;
    }

    .content {
        display: flex;

        .left {
            margin-right: 10px;
            width: 80px;
        }

        .type {
            display: flex;
            flex-wrap: wrap;

            li {
                margin-right: 30px;
                margin-bottom: 10px;

                &.active {
                    color: #55a6fe;
                }
            }

            li:hover {
                color: #55a6fe;
                cursor: pointer;
            }
        }
    }
}
</style>
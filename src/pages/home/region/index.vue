<template>
    <div class="region">
        <div class="content">
            <div class="left">地区：</div>
            <ul>
                <li class="active">全部</li>
                <li>上城区</li>
                <li>拱墅区</li>
                <li>西湖区</li>
                <li>滨江区</li>
                <li>萧山区</li>
                <li>余杭区</li>
                <li>临平区</li>
                <li>钱塘区</li>
                <li>富阳区</li>
                <li>临安区</li>
                <li>桐庐县</li>
                <li>淳安县</li>
                <li>建德市</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.region {
    color: #7f7f7f;
    margin-top: 10px;

    .content {
        display: flex;

        .left {
            margin-right: 10px;
            width: 60px;
        }

        ul {
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
}</style>
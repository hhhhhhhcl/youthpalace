<template>
  <div class="container">
    <!--顶部全局组件-->
    <PalaceTop/>
    <!--展示路由组建区域-->
    <div class="content">
      <!--展示路由-组件区域-->
      <router-view></router-view>
    </div>
    <PalaceBottom/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  .content{
    margin-top: 80px;
    width: 1200px;
    min-height: 700px;
  }
  .bottom{
    width: 100%;
    height: 50px;
    background: #f0f2f5;
  }
}
</style>
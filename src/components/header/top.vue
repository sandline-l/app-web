<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <div class="header_home">
          <i></i>
          <a href="#">华中艺购首页</a>
        </div>
        <div class="place">湖北</div>

        <router-link :to="{name:'movie'}">猫眼电影</router-link>
        
        <router-link :to="{name:'myslot'}">测试插槽</router-link>
      </div>
      <div class="right">
        <my-nav></my-nav>
      </div>
    </div>
  </div>
</template>

<script>
import MyNav from "./mynav";

export default {
  components: {
    MyNav
  }
};
</script>


<style lang='scss' scoped>
@import "@/assets/css/header/top.scss";
</style>

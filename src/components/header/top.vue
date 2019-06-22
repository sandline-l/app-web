<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <div class="home">
          <i></i>
          <a href="#">华中艺购首页</a>
        </div>
        <div class="place">湖北</div>
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

<style lang='scss'>
@import "@/assets/css/header/top.scss";
</style>

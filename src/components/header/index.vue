<template>
  <div>
    <my-top></my-top>
    <img src="../../assets/img/wangjing-1.jpg" alt="广告" class="ad">
    <my-search></my-search>
    <search-nav></search-nav>
  </div>
</template>

<script>
import MyTop from "@/components/header/top.vue";
import MySearch from "@/components/header/search.vue";
import SearchNav from "@/components/header/searchnav.vue";



export default {
  components: {
    MyTop,
    MySearch,
    SearchNav
  }
};
</script>

<style lang='scss'>

  div{
    img.ad{
      height: 84px;
      width: 100%;
    }
  }


</style>

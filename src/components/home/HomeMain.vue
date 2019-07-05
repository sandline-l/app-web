<template>
  <div class="main_content">
    <h3 class="part1">合作机构</h3>
    <div class="home_img">
      <a href="#">
        <img src="../../assets/img/huawendibai.jpg" alt>
      </a>
    </div>
    <section class="shop_box" >
      <div>
        <img src="../../assets/img/jpsp.png" alt>
      </div>
      <div class="shop">
        <div class="shop_item" v-for="(item,index) in 8" :key="index">
          <a href="#">
            <img src="../../assets/img/q11.jpg" alt>
            <h1>藏宝阁</h1>
            <h2>展示</h2>
          </a>
        </div>
      </div>
    </section>
 

  </div>
</template>

<script>

export default {


  
};
</script>

<style lang='scss'>
@import "@/assets/css/home/homemain.scss";
</style>

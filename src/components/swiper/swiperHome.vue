<template>
  <div class="swiper">
    <el-carousel height="150px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.url" alt="">
          <h1>{{index}}</h1>
          <h2>{{item.url}}</h2>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      imgList:[
          {
              url:'@/assets/img/daojishi.jpg'
          },
          {
              url:'@/assets/img/guangao-xd.jpg'
          },
          {
              url:'@/assets/img/guangao-yz.jpg'
          },
          {
              url:'@/assets/img/wangjing-2.jpg'
          }
      ]
    };
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/swiper/swiperhome.scss";
</style>

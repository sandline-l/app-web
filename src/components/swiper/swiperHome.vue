<template>
  <div class="swiper">
    <el-carousel height="150px">
      <el-carousel-item >
          <img src="@/assets/img/daojishi.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
          <img src="@/assets/img/guanggaoyz.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
          <img src="@/assets/img/guanggaoxd.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
          <img src="@/assets/img/wangjing2.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import imglist from '@/assets/img/daojishi.jpg'
export default {
  data() {
    return {
      msg: "@/assets/img/daojishi.jpg",
    //   imgList:[
    //       {
    //           url:'../../assets/img/daojishi.jpg'
    //       },
    //       {
    //           url:'../../assets/img/guangao-xd.jpg'
    //       },
    //       {
    //           url:'../../assets/img/guangao-yz.jpg'
    //       },
    //       {
    //           url:'../../assets/img/wangjing-2.jpg'
    //       }
    //   ]
    };
  },
 
};
</script>

<style lang='scss'>
@import "@/assets/css/swiper/swiperhome.scss";
</style>

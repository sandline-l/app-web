<template>
  <div class="home">
   <swiper-home></swiper-home>
    <aside-nav></aside-nav>
    <aside-right></aside-right>
    <left-nav></left-nav>
    <home-main></home-main>
  </div>
</template>

<script>
import SwiperHome from '@/components/swiper/swiperHome.vue'
import AsideNav from '@/components/home/asideNav.vue'
import AsideRight from '@/components/home/asideRight.vue'
import LeftNav from '@/components/leftNav.vue'
import HomeMain from '@/components/home/HomeMain.vue'

export default {
  name: 'home',
  components: {
    SwiperHome,
    AsideNav,
    AsideRight,
    LeftNav,
    HomeMain
  }
}
</script>

<style lang="scss">
@import '@/assets/css/home/home.scss';
</style>


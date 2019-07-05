<template>
  <div class="aside_right">
    <img src="../../assets/img/logo2.png" alt>
    <p>竞买6613件藏品</p>
    <div class="btn">
      <router-link :to="{name:'login'}">登录</router-link>
    </div>
    <div class="btn">
      <router-link :to="{name:'zhuce'}">免费注册</router-link>
    </div>
    <div id="record_content">
      <div id="record_content1">
        <div v-if="true">
          <p v-for="item in 8" :key="item">
            <a href="#">
              <span class="re_down">中华民国三十八年贵...</span>
            </a>
            <!-- &nbsp;&nbsp;&nbsp; -->
            <a href="#">登录可见</a>
          </p>
        </div>
        <div v-else>
          <p v-for="item in 8" :key="item">
            <a href="#">
              <span class="re_down">中华民国三十八年贵</span>&nbsp;&nbsp;&nbsp;
              <span>10000(RMB)</span>
            </a>
          </p>
        </div>
      </div>
      <div id="record_content2">
        <div v-if="true">
          <p v-for="item in 8" :key="item">
            <a href="#">
              <span class="re_down">中华民国三十八年贵...</span>
            </a>
            <a href="#">登录可见</a>
          </p>
        </div>
        <div v-else>
          <p v-for="item in 8" :key="item">
            <a href="#">
              <span class="re_down">中华民国三十八年贵</span>&nbsp;&nbsp;&nbsp;
              <span>10000(RMB)</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import obj from "../../assets/js/asideRight";
export default {
  methods: {
    scroll() {
      var wrapper3 = document.getElementById("record_content");
      var _box5 = document.getElementById("record_content1");
      var _box6 = document.getElementById("record_content2");
      var x3 = 0;
      var fun3 = function() {
        _box5.style.top = x3 + "px";
        _box6.style.top = x3 + 233 + "px";
        x3--;
        if (x3 + 233 == 0) {
          x3 = 0;
        }
      };
      var timer3 = setInterval(fun3, 60);
      wrapper3.onmouseover = function() {
        clearInterval(timer3);
      };
      wrapper3.onmouseout = function() {
        timer3 = setInterval(fun3, 60);
      };
    }
  },
  updated(){
  },
  created() {
  },
  mounted () {
      this.scroll();
  }
};
</script>

<style lang="scss">
@import "@/assets/css/home/asideRight.scss";
</style>
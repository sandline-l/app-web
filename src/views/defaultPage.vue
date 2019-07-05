<template>
  <div>
    <el-container>
      <el-header height="50">
        <my-header></my-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header/index.vue";
import MyFooter from "@/components/footer/index.vue";

export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang='scss'>
.el-container {
  min-width: 1220px;
  .el-header {
    padding: 0;
  }
  .el-main{
    padding: 0;
  }
  
}
</style>

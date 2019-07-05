<template>
  <div class="zhuce">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.psd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.psd"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-switch v-model="form.flag"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="gotoLogin">已有账户,立即登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        psd: "",
        flag: false
      }
    };
  },
  methods:{
      onSubmit(){

      },
        gotoLogin(){
            this.$router.push({name:'login'})
        }

  }
};
</script>

<style lang='scss' scoped>
.zhuce{
    position: relative;
    .el-form{
        width: 400px;
        border: 1px solid black;
        padding: 20px;
        margin: 100px 200px;
        float: right;
    }
}


</style>







<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.psd"></el-input>
      </el-form-item>
      <el-form-item label="记住密码">
        <el-switch v-model="form.flag"></el-switch>
      </el-form-item>
      <!-- <el-form-item label="登陆说明">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="zhuce">马上注册</el-button>
        <el-button type="primary" @click="wangji">忘记密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../axios";

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
  methods: {
    onSubmit() {
      //   console.log("submit!");
      //   console.log(this.form.name);
      //   console.log(this.form.psd);
      //   console.log(this.form.flag);
      // 先判断是否填写了合格的信息, 再考虑提交表单
      if (this.form.name != "" && this.form.psd != "") {
        api.login2(this.form).then(response => {
          var data = response.data.data;
          if (data.code == "1111") {
            // 跳转
            this.$router.push({ name: "Home" });
          }
          console.log(response);
        });
      } else {
        alert("要填写内容");
        return "";
      }

      //   发送ajax请求, 传递表单提交时数据, 获取后端返回的状态码,
      // 根据状态码,来确认是否登陆成功
    },
    zhuce() {
      console.log("zhuce!");
      this.$router.push({name:'zhuce'})
    },
    wangji() {
      console.log("wangji!");
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/login.scss";
</style>

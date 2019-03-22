<template>
  <div class="login_container">
    <h2>xx管理系统</h2>
    <el-input v-model="id" placeholder="用户名" class="loginInput" clearable/>
    <el-input v-model="psw" placeholder="密码" class="loginInput" show-password/>
    <el-button type="primary" class="loginIn" @click="loginIn()">登录</el-button>
  </div>
</template>

<script>
import * as Cookies from "js-cookie";
import mock from "../mock";
import { request } from "@/utils/request.js";
export default {

  name: "login",
  data() {
    return {
      id: "admin",
      psw: "123"
    };
  },
  mounted() {
  },
  methods: {
    loginIn(){
        request('/api/login', {'id': this.id, 'psw': this.psw})
        .then(res=>{
          if(res.status == 1) {
            this.successInfo(res.data.class+':'+res.data.id, res.msg)
            var in30Minutes = 1/48;
            Cookies.set('session_id', res.data.session_id, {
                expires: in30Minutes
            });
            Cookies.set('user_level', res.data.level, {
                expires: in30Minutes
            });
            this.$router.push({path:'/', query:{}})
          }else {
            this.errinfo('error', res.msg)
          }
        }).catch(err=>{
          console.log(err)
        })
    },
    successInfo(title, msg) {
      this.$notify({
        title: title,
        message: msg,
        type: 'success'
      });
    },
    errinfo(title, msg) {
      this.$notify({
        title: title,
        message: msg,
        type: 'warning'
      });
    }
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/params.scss";

.login_container {
  width:100%;
  height: 100%;
  @include flex(center, center, column);
  h2 {
    font-size: 2rem;
    margin: -10rem auto 2rem
  }
  .loginInput {
    width: 260px;
    margin: 0rem auto 1rem;
    display: block;
  }
  .loginIn {
    margin-top: 1rem;
    width: 260px;
  }
}
</style>

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
export default {

  name: "login",
  data() {
    return {
      id: "admin",
      psw: "123"
    };
  },
  mounted() {
    console.log(Cookies.get('session'))
  },
  methods: {
    loginIn(){
        var in30Minutes = 1/48;
        Cookies.set('session', '123', {
            expires: in30Minutes,
            path:'',
        });
        this.$router.push({path:'/home', query:{}})
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

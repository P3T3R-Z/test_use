<template>
  <div class="login_container">
    <h2>xx管理系统</h2>
    <Input v-model="id" placeholder="用户名" class="loginInput" clearable/>
    <Input v-model="psw" placeholder="密码" class="loginInput" show-password/>
    <Button type="primary" class="loginIn">登录</Button>
  </div>
</template>

<script>
import { Input, Button } from "element-ui";

export default {
  components: {
    Input,
    Button
  },
  name: "HelloWorld",
  data() {
    return {
      id: "admin",
      psw: "123"
    };
  }
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

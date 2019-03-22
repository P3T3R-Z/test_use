<template>
  <div class="left_nav_box">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="false"
      @select="select"
    >
      <el-submenu :index="i.name" v-for="i in navlist" :key="i.id" :disabled=" parseInt(userLevel) < i.level">
        <template slot="title">
          <span slot="title">{{i.name}}</span>
        </template>
        <div v-for="x in i.child" :key="x.id" >
            <el-submenu :index="x.id" v-if="x.child">
            <span slot="title">{{x.name}}</span>
            <el-menu-item :index="y.name" v-for="y in x.child" :key="y.id">{{y.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item :index="x.name" v-else>{{x.name}}</el-menu-item>
        </div>
      </el-submenu>
          <el-button type="danger" class="logout" @click="logOut">退出登录</el-button>

    </el-menu>
  </div>
</template>
<script>
import mock from "../mock";
import { request } from "@/utils/request.js";
import * as Cookies from "js-cookie";
export default {
  data() {
    return {
      navlist: null,
      userLevel: Cookies.get('user_level')
    };
  },
  computed: {
    
  },
  mounted() {
    request("/api/nav")
      .then(res => {
        this.navlist = res.nav;
        console.log(this.navlist)
        this.$store.commit('getNavChoose', {index: res.nav[0].name})
      })
      .catch(err => {
        console.log(err);
      });
    
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    select(index, indexPath){
      //console.log(index, indexPath)
      this.$store.commit('getNavChoose', {index})
    },
    logOut(){
      request('/api/logout')
      .then(res=>{
        if(res.status == 1){
          this.$router.push({path:'/login', query:{}})
          this.$notify({
            title: '退出成功',
            message: '',
            type: 'success'
          });
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/params.scss";

.left_nav_box {
  height: 100%;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100%;
  }
}
.logout{
    position: absolute;
    bottom:1rem;
    left:1rem
}
</style>
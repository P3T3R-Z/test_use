<template>
  <div class="right_view">
    <h1>{{choosedIndex}}页面</h1>

    <div v-if="choosedIndex == '配送进度'" class="steps">
      <el-steps :active="active" finish-status="success">
        <el-step title="配送开始" icon="el-icon-time"></el-step>
        <el-step title="配送中" icon="el-icon-sold-out"></el-step>
        <el-step title="配送完毕" icon="el-icon-check"></el-step>
      </el-steps>

      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      <div class="nowstep">当前状态:{{nowstep}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      nowstep: ''
    };
  },
  computed: {
    choosedIndex() {
      return this.$store.state.navChoose;
    }
  },
  mounted() {
      this.getstatus()
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      this.getstatus()
    },
    getstatus(){
        switch(this.active){
        case 1:
            this.nowstep = '配送中';
            break;
        case 2:
            this.nowstep = '配送完毕';
            break;
        default:
            this.nowstep = '配送开始';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/params.scss";

.right_view {
  height: 100%;
  flex: 1;
  padding: 2rem;
  h1 {
    font-size: 20px;
  }
  .steps {
    margin-top: 2rem;
  }
  .nowstep{
      margin: 2rem;
      padding:2rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
}
</style>
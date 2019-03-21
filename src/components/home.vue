<template>
  <div class="home">
		<left-nav/>
		<right-view/>
  </div>
</template>
<script>
import left_nav from './left_nav';
import right_view from './right_view';
export default {
	components:{
		leftNav: left_nav,
		rightView: right_view
	},
  data() {
    return {};
  },
  mounted() {
		this.open10()
	},
  methods: {
    open10() {
			this.$notify({
				title: '提示!',
				message: '步骤操作在:售后管理->配送进度',
				position: 'top-left'
			});
		}
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/params.scss";
.home {
width: 100%;
height:100%;
display: flex;
align-items: flex-start;
justify-content: flex-start
}
</style>
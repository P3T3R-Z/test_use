import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);

export default new vuex.Store({
  state: {
    navChoose: '1'
  },

  mutations: {
    getNavChoose(state, payload) {
      console.log(payload.index)
      state.navChoose = payload.index;
    }
  }
});
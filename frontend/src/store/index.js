import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemModale: false,
  },
  
  mutations: {
    TOGGLE_MODALE(state) {
      state.itemModale = !state.itemModale;
    }
  },
  modules: {
  }
})

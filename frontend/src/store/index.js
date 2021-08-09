import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // image: require('@/assets/rose.jpg'),
    title: "La planete rose",
    range: "",
    price: "",
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

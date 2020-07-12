import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[]
  },
  mutations: {
    setData: function(store , newData){
      stae.data.push(newData)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getData: function(state){
      return state.data
    }
  }
})

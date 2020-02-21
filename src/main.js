 import Vue from 'vue'
 import Vuex from 'vuex'
 import App from './App.vue'

 Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    view: "start",
    show_cards: false,
    show_ressources: false,
    percent:0
  },
  mutations: { //commit
    change_view(state,view){
      state.view = view;
    },
    update_percent(state){
      let scrollPos = window.scrollY
      let winHeight = window.innerHeight
      let docHeight = document.documentElement.scrollHeight
      let perc = Math.floor(100 * (scrollPos /  winHeight))
      state.percent = perc
      console.log(perc)
    }
  },
  actions: {
    change_view(context,view){
      context.commit('change_view',view)
    },
    update_percent(context){
      context.commit('update_percent')
    }
  }
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  store
});

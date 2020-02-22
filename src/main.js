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
      var perc =  ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);

      const scrolled = window.scrollY ;
      const total = document.documentElement.scrollHeight -window.innerHeight
      const percentage = (scrolled/total)*100
      state.percent = percentage
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

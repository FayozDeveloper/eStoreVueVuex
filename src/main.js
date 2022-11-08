import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from "@/store";
import {readonly, ref} from "vue";

export function  useState(initialState) {
   const state = ref(initialState);
   const setState =  (newState) => {
     state.value = newState;
   }
   return [readonly(state), setState];
}

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

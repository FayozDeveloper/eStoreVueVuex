import Vuex from 'vuex'
import Vue from 'vue'
import ProductsModule from "@/store/modules/ProductsModule";
// import actions   from "@/store/actions";
// import mutations from "@/store/mutations";
// import state from "@/store/store";
// import getters from "@/store/getters";
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        ProductsModule
    },
    // actions,
    // mutations,
    // state,
    // getters,
})
import Vuex from 'vuex'
import Vue from 'vue'
import ProductsModule from "@/store/modules/ProductsModule";


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        ProductsModule
    }
})
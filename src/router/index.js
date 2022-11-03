import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: () => import('../components/vuetify/vuetify1'),
        name: 'vuetify1',
        children:[
            {
                path: '/products',
                component: () => import('../components/vuetify/vuetify1')
            },
        ]
    },
    {
        path: '/products/:id',
        component: () => import('../components/vuetify/ShowProduct'),
        name: 'products'
    },
    {
        path: '/404',
        component: () => import('../layout/ErrorPage')
    },
    {
        path: '/cart',
        component: () => import('../components/vuetify/cart/CartPage')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router













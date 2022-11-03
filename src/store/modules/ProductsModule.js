import axios from "axios";
const API = 'https://fakestoreapi.com/products'


//STATE
const state = {
    products: [],
    addedProducts: []
};


//GETTERS
const getters = {
    allProducts: state => state.products,
    addedProducts: state => state.addedProducts,
};


//ACTIONS
const actions = {
    async getAllProductsFromApi({commit}){
        const response = await axios.get(API);
        localStorage.setItem('products', response.data)
        commit('setProducts', response.data)
    },

    addProductsToCart(state, {product, quantity}){
        console.log(product)
        if (product) {
            return  state.addedProducts?.push(product, quantity + 1)
        }
        console.log(state.addedProducts)
    }
};


//MUTATIONS
const mutations = {
        setProducts: (state, products) => state.products = products,
        setAddProductToCart: (state, {product, quantity}) => state.addedProducts.push({product,  quantity})
};


//EXPORTS
export default  {
    state,
    getters,
    actions,
    mutations,
}


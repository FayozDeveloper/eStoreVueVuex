import axios from "axios";

const API = 'https://fakestoreapi.com/products'

export const actions = {
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

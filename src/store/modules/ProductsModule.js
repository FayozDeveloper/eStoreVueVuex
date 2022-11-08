import axios from "axios";
import addObjectToLocalStorage from "@/mixins/localStorage/addObjectToLocalS";
import getObjectFromLocalStorage from "@/mixins/localStorage/getObjectFromLocalS";
const API = 'https://fakestoreapi.com/products';


//STATE
const state = {
    products: [],
    cart: [],
    product: null
};


//GETTERS
const getters = {
    allProducts: state => state.products,
    addedProducts: state => state.cart,
    addProductToCart: state => state.cart
};


//ACTIONS
const actions = {
    async getAllProductsFromApi({commit}){
        const response = await axios.get(API);
        addObjectToLocalStorage('products', response.data)
        commit('setProducts', response.data)
    },

    // addProductsToCart(state, {product, quantity}){
    //     console.log(product)
    //     if (product) {
    //         return  state.addedProducts?.push(product, quantity + 1)
    //     }
    //     console.log(state.addedProducts)
    // },

    addProductToCart({commit},{product, quantity})  {
        commit('ADD_TO_CART', {product, quantity})
    }
};


//MUTATIONS
const mutations = {
        setProducts: (state, products) => {
            state.products = products
            addObjectToLocalStorage('products', products)
        },

        // setAddProductToCart: (state, {product, quantity}) => state.addedProducts.push({product, quantity}),

        ADD_TO_CART:(state, {product, quantity}) => {

            let productList = getObjectFromLocalStorage('newProduct')

            if (productList !== null ){
                productList =  JSON.parse(productList);
                state.cart = productList;
            }


            let productInCart = state.cart.find((item) => {
                return item.product.id === product.id;
            });

            if (productInCart){
                productInCart.quantity += quantity
                return;
            }


            state.cart.push({
                product,
                quantity
            })

            addObjectToLocalStorage('newProduct', state.cart)

        }
};


//EXPORTS
export default {
    state,
    getters,
    actions,
    mutations,
}


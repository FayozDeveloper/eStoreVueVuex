const mutations = {
    setProducts: (state, products) => state.products = products,
    setAddProductToCart: (state, {product, quantity}) => state.addedProducts.push({product,  quantity})
};

export default mutations;
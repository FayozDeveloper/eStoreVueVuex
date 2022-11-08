<template>
  <div>
    <div v-if="cart && cart.length">
      <div v-for="product in cart" :key="product.id" class="mb-4">
          <h3>{{cart.title}}</h3>
      </div>
    </div>
    <div v-else>Cart is Empty</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CartPage",
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['addProductToCart','addedProducts']),
    cart(){
      return this.addedProducts;
    }
  },
  created() {
    console.log(this.addedProducts)
    // this.addProductToCart
    console.log(this.addProductToCart)
  }
}
</script>

<style scoped>

</style>
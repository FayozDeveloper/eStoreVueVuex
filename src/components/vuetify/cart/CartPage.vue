<template>
  <div>
    <div v-if="addedProducts">
      <div v-for="product in addedProducts" :key="product.id">
          {{product.title}}
      </div>
    </div>
    <div v-else>Cart is Empty</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CartPage",
  computed:{
    ...mapGetters(['addedProducts'])
  },
  created() {
    console.log(this.addedProducts)
  }
}
</script>

<style scoped>

</style>
<template>
      <center class="container">
        <button>
          <router-link to="/">Go Back</router-link>
        </button>
          <v-card
              class="mx-auto my-12"
              max-width="374"
          >
            <template>
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>

            <div class="img_product">
                <v-img
                    height="150"
                    width="150"
                    :src="product.image"
                ></v-img>
            </div>

            <v-card-title>
              <strong>
                  <h2 v-if="product.title">
                    {{product.title.substring(0,20)}}...
                  </h2>
              </strong>
            </v-card-title>

            <v-card-text>
                <div class="infoAbout">
                    <strong>Category:</strong> {{product.category}}
                </div>
              <div>{{product.description}}</div>
            </v-card-text>

            <h3>PRICE: {{product.price}}$</h3>
            <div v-if="product.rating && product.rating.length" >
                  <h4 style="margin-top: 10px">COUNT: {{product.rating.count}}</h4>
            </div>
            <div v-if="product.rating.rate && product.rating.rate.length">
                  <h2 style="margin-top: 10px ; color: darkgoldenrod">RATE: {{product.rating.rate}}</h2>
            </div>

            <v-rating
                background-color="grey"
                color="warning"
                hover
                length="5"
                size="33"
                :value="product.rating.rate"
            ></v-rating>

            <v-divider class="mx-4"></v-divider>
            <v-card-actions class="btn_actions">
              <v-btn color="deep-purple lighten-2" @click="addToCart()">
                 Buy now
              </v-btn>
              <v-btn color="deep-purple lighten-2">
                  <router-link style="color: black" to="/cart">Cart</router-link>
              </v-btn>
            </v-card-actions>
          </v-card>
      </center>
</template>

<script>
import axios from "axios";
// import {mapActions} from "vuex";
import {mapGetters} from "vuex";

export default {
  name: "ShowProduct",
  data(){
    return{
      profile: '',
      product: {},
    }
  },
  methods:{
    // ...mapActions(['addProductToCart']),
    async fetchProductById() {
      this.product = await axios.get(`https://fakestoreapi.com/products/${this.profile}`)
      .then(res => res.data).catch((err) => console.log(err))
    },
    // addProductToCart: async function(product) {
    //   await this.$store.dispatch('addProductsToCart', {
    //     product: product,
    //     quantity: 1
    //   })
    // },

    addToCart(){
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1
      } )
    }
  },
  computed:{
    ...mapGetters(['addedProducts', 'addProductToCart'])
  },
  mounted(){
    this.profile = this.$route.params.id;
    console.log(this.profile, 'Mounted')
    this.fetchProductById()
    console.log(this.addedProducts)
    // this.addProductToCart(this.product)
  },
  created() {
    // this.addToCart()
  }
}
</script>


<style scoped>
.container{
  margin-top: 2pc;
}
.infoAbout{
  font-size: 20px;
}
.img_product{
  padding: 10px;
}
h3{
  color: darkgreen;
}
button{
  padding: 10px;
  border:1px solid gray;
  border-radius: 3px;
  margin-bottom: 20px;
  text-decoration: none;
}
router-link{
  text-decoration: none;
}

.btn_actions{
  justify-content: space-around;
}


</style>





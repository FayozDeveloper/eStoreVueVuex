<template>
  <v-app id="inspire">
    <v-app-bar
        app
        shrink-on-scroll>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer>
      </v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container dark>
          <div class="btns">
              <button v-for="category in AllCategories" :key="category.id" @click="onClickCategory(category)"
              >{{category}}</button>
          </div>
        <v-row>
          <v-col v-if="isLoading">
            <v-card cols="4"  v-for="n in 8"
                    :key="n">
              <v-sheet class="pa-3">
                <v-skeleton-loader
                    class="mx-auto"
                    max-width="300"
                    type="card"
                ><h1>LOADING...</h1></v-skeleton-loader>
              </v-sheet>
            </v-card>
          </v-col>
          <v-col
              v-for="product in filteredProducts"
              :key="product.id"
              cols="4"
              class="v-col"
          >
            <v-card>
              <div class="infoProduct">
                <h3>{{product.title.substring(0,15)}}...</h3>
                <h2>Price: {{product.price}}$</h2>
                <router-link :to="`/products/${product.id}`">
                  <button type="submit">Add Product</button>
                </router-link>
              </div>
              <img :src="product.image" alt="img not found" width="150" height="150">
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
// import form from "@/mixins/form";
export default {
  name: "vuetify_first",
  // mixins: [form],
  data(){
    return {
        selectedCategory: 'All',
        AllCategories: [
            'All', 'Men\'s clothing','Women\'s clothing', 'Jewelery','Electronics'
        ],
        isLoading:false,
        products:[],
    }
  },
  methods: {
      ...mapActions(['getAllProductsFromApi']),
      onClickCategory(category){
         this.selectedCategory = category;
      }
  },
  computed:{
      ...mapGetters(['allProducts']),
      filteredProducts(){
          if (this.selectedCategory === 'All') {
            return this.allProducts
          } else {
            return this.allProducts.filter((x) => x.category === this.selectedCategory.toLowerCase())
          }
      },

  },
  created() {
      this.getAllProductsFromApi()
    // console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

  .v-card{
    height: 200px;
    padding: 10px;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    grid-gap: 10px;
    display: flex;
  }

  .infoProduct > h2{
    color: #006400;
  }
  .infoProduct > button {
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    background-color: #42bfff;
    color: #ffffff;
    font-weight: 600;
    border-radius: 5px ;
  }

  .btns{
    display: flex;
    width: 100%;
    font-size: 20px;
    grid-gap: 5%;
    padding: 20px;
    justify-content: center;
  }

  .btns > button{
    border-radius: 5px;
    border: 1px solid gray;
    cursor: pointer;
    background-color: #2c3e50;
    color: #ffffff;
    padding: 10px;
    transition: 200ms ease;
  }

  .btns > button:hover{
    transform: scale(1.1);
    transition: 200ms ease;
    color: #2c3e50;
    border: 1px solid #2c3e50;
    background-color: white;
  }


</style>
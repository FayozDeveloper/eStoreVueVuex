<template>
  <div>
      <input v-model="car" placeholder="Add a new car" /> <br /><br />
      <input type="submit" @click="storeCar" value="Store" />
      <button @click="getCar">Get List</button>
      <button @click="clearCar">Clear List</button>

      <ul class="list">
        <li v-for="(car, i) in cars" :key="i">
          {{ car }}
        </li>
      </ul>
  </div>
</template>

<script>
import getObjectFromLocalStorage from '../../mixins/localStorage/getObjectFromLocalS'
import addObjectToLocalStorage from '../../mixins/localStorage/addObjectToLocalS'
export default {
  name: "LocaleStorageExample",
  data(){
    return{
      cars: [],
      car: ''
    }
  },
  methods:{
    storeCar(){
      if (this.car.length){

        this.cars.push(this.car);
        // localStorage.setItem('cars', JSON.stringify(this.cars));
        addObjectToLocalStorage('cars',this.cars)
        this.car  = ''
      }

    },
    getCar(){
      this.cars = JSON.parse(getObjectFromLocalStorage('cars'))
    },
    clearCar(){
      let cars =  this.cars = []
      // localStorage.setItem('cars', JSON.stringify(cars))
      addObjectToLocalStorage('cars',cars)
    }
  }
}
</script>

<style scoped>

</style>
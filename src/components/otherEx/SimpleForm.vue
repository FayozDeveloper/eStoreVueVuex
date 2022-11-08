<template>
      <div>
          <form action="https://vuejs.org/"
                method="post"
                @submit="checkForm"
                novalidate="true"
          >
            <p v-if="errors.length">
              <b>Please correct the following Error(s):</b>
              <ul>
                  <li v-for="error in errors" :key="error.index">{{error}}</li>
              </ul>
            </p>

            <p>
              Given a budget of 100 dollars, indicate how much
              you would spend on the following features for the
              next generation Star Destroyer. Your total must sum up to 100.
            </p>

            <p>
              <input type="number" v-model.number="lemons" name="lemons"> Lemons <br/>
              <input type="number" v-model.number="potatoes" name="potatoes"> Potatoes <br/>
              <input type="number" v-model.number="tomatoes" name="tomatoes"> Tomatoes <br/>
              <input type="number" v-model.number="coffee" name="coffee"> Coffee <br/>
            </p>

            <p>Current Total: {{total}}</p>


            <p>
              <input type="submit">
            </p>

          </form>
      </div>
</template>

<script>
export default {
  name: "SimpleForm",
  data(){
      return{
        errors:[],
        lemons: 0,
        tomatoes: 0,
        potatoes: 0,
        coffee: 0,
      }
  },
  computed:{
    total: function (){
      return Number(this.lemons) + Number(this.tomatoes) + Number(this.potatoes) + Number(this.coffee)
    }
  },
  methods:{
      checkForm: function (e){
        this.errors = [];
        if (this.total < 100){
          this.errors.push('Total must be < 100')
        }
        if (!this.errors.length){
          return true;
        }

        e.preventDefault()
      }
  }
}
</script>

<style scoped>

</style>
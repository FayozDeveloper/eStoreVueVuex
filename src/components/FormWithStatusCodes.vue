<template>
  <form method="post" @submit="checkForm">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" :key="error.index">
                  {{error}}
                </li>
            </ul>
        </p>

        <p>
          <label for="name">Product Name: </label>
          <input type="text" name="name" id="name" v-model="name">
        </p>

        <p>
          <input
            type="submit"
            value="Submit"
          >
        </p>

  </form>
</template>

<script>

const API = 'https://vuecookbook.netlify.com/.netlify/functions/product-name?name=';
import axios from 'axios'
export default {
  name: "FormWithStatusCodes",
  data(){
    return{
      errors:[],
      name: ''
    }
  },
  methods: {
    checkForm: function (e){
      e.preventDefault();

      this.errors = [];

      if (this.name === ''){
          this.errors.push('Name is not required.');
      } else {
        axios.post(API+encodeURIComponent(this.name))
        .then(async res => {
          if (res.status === 204){
            alert('OK');
          } else if (res.status === 400){
            let errorResponse = await res.json();
            this.errors.push(errorResponse.error)
          }
        })
      }

    }
  }
}
</script>

<style scoped>

</style>
<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
// import {useState} from "@/main";

export default {
  name: 'App',
  components: {
  },

  // setup(){
  //   const [count, setCount] = useState(0);
  //   return{
  //     count,
  //     setCount
  //   }
  // },

  data: () => ({
  }),

  methods:{
    incrementFunc(){
      this.count++
    }
  },

  created() {
    this.incrementFunc()
  }

};
</script>



<template>
  <div class="summary">
    <div v-for="data in myJson" v-bind:key="data.summary">{{data.summary}}</div>
  </div>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Source+Sans+Pro:ital@1&display=swap" rel="stylesheet">

</template>

<script>
import json from "../data.json"
export default {
  name: 'Summary',
  data(){
      return{
          myJson: json
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.summary{
    font-family: 'Source Code Pro', sans-serif;

    background-color: black;
    color: white;
    margin-top: 20px;
    padding: 5% 10% 5% 10%;
}
</style>

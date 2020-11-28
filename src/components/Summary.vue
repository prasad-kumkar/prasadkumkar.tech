<template>
  <div class="summary">
    <p>{{myJson[0].summary[0]}}</p><br/>
    <p>{{myJson[0].summary[1]}}</p>
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

    background-color: #2c3e50;
    color: white;
    margin-top: 20px;
    padding: 5% 10% 5% 10%;
}
</style>

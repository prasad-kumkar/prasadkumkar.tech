<template>
<div class="section">
    <h2>{{msg}}</h2>

</div>
    
</template>

<script>
export default {
    name: "Section",
    props: {msg: String}
}
</script>

<style scoped>
h2{
    font-family: 'Source Code Pro', sans-serif;
}
.section{
    margin: 0px;
  padding: 40%;
    background-color:#00994d;
    }
section{
  border: 1px black;
  color: white
}
.section:hover{
    background-color: black;
}
</style>
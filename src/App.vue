<template>
  <Header/>
  <Summary/>
  <Experience/>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet">
</template>

<script>
import Header from './components/Header.vue'
import Experience from './components/Experience.vue'
import Summary from './components/Summary.vue'
export default {
  name: 'App',
  components: {
    Header,
    Experience,
    Summary
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color: white;
  margin-top: 20px;
}

</style>

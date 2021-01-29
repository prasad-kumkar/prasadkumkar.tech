<template>
<div class="app">


<v-app>
  <Header/>
  <Summary/>
<v-main>
  <div class="Sections">
    <Section msg="Education"/><br/>
    <Section msg="Skills"/><br/>
    <Section msg="Languages"/><br/>
    <Section msg="Experience"/><br/>
    <Section msg="Projects"/><br/>
    <Section msg="Achievements"/><br/>
    <Section msg="Contact"/>
  </div>
</v-main>
</v-app>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import Summary from './components/Summary.vue'

export default {
  name: 'App',
  components: {
    Header,
    Section,
    Summary
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
.app {
  text-align: center;  
  background-image: linear-gradient(to-bottom, indigo, white, red);
  color: white;
}

iframe{
  margin: 2%;
}
p{
  font-family: 'Source Code Pro', monospace;
}
a{
  font-family: 'Homemade Apple', 'Courier New', Courier, monospace;
}
.credit{
  background-color: white;
  color: #2c3e50;
}
@media only screen and (max-width: 600px){
  h1{
    font-size: 50px;
  }
}
</style>

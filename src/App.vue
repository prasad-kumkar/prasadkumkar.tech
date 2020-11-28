<template>
<h1>prasad kumkar</h1>
  <Header/>
  <Summary/>
  <div class="break"><br/></div>
  <div class="Sections">
    <Section msg="Education"/>
    <div class="break"><br/></div>
    <Section msg="Experience"/>
    <div class="break"><br/></div>
    <Section msg="Projects"/>
    <div class="break"><br/></div>
    <Section msg="Achievements"/>
    <div class="break"><br/></div>
    <Section msg="Contact"/>
  </div>
    <div class="break"><br/></div>

<iframe src="https://giphy.com/embed/KYElw07kzDspaBOwf9" width="480" height="234" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
<link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet">
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
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color: white;
  margin-top: 20px;
}
h1{
  font-family: 'Homemade Apple', 'Courier New', Courier, monospace;
}
.break{
  background-color: aliceblue;
}

iframe{
  margin: 2%;

}


</style>

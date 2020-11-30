<template>
  <Header/>
  <Summary/>
  <div class="break"><br/></div>
  <div class="Sections">
    <Section msg="Education"/><br/>
    <Section msg="Skills"/><br/>
    <Section msg="Languages"/><br/>
    <Section msg="Experience"/><br/>
    <Section msg="Projects"/><br/>
    <Section msg="Achievements"/><br/>
    <Section msg="Contact"/>
  </div>
  <div class="break"></div>

<iframe src="https://giphy.com/embed/KYElw07kzDspaBOwf9" width="480" height="234" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
<div class="credit"><p>theme by: <a href="https://www.github.com/prasad-kumkar">prasad-kumkar</a></p>
<p href="https://www.freepik.com/vectors/background">Background vector created by starline - www.freepik.com</p></div>
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
  background-image: url(./assets/white.jpg);
  color: white;
}
h1{
  font-family: 'Homemade Apple', 'Courier New', Courier, monospace;
  color: #2c3e50;
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

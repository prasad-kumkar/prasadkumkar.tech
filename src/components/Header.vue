<template>
<div>
  
  <v-app-bar dark prominent elevation="10">
    <p>prasad kumkar</p>
    <v-spacer>
    </v-spacer>
    <v-btn icon href="https://github.com/prasad-kumkar"> <v-icon x-large>mdi-github</v-icon></v-btn>
    <v-btn icon href="https://linkedin.com/in/prasad-kumkar"> <v-icon x-large>mdi-linkedin</v-icon></v-btn>
    <v-btn icon href="https://join.skype.com/invite/CyAL6vDbNsea"> <v-icon x-large>mdi-skype</v-icon></v-btn>
    <v-btn icon href="https://twitter.com/kumkar_"> <v-icon x-large>mdi-twitter</v-icon></v-btn>
  </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  color: white;
  font-family: 'Homemade Apple', cursive;
  font-size: 4vw;
  letter-spacing: 3px;
  height: 50%;
  padding-left: 5vw;
}
</style>

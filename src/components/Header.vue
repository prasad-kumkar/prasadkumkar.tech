<template>
  <div class="header">
  <h1>prasad kumkar</h1>
  <div class="social-media">
    <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/apple-mail.png"></a>
    <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/016-discord.png"></a>
    <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/090-telegram.png"></a>
    <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/053-medium.png"></a>
    <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/096-twitter.png"></a>
    <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/032-github.png"></a>
    <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/052-linkedin.png"></a>
    <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/078-slack.png"></a>
    <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/skype.png"></a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.social-media{
  margin-top: 20px;
}
.social-media-icons{
  height: 40px;
}
h1{
  font-family: 'Homemade Apple', 'Courier New', Courier, monospace;
}
.social-media-links{
  margin: 0px 10px 0px 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>

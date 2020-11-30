<template>
  <div class="header">
    <h1>prasad kumkar</h1>
    <div class="social-media">
      <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/apple-mail.png"></a>
      <button class="social-media-links" @click="copyToClipboard('Prasad#1133')"><img class="social-media-icons" src="../assets/016-discord.png"></button>
      <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/090-telegram.png"></a>
      <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/053-medium.png"></a>
      <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/096-twitter.png"></a>
      <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/032-github.png"></a>
      <a class="social-media-links" href=""><img class="social-media-icons" src="../assets/052-linkedin.png"></a>
      <button class="social-media-links" @click="copyToClipboard('Prasad#1133')"><img class="social-media-icons" src="../assets/078-slack.png"></button>
      <a class="social-media-links" href="https://join.skype.com/invite/CyAL6vDbNsea"><img class="social-media-icons" src="../assets/skype.png"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
  copyToClipboard(text){
    var selected = false;
    var el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    if (document.getSelection().rangeCount > 0) {
        selected = document.getSelection().getRangeAt(0)
    }
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  position: fixed;
  width: 100%;
  background-image: url(../assets/white.jpg);
}
.social-media{
  margin-top: 20px;
}
.social-media-icons{
  height: 40px;
}

.social-media-links{
  margin: 0px 10px 0px 10px;
  border: 0px;
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

@media only screen and (max-width: 600px){
.social-media-links{
  margin: 20px
}
.social-media-icons{
  height: 60px;
}

}
</style>

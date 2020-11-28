<template>
<div class="section">
    <h2>{{msg}}</h2>
    <Block v-if="!this.doub" :json="myJson" ref="block"/>
    <DoubleBlock v-if="this.doub" :json="myJson" ref="double"/>
    
</div>
</template>

<script>
import json from "../data.json"
import Block from "./Block.vue"
import DoubleBlock from "./DoubleBlock.vue"
export default {
    name: "Section",
    props: {msg: String, doub: Boolean},
    data(){
        switch(this.msg){
            case "Education":
                return {myJson: json[0].education, doub: true}
            case "Skills":
                return {myJson: json[0].skills, doub: false}
            case "Languages":
                return {myJson: json[0].languages, doub: false}
            case "Experience":
                return {myJson: json[0].experience, doub: true}
            case "Projects":
                return {myJson: json[0].projects, doub: true}
            case "Achievements":
                return {myJson: json[0].achievements, doub: true}
            case "Contact":
                return {myJson: json[0].contact, doub: false}
            default:
                return {myJson: json, doub: false}
        }
    },
    components: {
        Block,
        DoubleBlock
    }
  }
</script>

<style scoped>
h2{
    font-family: 'Source Code Pro', sans-serif;
}
.section{
    margin: 0px;
  padding: 10%;
  width: 80%;
    background-color:#00994d;
    }
section{
  border: 1px black;
  color: white
}
.section:hover{
}
</style>
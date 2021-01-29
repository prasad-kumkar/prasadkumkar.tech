<template><div>
<div class="section">
    <h1>{{msg}}</h1>
    <Block :json="myJson" ref="block"/>
    
</div>
</div>
</template>

<script>
import json from "../data.json"
import Block from "./Block.vue"
export default {
    name: "Section",
    props: {msg: String},
    data(){
        switch(this.msg){
            case "Education":
                return {myJson: json[0].education}
            case "Skills":
                return {myJson: json[0].skills}
            case "Languages":
                return {myJson: json[0].languages}
            case "Experience":
                return {myJson: json[0].experience}
            case "Projects":
                return {myJson: json[0].projects}
            case "Achievements":
                return {myJson: json[0].achievements}
            case "Contact":
                return {myJson: json[0].contact}
            default:
                return {myJson: json}
        }
    },
    components: {
        Block
    }
  }
</script>

<style scoped>
h1{
    font-family: 'Source Code Pro', sans-serif;
}
</style>
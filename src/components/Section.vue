<template><div>
<div class="section">
    <h1>{{msg}}</h1>
    <Block v-if="!this.doub" :json="myJson" ref="block"/>
    <DoubleBlock v-if="this.doub" :json="myJson" ref="double"/>
    
</div>
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
h1{
    font-family: 'Source Code Pro', sans-serif;
}
</style>
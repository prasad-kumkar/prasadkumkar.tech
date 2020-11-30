<template>
    <div class="block-group">
        <ul id="list" v-for="data in json" v-bind:key="data.id">
            <div class="block">{{data}}</div>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Block",
    template: '<Block json="json"/>',
    props: ["json"],

}
</script>

<style scoped>
*{
    font-family: 'Source Code Pro', sans-serif;
}
.block-group{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.block{
    margin: 10px;
    max-width: 200px;
    min-height: 30px;
}
#list{
    background-color:black;
    margin: 10px;
}
#list:hover{
    background-color: blueviolet;
}
</style>
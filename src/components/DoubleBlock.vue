<template>
    <div class="block-group">
        <ul id="list" v-for="data in json" v-bind:key="data.id"><a :href="data.link" style="text-decoration:none; color:white;">
            <div class="block" v-for="i in data" v-bind:key="i.name">
                <v-card>
                    <v-card-title>{{i.name}}</v-card-title>
                    <v-card-subtitle>{{i.location}}</v-card-subtitle>
                    <p>Start: <v-chip>{{i.start}}</v-chip> End: <v-chip>{{i.end}}</v-chip></p>
                </v-card>
                </div></a>
        </ul>
    </div>
</template>

<script>
export default {
    name: "DoubleBlock",
    template: '<DoubleBlock json="json"/>',
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
    flex-wrap: wrap;
    width: 100%;
}
#list{
    background-color:black;
    margin: 10px;
    max-width: 400px;
    min-height: 300px;
}
#list:hover{
    background-color: blueviolet;
}
.block{
    margin: 10px;
}
</style>
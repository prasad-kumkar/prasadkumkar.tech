<template>
    <div class="block-group">
        <div id="list" v-for="data in json" v-bind:key="data.id">
                <v-card width="50vw">
                    <v-card-title>{{data[1]}}</v-card-title>
                    <v-card-subtitle>{{data[2]}}</v-card-subtitle>
                    <v-card-title>{{data[3]}}</v-card-title>
                    <p v-if="data[4]">Start: <v-chip>{{data[4]}}</v-chip> End: <v-chip>{{data[5]}}</v-chip></p>
                    <v-card-subtitle>{{data.description}}</v-card-subtitle>
                    <v-card-actions v-if="data.link"> <v-btn text :href="data.link" color="purple">View</v-btn> </v-card-actions>
                </v-card>
        </div>
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
    flex-wrap: wrap;
    margin: 10px;
}

#list{
    background-color:black;
    padding: 10px;
}
#list:hover{
    background-color: blueviolet;
}
</style>
<template>
    <div class="block-group">
        <div id="list" v-for="data in json" v-bind:key="data.id" style="margin: 10px">
                <v-card width="50vw" class="card">
                    <v-card-title>{{data[1]}}</v-card-title>
                    <p>{{data[2]}}</p>
                    <v-card-title>{{data[3]}}</v-card-title>
                    <p v-if="data[4]">Start: <v-chip>{{data[4]}}</v-chip> End: <v-chip>{{data[5]}}</v-chip></p>
                    <p>{{data.description}}</p>
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
    margin: 20px;
}

#list{
    background-color:grey;
    padding: 10px;
}
#list:hover{
    background-color: blueviolet;
}
.card:hover *{
    color: blueviolet;
}
</style>
<template>
    <div>
        <v-list class="green lighten-2">
            <v-list-tile avatar v-for="card in cards" :key="card.id">
                <v-list-tile-content>
                    <v-list-tile-title
                    style="border-radius:5px"
                    class="white black--text"
                    >
                    <div class="pl-3 py-6">{{ card.name }}</div>
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
                <v-btn small color="primary">Add card</v-btn>
		    </v-list-tile>
        </v-list>
    </div>
</template>

<script>
export default {
    props:['list'],
    data: () => {
        return {
            cards : []
        }
    },
    created(){
        let self = this
        self.getList()
    },
    methods: {
        getList(){
            let self = this
            self.cards = self.list.cards
        }
    }
};
</script>

<style>
</style>

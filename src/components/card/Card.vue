<template>
    <div>
        <v-list class="green lighten-2">
            <draggable v-model="cards" :options="{group: 'cards'}" @add="onAdd"
             @change="onChange" style="min-height:15px" :listId="list.id">
                <li v-for="card in cards" :key="card.id" :cardId="card.id">
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title
                            style="border-radius:5px"
                            class="white black--text"
                            >
                            <div class="pl-3 py-6">{{ card.name }}</div>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </li>
            </draggable>

            <v-list-tile @keyup.esc="edit=false">
                <v-text-field @click.stop v-model="cardData.name" label="Card name" v-show="edit"
                    @keyup.enter="addCard()"
                ></v-text-field>
                <v-btn small color="primary" @click.stop="editCard()" v-show="!edit">Add list</v-btn>
		    </v-list-tile>
        </v-list>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    props:['list'],
    components:{draggable},
    data: () => {
        return {
            cards : [],
            cardData: {
                name: ''
            },
            edit : false
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
        },
        editCard(){
            let self = this
            self.edit = true
        },
        addCard(){
            let self = this
            self.edit = false
            self.$store.state.services.CardService.add({name: self.cardData.name}, self.list.board_id, self.list.id)
            .then(result => {
                console.log(result.data);
                
                self.cards.push(result.data.card)
                self.edit = null
                self.cardData.name = null
            }).catch(err => {
               console.log(err);
                
            });
        },
        updateCard(cardId, listId) {
            let self = this
            self.$store.state.services.CardService.update(cardId,listId)
            .then(result => {
                console.log(result.data);
                
            }).catch(err => {
                console.log(err);
            });
        },
        deleteCard(cardId){
            let self = this
            self.$store.state.services.CardService.remove(cardId)
            .then(result => {
                console.log(result.data);
            }).catch(err => {
                console.log(err);
                
            });
        },
        onAdd(evt){
            console.log(evt);
            
            let self = this
			let fromListId = evt.from.getAttribute('listId');
			let cardId = evt.item.getAttribute('cardId');
			let toListId = evt.to.getAttribute('listId');
			self.updateCard(cardId, toListId);
        },
        onChange(evt){
			let newCards = this.cards.map((card,index)=>{
				 card.priority= index+1;
				return card;
            });
        }
    }
};
</script>

<style>
</style>

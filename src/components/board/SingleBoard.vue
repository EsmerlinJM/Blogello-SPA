<template>
    <div @click="changeStatus()">
        <v-container grid-list-md>
             <h1><b>{{ board.name }}</b></h1>
            <v-layout row wrap>
                <v-flex md3 v-for="list in lists" :key="list.id">
                    <v-card class="blue lighten-2">
                        <v-toolbar color="blue white--text">
                            <v-text-field v-if="update==list.id" prepend-icon="list" v-model="listName" label="Card name"
                            required @keyup.enter="updateList(list.id)"></v-text-field>
                            <v-toolbar-title @click.stop="update=list.id" v-else>{{ list.name }}</v-toolbar-title>
                            <v-spacer></v-spacer>

                            <v-menu offset-y>
                                <v-btn flat icon color="primary" slot="activator">
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                                <v-list>
                                    <v-list-tile avatar @click.stop="removeList(list.id)">
                                        <v-btn flat icon color="white">
                                            <v-icon>delete</v-icon>Delete
                                        </v-btn>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                            
                        </v-toolbar>

                        <Card :list="list"></Card>
                    </v-card>
                </v-flex>

                <v-flex md3>
                    <v-card class="blue lighten-2">
                        <v-card-title primary-title>
                            <v-text-field @click.stop="" v-show="edit" prepend-icon="list" v-model="listName" label="Card name"
                            required @keyup.enter="addList()"></v-text-field>
                            <v-btn small color="primary" @click.stop="editCard()" v-show="!edit">Add new list...</v-btn>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Card from '@/components/card/Card'
export default {
    components: {'Card': Card},
    data: () => {
        return {
            boards: [],
            boardId: 0, 
            board: '',
            lists: [],
            edit: false,
            update: false,
            listName: ''
        }
    },
    created() {
        let self = this 
        self.getBoards()
    },
    beforeRouteUpdate(to, from, next) {
        let self = this 
        self.boardId = to.params.id
        self.getBoards()
        next()
    },
    methods: {
        getLists(){
            let self = this
            self.boardId = self.$route.params.id
            self.boards.map(board => {
                if(board.id == self.boardId){
                    self.board = board
                    return self.lists = board.lists
                }
            })
        },
        getBoards() {
            let self = this
            self.$store.state.services.BoardService
            .getAll()
            .then(result => {
                self.boards = result.data.boards;
                self.getLists()
            }).catch(err => {
                console.log(err);
            });
        },
        editCard(){
            let self = this
            self.edit = true
        },
        changeStatus(){
            let self = this
            self.edit = false
            self.update = false
        },
        addList(){
            let self = this
            self.edit = false
            self.$store.state.services.ListService.add({name: self.listName}, self.boardId)
            .then(result => {
                let newList = result.data.list
                self.lists.push(newList)
                self.listName = null
            }).catch(err => {
                console.log(err);
                
            });
        },
        updateList(listId){
            let self = this
            self.$store.state.services.ListService.update({name: self.listName}, self.boardId, listId)
            .then(result => {
                self.update = false
                self.getBoards()
                self.listName = null
            }).catch(err => {
                
            });
        },
        removeList(listId){
            let self = this
            self.$store.state.services.ListService.remove(self.boardId, listId)
            .then(result => {
                self.getBoards()
            }).catch(err => {
                
            });
        }
    }
}
</script>

<style>

</style>

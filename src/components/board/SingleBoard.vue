<template>
    <div>
        <v-container grid-list-md>
             <h1><b>{{ board.name }}</b></h1>
            <v-layout row>
                <v-flex md3 v-for="list in lists" :key="list.id">
                    <v-card class="blue lighten-2">
                        <v-toolbar color="blue white--text">
                            <v-toolbar-title>{{ list.name }}</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn flat icon color="primary">
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </v-toolbar>

                        <Card :list="list"></Card>
                    </v-card>
                </v-flex>

                <v-flex md3>
                    <v-card class="blue lighten-2">
                        <v-card-title primary-title>
                            <v-text-field v-show="edit" prepend-icon="list" v-modal="listName" label="Card name"
                            required @keyup.enter="addList()"></v-text-field>
                            <v-btn small color="primary" @click="editCard()" v-show="!edit">Add new list...</v-btn>
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
        addList(){
            let self = this
            self.edit = false
        }
    }
}
</script>

<style>

</style>

<template>
    <div>
        <v-container fluid fill-height text-xs-center>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <h2>Your Boards</h2>
                    <v-layout row-sm wrap="" child-flex-sm>
                        <div v-for="board in boards" :key="board.id">
                            <router-link :to="{name:'SingleBoard', params:{ id: board.id }}">
                            <v-card dark class="primary ma-1" style="cursor:pointer">
                                <v-card-text>
                                    {{ board.name }}
                                </v-card-text>
                            </v-card>
                            </router-link>
                        </div>
                            <v-btn color="primary">Add new board..</v-btn>
                </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
import BoardData from "@/mixins/BoardDataMixin.js";
export default {
    data: () => {
        return {
            boards : []
        }
    },
    mounted() {
        let self = this
        self.getBoards()
    },
    mixins: [BoardData],
}
</script>

<style>

</style>

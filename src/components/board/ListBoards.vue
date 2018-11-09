<template>
    <div>
        <v-menu offset-y="">
          <v-btn primary flat slot="activator"><v-icon left="">developer_board</v-icon> Boards</v-btn>
          <v-list>
            <v-list-tile v-for="board in boards" :key="board.id">
                <router-link :to="{name:'SingleBoard', params:{ id: board.id }}">
                    <v-list-tile-title>{{ board.name }}</v-list-tile-title>
                </router-link>
            </v-list-tile>
          </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            boards: [],
            token: localStorage.getItem('token') || null
        }
    },
    mounted(){
      let self = this
        if(self.token){
          Event.$on('BoardLoaded', (boards) => {
              self.boards = boards;
          })
        }
    }
}
</script>

<style>
a {
    text-decoration: none;
    color: #fff;
}
</style>

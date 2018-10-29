<template>
  <v-app dark>

    <v-toolbar>
        <v-menu offset-y="">
          <v-btn primary flat slot="activator"><v-icon left="">developer_board</v-icon> Boards</v-btn>
          <v-list>
            <v-list-tile v-for="item in items" :key="item.title">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <div>
          <router-link to="/tasks" tag="span"><v-btn flat><v-icon left="">assignment</v-icon> Tasks</v-btn></router-link>
        </div>
        <v-spacer></v-spacer>
        <router-link to="/" tag="span"><v-btn flat><v-toolbar-title v-text="title"></v-toolbar-title></v-btn></router-link>
        <v-spacer></v-spacer>
        <div>
          <router-link to="/login" tag="span"><v-btn color="info" flat><v-icon left="">input</v-icon> Login</v-btn></router-link>
        </div>
        <div>
          <router-link to="/register" tag="span"><v-btn color="info" flat><v-icon left="">assignment</v-icon> Register</v-btn></router-link>
        </div>  
    </v-toolbar>

  <main>
    <v-container fluid>
      <router-view/>
    </v-container>
  </main>
    <v-content>
      
    </v-content>
    <v-footer app>
       <v-spacer></v-spacer>
        <span>Blogello &copy;2017</span>
        <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        icon: 'bubble_chart', 
        title: 'Inspire'
      }],
      title: 'Blogello'
    }
  },
  name: 'App'
}
</script>

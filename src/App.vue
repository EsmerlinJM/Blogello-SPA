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
        <v-spacer></v-spacer>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <router-link to="/register" tag="span"><v-btn color="info" flat><v-icon left="">input</v-icon> Register</v-btn></router-link>
        </div>
    </v-toolbar>

  <main>
    <v-container fluid>
      <router-view/>
    </v-container>
  </main>
    <v-content>
      
    </v-content>
    <v-footer :fixed="fixed" app>
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
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Blogello'
    }
  },
  name: 'App'
}
</script>

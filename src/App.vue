<template>
  <v-app dark>

    <v-toolbar>
        <ListBoard v-show="loggedIn"></ListBoard>
        <div v-show="loggedIn">
          <router-link to="/tasks" tag="span"><v-btn flat><v-icon left="">assignment</v-icon> Tasks</v-btn></router-link>
        </div>
        
        <v-layout align-center justify-center>
          <v-flex xs10 sm8 md1>
                <v-layout row-sm wrap="" child-flex-sm>
                    <router-link class="spacer" v-show="!loggedIn" to="/" tag="span"><v-btn flat><v-toolbar-title v-text="title"></v-toolbar-title></v-btn></router-link>
                    <router-link v-show="loggedIn" to="/boards" tag="span"><v-btn flat><v-toolbar-title v-text="title"></v-toolbar-title></v-btn></router-link>
              </v-layout>
          </v-flex>
        </v-layout>

        <v-menu offset-y="" v-show="loggedIn">
          <v-btn primary flat slot="activator"><v-icon left="">account_box</v-icon> {{ user.name }}</v-btn>
          <v-list>
            <v-list-tile>
               <v-btn color="info" 
                :loading="loading"
                :disabled="loading"
                @click.native="loader = 'loading'"
                flat>
            <v-icon left="">exit_to_app</v-icon> Logout</v-btn>
            </v-list-tile>
          </v-list>
        </v-menu>
        <div v-show="!loggedIn">
          <router-link to="/login" tag="span"><v-btn color="info" flat><v-icon left="">input</v-icon> Login</v-btn></router-link>
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
import ListBoard from "@/components/board/ListBoards";
import BoardData from "@/mixins/BoardDataMixin.js";
export default {
  components: { ListBoard },
  name: "App",
  data() {
    return {
      boards: [],
      user: [],
      title: "Blogello",
      loader: null,
      loading: false,
      token: localStorage.getItem("token") || null
    };
  },
  computed: {
    //verificamos si el usuario esta logueado returna true o false
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => ((this[l] = false), this.logout()), 2000);

      this.loader = null;
    }
  },
  mounted() {
    let self = this;
    if (self.token) {
      self.getAuth();
      //self.getBoards()
    }
  },
  mixins: [BoardData],
  methods: {
    logout() {
      let self = this;
      let token = "token";
      let response = self.$store.state.services.AuthService.logout(token);
      if (response) {
        localStorage.removeItem("user");
        this.token = null;
        self.$store.state.token = this.token;
        self.$router.push("/");
      } else {
        console.log("Ocurrio un error");
      }
    },
    getAuth() {
      let self = this;
      self.user = JSON.parse(localStorage.getItem("user"));
    }
  }
};
</script>
<style>
  .spacer{
    position: relative;
    left: 100px;
  }
</style>


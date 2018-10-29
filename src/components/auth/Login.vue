<template>
    <v-content>
      <v-spacer></v-spacer>
      <v-flex xs12>
      <v-layout align-center justify-end>
        <v-alert type="error" dismissible v-model="alert" transition="scale-transition">
          {{ message }}
      </v-alert>
    </v-layout>
      </v-flex>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  	<v-text-field v-model="form.email" :rules="emailRules" prepend-icon="mail" label="E-mail"
            required ></v-text-field>

						<v-text-field v-model="form.password" label="Password" type="password" prepend-icon="lock"
            :rules="passwordRules" required > </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
export default {
  data: () => ({
    message: "",
    alert: false,
    form: {
      email: "",
      password: ""
    },
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 8 || 'Password must be less than 8 characters'
      ],
  }),
  methods: {
      login() {
        let self = this;
        self.$store.state.services.AuthService.login(self.form)
        .then(result => {
            let token = result.data.user.api_token;
            localStorage.setItem('token', token);
            self.$router.push('/tasks');
        }).catch(err => {
            self.message = 'Invalid Credentials';
            self.alert = true;
        });
      }
  }
};
</script>
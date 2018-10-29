<template>
<v-content>
  <v-spacer></v-spacer>
  <v-flex xs12>
  <v-layout align-center justify-end>
    <v-alert type="success" dismissible v-model="alert" transition="scale-transition">
  This is a success alert that is closable.
  </v-alert>
</v-layout>
  </v-flex>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md5 transition="slide-y-reverse-transition">
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="form.name" :rules="nameRules" prepend-icon="person"
              label="Name" required ></v-text-field>
                  <v-text-field v-model="form.username" :rules="nameRules" prepend-icon="person"
              :counter="10" label="Username" required ></v-text-field>

						<v-text-field v-model="form.email" :rules="emailRules" prepend-icon="mail" label="E-mail"
            required ></v-text-field>

						<v-text-field v-model="form.password" label="Password" type="password" prepend-icon="lock"
            :rules="passwordRules" required > </v-text-field>

            <v-text-field v-model="passwordRepeat" label="Repeat password" type="password"
            prepend-icon="lock" :rules="passwordRepeatRules" required ></v-text-field>
                </v-form>
                <v-btn round color="error" dark>Sign up with Google</v-btn>
                <v-btn round color="primary" dark>Sign up with Facebook</v-btn>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="register()">Register</v-btn>
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
    valid: false,
    alert: false,
    form: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    passwordRepeat: "",

    nameRules: [
      v => !!v || "Name is required"
    ],

    userNameRules: [
      v => !!v || "Username is required",
      v => v.length <= 10 || "Username must be less than 10 characters"
    ],

    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],

    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Password must be more than 8 characters"
    ],

    passwordRepeatRules: [
      v => !!v || "Password is required",
      v => v.length <= 8 || "Password must be less than 8 characters"
    ]
  }),
  methods: {
    register() {
      let self = this;
      self.$store.state.services.AuthService.register(self.form)
        .then(result => {
          this.alert = true;
          let token = result.data.user.api_token;
          localStorage.setItem('token', token);
        })
        .catch(err => {
          console.log("error ", err);
        });
    }
  }
};
</script>
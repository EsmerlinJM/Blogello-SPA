<template>
    <v-content>
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
                  	<v-text-field v-model="login.email" :rules="emailRules" prepend-icon="mail" label="E-mail"
            required ></v-text-field>

						<v-text-field v-model="login.password" label="Password" type="password" prepend-icon="lock"
            :rules="passwordRules" required > </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
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
    login: {
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
  })
};
</script>
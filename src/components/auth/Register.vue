<template>
<v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md5>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="register.username" :rules="nameRules" prepend-icon="person"
              :counter="10" label="Name" required ></v-text-field>

						<v-text-field v-model="register.email" :rules="emailRules" prepend-icon="mail" label="E-mail"
            required ></v-text-field>

						<v-text-field v-model="register.password" label="Password" type="password" prepend-icon="lock"
            :rules="passwordRules" required > </v-text-field>

            <v-text-field v-model="register.password" label="Repeat password" type="passwordRepeat"
            prepend-icon="lock" :rules="passwordRepeatRules" required ></v-text-field>
                </v-form>
                <v-btn round color="error" dark>Sign up with Google</v-btn>
                <v-btn round color="primary" dark>Sign up with Facebook</v-btn>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Register</v-btn>
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
      register: {
        username: '',
        email: '',
        password: '',
        passwordRepeat: '',
      },
      
      nameRules: [
        v => !!v || 'Userame is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 8 || 'Password must be less than 8 characters'
      ],
      
      passwordRepeatRules: [
        v => !!v || 'Password is required',
        v => v.length <= 8 || 'Password must be less than 8 characters'
      ],
    })
  }
</script>
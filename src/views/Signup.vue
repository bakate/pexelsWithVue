<script>
// import { auth } from '@/firebase'
import { mapActions } from 'vuex'
// const captain = 'console'
export default {
  data() {
    return {
      showPassword: false,
      email: null,
      password: null,
      username: null,
      loginEmail: null,
      loginPassword: null,
    }
  },

  methods: {
    ...mapActions('user', ['signupAction', 'authAction', 'loginAction']),
    signupUser() {
      this.signupAction({ email: this.email, password: this.password }).then(() => {
        this.$refs.form.reset()
      })
    },
    loginUser() {
      this.loginAction({ email: this.loginEmail, password: this.loginPassword }).then(() => {
        this.$refs.loginForm.reset()
      })
    },
  },
}
</script>
<template>
  <div>
    <p>{{ isUserAuth }}</p>

    ><v-card class="mx-auto mt-15" width="450">
      <v-tabs grow>
        <v-tab>
          sign up
        </v-tab>

        <v-tab-item>
          <v-card-text>
            <v-form ref="form">
              <BaseInput label="Username" prepend-icon="mdi-account-circle" v-model="username" />
              <BaseInput label="Email" type="email" prepend-icon="mdi-email" v-model="email" />

              <BaseInput
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                v-model="password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="success">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info" @click.prevent="signupUser">Login</v-btn>
          </v-card-actions>
        </v-tab-item>

        <v-tab>
          sign in
        </v-tab>
        <v-tab-item>
          <v-card-text>
            <v-form ref="loginForm">
              <BaseInput label="Email" type="email" prepend-icon="mdi-email" v-model="loginEmail" />

              <BaseInput
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                v-model="loginPassword"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="error">Reset</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" @click.prevent="loginUser">Login</v-btn>
          </v-card-actions>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

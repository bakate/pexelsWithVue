<script>
// import { auth } from '@/firebase'

import { mapActions } from 'vuex'
import { required, maxLength, email, sameAs, minLength } from 'vuelidate/lib/validators'
// const captain = 'console'
export default {
  data() {
    return {
      email: null,
      password: null,
      username: null,
      loginEmail: null,
      showPassword: false,
      loginPassword: null,
      confirmedPassword: null,
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    username: { required, maxLength: maxLength(10) },
    loginEmail: { required, email },
    loginPassword: { required, minLength: minLength(6) },
    confirmedPassword: { sameAsPassword: sameAs('password') },
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
    clear() {
      this.$v.$reset()
      this.$refs.form.reset()
      this.$refs.loginForm.reset()
    },
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.username.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('E-mail is required')
      !this.$v.email.email && errors.push('Must be valid e-mail')
      return errors
    },
    loginEmailErrors() {
      const errors = []
      if (!this.$v.loginEmail.$dirty) return errors
      !this.$v.loginEmail.required && errors.push('E-mail is required')
      !this.$v.loginEmail.email && errors.push('Must be valid e-mail')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      !this.$v.password.minLength && errors.push('Password must be at least 6 letters')
      return errors
    },
    loginPasswordErrors() {
      const errors = []
      if (!this.$v.loginPassword.$dirty) return errors
      !this.$v.loginPassword.required && errors.push('Password is required')
      !this.$v.loginPassword.minLength && errors.push('Password must be at least 6 letters')
      return errors
    },
    confirmedPasswordErrors() {
      const errors = []
      if (!this.$v.confirmedPassword.$dirty) return errors
      !this.$v.confirmedPassword.sameAsPassword && errors.push('Passwords must be identical')
      return errors
    },
  },
}
</script>
<template>
  <div>
    <v-card class="mx-auto mt-15" width="550">
      <v-tabs grow>
        <v-tab>
          sign up
        </v-tab>

        <v-tab-item>
          <v-card-text>
            <v-form ref="form" @submit.prevent="signupUser">
              <BaseInput
                label="Username"
                prepend-icon="mdi-account-circle"
                :error-messages="nameErrors"
                required
                :counter="10"
                v-model.trim="username"
                @input="$v.username.$touch()"
                @blur="$v.username.$touch()"
              />
              <BaseInput
                label="Email"
                type="email"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                :error-messages="emailErrors"
                prepend-icon="mdi-email"
                v-model.trim="email"
              />

              <BaseInput
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                :error-messages="passwordErrors"
                required
                label="Password"
                v-model.trim="password"
                prepend-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              />
              <BaseInput
                @input="$v.confirmedPassword.$touch()"
                @blur="$v.confirmedPassword.$touch()"
                :error-messages="confirmedPasswordErrors"
                prepend-icon="mdi-lock"
                required
                v-model.trim="confirmedPassword"
                label="Confirm Your Password"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="warning" @clik="clear">Reset</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success">Login</v-btn>
          </v-card-actions>
        </v-tab-item>

        <v-tab>
          sign in
        </v-tab>
        <v-tab-item>
          <v-card-text>
            <v-form ref="loginForm" @submit.prevent="loginUser">
              <BaseInput
                label="Email"
                @input="$v.loginEmail.$touch()"
                @blur="$v.loginEmail.$touch()"
                :error-messages="loginEmailErrors"
                type="email"
                prepend-icon="mdi-email"
                v-model="loginEmail"
              />

              <BaseInput
                @input="$v.loginPassword.$touch()"
                @blur="$v.loginPassword.$touch()"
                :error-messages="loginPasswordErrors"
                label="Password"
                v-model.trim="loginPassword"
                prepend-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="warning" @click="clear">Reset</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" type="submit">Login</v-btn>
          </v-card-actions>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<template>
  <v-card elevation="8" class="px-5 pb-5 pt-2">
    <v-card-title class="">
      Login
    </v-card-title>
    <v-card-subtitle>
      Sign in to your account
    </v-card-subtitle>
    <v-form>
      <v-card-text class="pb-0">
        <v-text-field
            :rules="[rulesEmail.required, rulesEmail.length, rulesEmail.valid]"
            type="email"
            v-model="email"
            clearable="clearable"
            label="Email"
            variant="solo"
            prepend-inner-icon="mdi-email-outline"
        ></v-text-field>
        <v-text-field
            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rulesPassword.required, rulesPassword.length]"
            :type="show ? 'text' : 'password'"
            v-model="password"
            label="Password"
            variant="solo"
            class="input-group--focused mt-3"
            prepend-inner-icon="mdi-lock-outline"
            @click:append-inner="show = !show"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="pt-0">
        <v-row class="px-5 py-2">
          <v-col cols="12" md="6" class="pa-0">
            <StayInSystemCheckBox/>
          </v-col>
          <v-col cols="6" md="3" class="pa-0 pe-1">
            <SubmitButton/>
          </v-col>
          <v-col cols="6" md="3" class="pa-0 ps-1">
            <ResetButton/>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-divider></v-divider>
    </v-form>
    <v-row class="px-5 mt-5" justify="center">
      <v-col cols="11" class="pt-0 text-center">
        Don't have an account?
        <router-link to="register"
                     class="text-decoration-none text-teal-lighten-2">
          Please, sign up!
        </router-link>
      </v-col>
    </v-row>
    <v-row class="px-5 mt-5" justify="center">
      <v-col cols="12" md="6" class="pt-0">
        <ForgotPasswordButton/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import EmailInput from "@/components/controls/input/EmailInput";
import PasswordInput from "@/components/controls/input/PasswordInput";
import StayInSystemCheckBox from "@/components/controls/checkbox/StayInSystemCheckBox";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import ForgotPasswordButton from "@/components/controls/button/ForgotPasswordButton";


export default {
  name: "LoginForm",
  components: {ForgotPasswordButton, ResetButton, SubmitButton, StayInSystemCheckBox, PasswordInput, EmailInput},
  data: () => ({
    email: '',
    password: '',
    show: false,
    rulesPassword: {
      required: v => !!v || 'Required',
      length: v => v.length >= 6 || 'Password length must not be less than 6 characters'
    },
    rulesEmail: {
      required: v => !!v || 'Required',
      length: v => (v.length >= 10 && v.length <= 50) ||
          'Email length must be between 10 and 50 characters',
      valid: v => /^[^@]+@\w+(\.\w+)+\w$/.test(v) || 'Invalid email format'
    }
  }),
}
</script>

<style scoped>

</style>
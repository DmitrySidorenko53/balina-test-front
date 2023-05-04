<template>
  <v-card elevation="8" class="px-5 pb-5 pt-2">
    <v-card-title>
      Register
    </v-card-title>
    <v-card-subtitle>
      Create new account
    </v-card-subtitle>
    <v-form @submit.prevent="handleRegister()">
      <v-card-text class="pb-0">
        <EmailInput v-model="registerModel.email"/>
        <PasswordInput v-model="registerModel.password"/>
        <ConfirmPassword v-model="registerModel.confirmPassword" :password="registerModel.password"/>
      </v-card-text>
      <v-card-actions class="pt-0">
        <v-row class="px-5 py-2">
          <v-col cols="12" md="6" class="pa-0">
            <PersonalDataCheckBox v-model="registerModel.personalDataAgreement"/>
          </v-col>
          <v-col cols="6" md="3" class="pa-0 pe-2">
            <SubmitButton/>
          </v-col>
          <v-col cols="6" md="3" class="pa-0">
            <ResetButton/>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-divider></v-divider>
    </v-form>
    <v-row class="px-5 mt-5" justify="center">
      <v-col cols="11" class="pt-0 text-center">
        Do you have an account?
        <router-link to="login"
                     class="text-decoration-none text-teal-lighten-2">
          Please, sign in!
        </router-link>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import EmailInput from "@/components/controls/input/EmailInput";
import PasswordInput from "@/components/controls/input/PasswordInput";
import PersonalDataCheckBox from "@/components/controls/checkbox/PersonalDataCheckBox";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import ConfirmPassword from "@/components/controls/input/ConfirmPassword";
import axios from "axios";
import RegisterModel from "@/models/RegisterModel";
import AuthService from '../services/auth.service';

export default {
  name: "RegisterForm",
  components: {
    ConfirmPassword,
    ResetButton, SubmitButton, PersonalDataCheckBox, PasswordInput, EmailInput
  },
  data: () => ({
    registerModel: new RegisterModel(
      '','','',null
    ),
    message: ''
  }),
  computed: {
    loggedIn() {
      return this.$store.getters.getLoggedStatus;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/home');
    }
  },
  methods: {
    handleRegister() {
      this.message='';
      this.$store.dispatch('auth/register', this.registerModel).then(
          data => {
            this.message = data.message;
            this.router.push('login')
          },
          error => {
            this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
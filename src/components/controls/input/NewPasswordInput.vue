<template>
  <v-text-field
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.length]"
      :type="show ? 'text' : 'password'"
      :value="newPassword"
      @input="newPassword = $event.target.value"
      label="New Password"
      variant="solo"
      class="input-group--focused mt-3"
      prepend-inner-icon="mdi-lock-outline"
      @click:append-inner="show = !show"
  ></v-text-field>
  <v-text-field
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.length, confirmationRules.match]"
      :type="show ? 'text' : 'password'"
      :value="confirmPassword"
      @input="confirmPassword = $event.target.value"
      label="Confirm Password"
      variant="solo"
      class="input-group--focused mt-3"
      prepend-inner-icon="mdi-lock-outline"
      @click:append-inner="show = !show"
  ></v-text-field>
</template>

<script>
export default {
  name: "NewPasswordInput",
  data() {
    return {
      show: false,
      newPassword: '',
      confirmPassword: '',
      rules: {
        required: v => !!v || 'Required',
        length: v => v.length >= 6 || 'Password length must not be less than 6 characters',
      },
      confirmationRules: {
        match: v => v === this.newPassword || 'Passwords must match'
      }
    }
  },
}
</script>

<style scoped>
</style>
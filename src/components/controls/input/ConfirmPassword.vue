<template>
  <v-text-field
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.length, confirmationRules.match]"
      :type="show ? 'text' : 'password'"
      v-model="confirmPassword"
      @input="$emit('update:confirmPassword', $event.target.value)"
      label="Confirm Password"
      variant="solo"
      class="input-group--focused mt-3"
      prepend-inner-icon="mdi-lock-outline"
      @click:append-inner="show = !show"
  ></v-text-field>
</template>

<script>
export default {
  name: "ConfirmPassword",
  data() {
    return {
      show: false,
      rules: {
        required: v => !!v || 'Required',
        length: v => v.length >= 6 || 'Password length must not be less than 6 characters',
      },
      confirmationRules: {
        match: v => v === this.password || 'Passwords must match'
      }
    }
  },
  props: {
    password: String
  }
}
</script>

<style scoped>

</style>
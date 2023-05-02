
<template>
  <v-text-field
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.length]"
      :type="show ? 'text' : 'password'"
      v-model="password"
      label="Password"
      variant="solo"
      class="input-group--focused mt-3"
      prepend-inner-icon="mdi-lock-outline"
      @click:append-inner="show = !show"
  ></v-text-field>
</template>

<script>
export default {
  name: "PasswordInput",
  data() {
    return {
      show: false,
      password: '',
      rules: {
        required: v => !!v|| 'Required',
        length: v => v.length >= 6 || 'Password length must not be less than 6 characters'
      },
    }
  },
}
</script>

<style scoped>
</style>

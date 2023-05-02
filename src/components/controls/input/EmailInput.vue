<template>
  <v-text-field
      :rules="[rules.required, rules.length, rules.valid]"
      v-model="email"
      clearable="clearable"
      label="Email"
      variant="solo"
      prepend-inner-icon="mdi-email-outline"
  ></v-text-field>
</template>

<script>
export default {
  name: "EmailInput",
  data: () => ({
    email: '',
    rules: {
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
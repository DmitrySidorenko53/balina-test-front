<template>
  <v-checkbox
      v-model="checkbox"
      :rules="[rules.validate]"
      label="Do you agree with our Privacy Policy?"
      required
  ></v-checkbox>

</template>

<script>
export default {
  name: "PersonalDataCheckBox",
  data: () => ({
    checkbox: false,
    rules: {
      validate: v => !!v || 'You must agree to continue!'
    }
  })
}
</script>

<style scoped>
</style>
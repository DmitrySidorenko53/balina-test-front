<template>
  <v-checkbox
      v-model="personalDataAgreement"
      @change="$emit('update:personalDataAgreement', $event.target.checked)"
      :rules="[rules.validate]"
      label="Do you agree with our Privacy Policy?"
      required
  ></v-checkbox>

</template>

<script>
export default {
  name: "PersonalDataCheckBox",
  data: () => ({
    rules: {
      validate: v => !!v || 'You must agree to continue!'
    }
  })
}
</script>

<style scoped>
</style>
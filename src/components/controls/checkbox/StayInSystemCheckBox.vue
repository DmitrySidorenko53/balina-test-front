<template>
  <v-checkbox
      v-model="checkbox"
      label="Remain in system?"
      required
  ></v-checkbox>
</template>

<script>
export default {
  name: "StayInSystemCheckBox",
  data: () =>({
    checkbox: false
  })
}
</script>

<style scoped>
</style>
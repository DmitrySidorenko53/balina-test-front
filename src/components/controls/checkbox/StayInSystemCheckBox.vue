<template>
  <v-checkbox
      v-model="stayInSystem"
      @change="$emit('update:stayInSystem', $event.target.checked)"
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
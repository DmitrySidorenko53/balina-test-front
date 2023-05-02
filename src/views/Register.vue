<template>
  <v-row justify="center" class="mb-10">
    <v-col cols="12" class="pt-0">
      <h2 class="text-center
      text-teal-lighten-1">
        BalinaSoft Group
      </h2>
    </v-col>
    <v-col cols="10" sm="8" md="7" lg="6" xl="5">
      <RegisterForm/>
    </v-col>
  </v-row>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";

export default {
  name: "Register",
  components: {RegisterForm}
}
</script>

<style scoped>

</style>
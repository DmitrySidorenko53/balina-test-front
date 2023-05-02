<template>
  <v-row justify="center" class="mb-10">
    <v-col cols="12" class="pt-0">
      <h2 class="text-center
      text-teal-lighten-1">
        BalinaSoft Group
      </h2>
    </v-col>
    <v-col cols="10" sm="8" md="6" lg="5" xl="4">
      <LoginForm/>
    </v-col>
  </v-row>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "Login",
  components: {LoginForm}
}
</script>

<style scoped>

</style>
<template>
  <v-app>
    <Navigation/>
    <v-main class="bg-grey-lighten-5">
      <v-container class="pt-0">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
</style>
<script>
import Navigation from "@/components/Navigation";

export default {
  components: {Navigation}
}
</script>
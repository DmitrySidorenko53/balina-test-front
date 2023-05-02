<template>
  <v-container>
    <v-app-bar color="teal-lighten-2">
      <v-app-bar-title>
        <v-list-item to="home">
          BalinaSoft Group
        </v-list-item>
      </v-app-bar-title>
      <template v-slot:append>
        <v-list-item>
          <v-btn to="login"
                 icon
          >
            <v-icon icon="mdi-account-arrow-right"></v-icon>
            <v-tooltip
                location="bottom"
                activator="parent"
            >
              Login
            </v-tooltip>
          </v-btn>
          <v-btn to="register"
                 class="me-2"

                 icon="mdi-account-plus"
          >
            <v-icon icon="mdi-account-plus"></v-icon>
            <v-tooltip
                location="bottom"
                activator="parent"
            >
              Register
            </v-tooltip>
          </v-btn>
        </v-list-item>
      </template>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>
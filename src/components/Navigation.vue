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
          <v-btn v-if="!currentUser"
                 to="login"
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
          <v-btn v-if="!currentUser"
                 to="register"
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
          <v-btn v-else
                 class="me-2"
                 icon
                 @click.prevent="logout"
          >
            <v-icon icon="mdi-account-off"></v-icon>
            <v-tooltip
                location="bottom"
                activator="parent"
            >
              Logout
            </v-tooltip>
          </v-btn>
        </v-list-item>
      </template>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
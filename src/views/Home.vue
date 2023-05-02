<template>

</template>

<script>
import {ref} from "vue";
import axios from "axios";

const user = ref();

export default {
  name: "Home",
  mounted() {
    this.logUser();
  },
  methods: {
    logUser() {
      const user = axios.get('/api/user');
      console.log(user)
    }
  }
}
</script>

<style scoped>

</style>
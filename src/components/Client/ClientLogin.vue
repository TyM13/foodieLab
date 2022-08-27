<template>
  <div>
    <h3>Username:<input type="text" name="Username" id="" /></h3>
    <h3>Password:<input type="text" name="Username" id="" /></h3>
    <button @click="user_login">Login</button>
    <router-link to="/SignUp">Sign Up</router-link>
  </div>
</template>

<script>
import axios from "axios";
// import cookies from "vue-cookies";

export default {
  methods: {
    user_login() {
      axios
        .request({
          url: `https://innotechfoodie.ml/api/client-login`,
          headers: {
            "x-api-key": "yLAQeEigreLkBVEovDJJ",
          },
        })
        .then((response) => {
          this.$router.push(`@/views/ProfilePage.vue`);
          response;
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style scoped>
</style>
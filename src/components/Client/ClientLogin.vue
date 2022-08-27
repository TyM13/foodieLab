<template>
  <div>
    <h3>email:<input ref="usr_email" type="text" name="Username" id="" /></h3>
    <h3>
      Password:<input ref="usr_password" type="text" name="Username" id="" />
    </h3>
    <button @click="user_login">Login</button>
    <router-link to="/SignUp">Sign Up</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    user_login() {
      axios
        .request({
          url: `https://innotechfoodie.ml/api/client-login`,
          method: "POST",
          headers: {
            "x-api-key": "yLAQeEigreLkBVEovDJJ",
          },
          data: {
            email: this.$refs[`usr_email`][`value`],
            password: this.$refs[`usr_password`][`value`],
          },
        })
        .then((response) => {
          response;
          this.$router.push(`@/views/ProfilePage.vue`);
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
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
import cookies from "vue-cookies";
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
          cookies.set(`token`, response[`data`][`token`]);
          cookies.set(`client_id`, response[`data`][`client_id`]);
          response;
          this.$router.push(`/ProfilePage`);
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
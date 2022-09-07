<template>
  <div>
    <h3>email:<input ref="usr_email" type="text" name="Username" id="" /></h3>
    <h3>
      Password:<input ref="usr_password" type="text" name="Username" id="" />
    </h3>
    <button @click="user_login">Login</button>
    <nav>
      <router-link to="/SignUp">Sign Up</router-link>
      <router-link to="/RestaurantSignUp">Restaurant Sign Up</router-link>
    </nav>
    <nav>
      <router-link to="/RestaurantLogin">Restaurant Login</router-link>
    </nav>
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
            // gets the value of the input usr_email to send as data to the api
            email: this.$refs[`usr_email`][`value`],
            password: this.$refs[`usr_password`][`value`],
          },
        })
        .then((response) => {
          // sets the token and client_id as a cookie when the client logs in
          cookies.set(`token`, response[`data`][`token`]);
          cookies.set(`client_id`, response[`data`][`client_id`]);
          response;
          // automatically redirects to the find restaurants page (RestaurantsDiscoverPage)
          this.$router.push(`/FindRestaurants`);
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
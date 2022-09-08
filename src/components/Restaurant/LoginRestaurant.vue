<template>
  <div>
    <h3>Email:<input ref="restaurant_email" /></h3>
    <h3>Password:<input ref="restaurant_password" /></h3>
    <!-- when the button is clicked it will call the restaurant_login function -->
    <button @click="restaurant_login">login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    restaurant_login(details) {
      axios
        .request({
          url: "https://innotechfoodie.ml/api/restaurant-login",
          method: "POST",
          headers: {
            "x-api-key": "yLAQeEigreLkBVEovDJJ",
          },
          data: {
            // gets the value of the input restaurant_email/password to send as data to the api
            email: this.$refs[`restaurant_email`][`value`],
            password: this.$refs[`restaurant_password`][`value`],
          },
        })
        .then((response) => {
          details;
          // gets the token from response[`data`][`token`] and sets it as the cookie Restaurant_token and the generated token as the value
          cookies.set(`restaurant_token`, response[`data`][`token`]);
          // gets the restaurantId from response[`data`][`restaurantId`] and sets it as the cookie restaurantId
          cookies.set(`restaurant_id`, response[`data`][`restaurantId`]);
          // sends you to the RestaurantProfilePage
          this.$router.push(`/RestaurantProfilePage`);
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
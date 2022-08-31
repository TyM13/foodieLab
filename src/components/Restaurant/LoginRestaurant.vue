<template>
  <div>
    <h3>Email:<input ref="restaurant_email" type="text" /></h3>
    <h3>Password:<input ref="restaurant_password" type="text" /></h3>
    <button @click="restaurant_login">login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  restaurant_login() {
    axios
      .request({
        url: "https://innotechfoodie.ml/api/restaurant-login",
        headers: {
          "x-api-key": "yLAQeEigreLkBVEovDJJ",
        },
        data: {
          email: this.$refs[`restaurant_email`][`value`],
          password: this.$refs[`restaurant_password`][`value`],
        },
      })
      .then((response) => {
        cookies.set(`Restaurant_token`, response[`data`][`token`]);
        cookies.set(`Restaurant_id`, response[`data`][`Restaurant_id`]);
        response;
        // this.$router.push(`/RestaurantLogin`);
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style scoped>
</style>
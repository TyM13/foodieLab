<template>
  <div>
    <h3>Email:<input ref="restaurant_email" type="text" /></h3>
    <h3>name<input ref="restaurant_name" type="text" /></h3>
    <h3>address<input ref="restaurant_address" type="text" /></h3>
    <h3>phone_number<input ref="restaurant_phone_number" type="text" /></h3>
    <h3>bio<input ref="restaurant_bio" type="text" /></h3>
    <h3>city<input ref="restaurant_city" type="text" /></h3>
    <h3>profile_url<input ref="restaurant_profile_url" type="url" /></h3>
    <h3>banner_url<input ref="restaurant_banner_url" type="url" /></h3>
    <h3>Password:<input ref="restaurant_password" type="text" /></h3>
    <button @click="restaurant_signup">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    restaurant_signup() {
      axios
        .request({
          url: " https://innotechfoodie.ml/api/restaurant",
          method: "POST",
          headers: {
            "x-api-key": "yLAQeEigreLkBVEovDJJ",
          },
          data: {
            email: this.$refs[`restaurant_email`][`value`],
            name: this.$refs[`restaurant_name`][`value`],
            address: this.$refs[`restaurant_address`][`value`],
            phone_number: this.$refs[`restaurant_phone_number`][`value`],
            bio: this.$refs[`restaurant_bio`][`value`],
            city: this.$refs[`restaurant_city`][`value`],
            profile_url: this.$refs[`restaurant_profile_url`][`value`],
            banner_url: this.$refs[`restaurant_banner_url`][`value`],
            password: this.$refs[`restaurant_password`][`value`],
          },
        })
        .then((response) => {
          cookies.set(`restaurant_token`, response[`data`][`token`]);
          cookies.set(`restaurant_id`, response[`data`][`RestaurantId`]);
          response;
          this.$router.push(`/RestaurantLogin`);
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
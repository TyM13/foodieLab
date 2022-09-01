<template>
  <div>
    <div v-for="(response, index) in response" :key="index">
      {{ response[`data`][0][`email`] }}
    </div>
    <h3 ref="restaurant_name">name</h3>
    <h3 ref="restaurant_address">address</h3>
    <h3 ref="restaurant_phone_number">phone number</h3>
    <h3 ref="restaurant_bio">bio</h3>
    <h3 ref="restaurant_city">city</h3>
    <h3 ref="restaurant_profile_url">profile url</h3>
    <h3 ref="restaurant_banner_url">banner url</h3>
    <h3 ref="restaurant_password">Password:</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .request({
        url: `https://innotechfoodie.ml/api/restaurants`,
        headers: {
          "x-api-key": `yLAQeEigreLkBVEovDJJ`,
        },
      })
      .then((response) => {
        // this.$refs[`restaurant_name`][`innerText`] =
        //   response[`data`][0][`name`];
        // restaurant_info;
        response;
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style scoped>
</style>
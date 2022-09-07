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
    <button @click="restaurant_update_changes">Save Changes</button>
    <nav>
      <router-link to="/RestaurantDeleteAccount">Delete Account</router-link>
      <router-link to="/RestaurantMenu">Edit Menu</router-link>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    restaurant_update_changes() {
      let token_num = cookies.get(`Restaurant_token`);
      axios
        .request({
          url: `https://innotechfoodie.ml/api/restaurant`,
          method: "PATCH",
          headers: {
            "x-api-key": `yLAQeEigreLkBVEovDJJ`,

            token: token_num,
          },
          data: {
            email: this.$refs[`restaurant_email`][`value`],
          },
        })
        .then((response) => {
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
<template>
  <div>
    <section>
      <h3>Password<input ref="restaurant_password" type="text" /></h3>
      <!-- when the button is clicked it will call the restaurant_delete_profile function -->
      <button @click="restaurant_delete_profile">Delete Profile</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    restaurant_delete_profile() {
      // gets the cookie Restaurant_token and sets it to the variable token_num
      let token_num = cookies.get(`Restaurant_token`);
      axios
        .request({
          url: `https://innotechfoodie.ml/api/restaurant`,
          method: "DELETE",
          headers: {
            "x-api-key": `yLAQeEigreLkBVEovDJJ`,
            token: token_num,
          },
          data: {
            // gets the value of the input restaurant_password to send as data to the api to delete the account (need to put code to delete cookies)
            password: this.$refs[`restaurant_password`][`value`],
          },
        })
        .then((response) => {
          // on success sends you to the login page
          this.$router.push(`/`);
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
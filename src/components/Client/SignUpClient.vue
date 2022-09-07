<template>
  <div>
    <h3 class="user_sign_up">Email:<input ref="user_email" type="text" /></h3>
    <h3 class="user_sign_up">
      First Name:<input ref="user_fname" type="text" />
    </h3>
    <h3 class="user_sign_up">
      Last Name:<input ref="user_lname" type="text" />
    </h3>
    <h3 class="user_sign_up">img_url:<input ref="user_img" type="url" /></h3>
    <h3 class="user_sign_up">UserName:<input ref="user_name" type="text" /></h3>
    <h3 class="user_sign_up">Password:<input ref="user_pwd" type="text" /></h3>
    <!-- on click it calls the function update_changes -->
    <button @click="user_signup">sign up</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  methods: {
    user_signup() {
      axios
        .request({
          url: "https://innotechfoodie.ml/api/client",
          method: "POST",
          headers: {
            "x-api-key": "yLAQeEigreLkBVEovDJJ",
          },
          data: {
            // gets the value of the refs to send as data to the api to create a profile
            email: this.$refs[`user_email`][`value`],
            first_name: this.$refs[`user_fname`][`value`],
            last_name: this.$refs[`user_lname`][`value`],
            image_url: this.$refs[`user_img`][`value`],
            username: this.$refs[`user_name`][`value`],
            password: this.$refs[`user_pwd`][`value`],
          },
        })
        .then((response) => {
          //when the profile is created it will set the token and client_id as cookies
          cookies.set(`token`, response[`data`][`token`]);
          cookies.set(`client_id`, response[`data`][`client_id`]);
          response;
          // sends you to the login page
          this.$router.push(`/`);
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


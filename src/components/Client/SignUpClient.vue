<template>
  <div>
    <h3 class="user_sign_up">Email:<input ref="user_email" type="text" /></h3>
    <h3 class="user_sign_up">
      First Name:<input ref="user_fname" type="text" name="" id="" />
    </h3>
    <h3 class="user_sign_up">
      Last Name:<input ref="user_lname" type="text" name="" id="" />
    </h3>
    <h3 class="user_sign_up">
      img_url:<input ref="user_img" type="url" name="" id="" />
    </h3>
    <h3 class="user_sign_up">
      UserName:<input ref="user_name" type="text" name="" id="" />
    </h3>
    <h3 class="user_sign_up">
      Password:<input ref="user_pwd" type="text" name="" id="" />
    </h3>
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
            email: this.$refs[`user_email`][`value`],
            first_name: this.$refs[`user_fname`][`value`],
            last_name: this.$refs[`user_lname`][`value`],
            image_url: this.$refs[`user_img`][`value`],
            username: this.$refs[`user_name`][`value`],
            password: this.$refs[`user_pwd`][`value`],
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][`token`]);
          cookies.set(`client_id`, response[`data`][`client_id`]);
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


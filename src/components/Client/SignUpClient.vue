<template>
  <div>
    <h3 ref="user_email" class="user_sign_up">Email:<input type="text" /></h3>
    <h3 ref="user_fname" class="user_sign_up">
      First Name:<input type="text" name="" id="" />
    </h3>
    <h3 ref="user_lname" class="user_sign_up">
      Last Name:<input type="text" name="" id="" />
    </h3>
    <h3 ref="user_img" class="user_sign_up">
      img_url:<input type="url" name="" id="" />
    </h3>
    <h3 ref="usr_name" class="user_sign_up">
      UserName:<input type="text" name="" id="" />
    </h3>
    <h3 ref="user_pwd" class="user_sign_up">
      Password:<input type="text" name="" id="" />
    </h3>
    <button @click="user_signup">sign up</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    user_signup() {
        this.$refs(`user_email`)[`value`],
        this.$refs(`user_fname`)[`value`],
        this.$refs(`user_lname`)[`value`],
        this.$refs(`user_img`)[`value`],
        this.$refs(`usr_name`)[`value`],
        this.$refs(`user_pwd`)[`value`],
        axios
          .request({
            url: "https://innotechfoodie.ml/api/client",
            method: "POST",
            headers: {
              "x-api-key": "yLAQeEigreLkBVEovDJJ",
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


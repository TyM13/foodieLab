<template>
  <div>
    <h3 ref="user_email" class="user_sign_up">
      Email:<input type="text" name="" id="" />
    </h3>
    <h3 ref="user_fname" class="user_sign_up">
      First Name:<input type="text" name="" id="" />
    </h3>
    <h3 ref="user_lname" class="user_sign_up">
      Last Name:<input type="text" name="" id="" />
    </h3>
    <h3 ref="user_img" class="user_sign_up">
      img_url:<input type="url" name="" id="" />
    </h3>
    <h3 ref="user_name" class="user_sign_up">
      UserName:<input type="text" name="" id="" />
    </h3>
    <h3 ref="user_pwd" class="user_sign_up">
      Password:<input type="text" name="" id="" />
    </h3>
    <button @click="user_signup">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    user_signup() {
      axios
        .request({
          url: `https://innotechfoodie.ml/api/client`,
          methods: "POST",
          headers: {
            "https://innotechfoodie.ml/api/client": "yLAQeEigreLkBVEovDJJ",
          },
        })
        .then((response) => {
          this.$refs[`user_sign_up`][`value`]; // seeing if i can do it all as a class if not use refs
          response;
        })
        .catch((error) => {
          error;
        });
    },
  },

  // mounted() {axios.request({
  //     url: `https://innotechfoodie.ml/api/client`,
  //         methods: "POST",
  //         headers: {
  //           "https://innotechfoodie.ml/api/client": "yLAQeEigreLkBVEovDJJ",
  //         },
  // }).then((response) =>{
  //         this.$refs[`user_signup`][`value`];
  //         response;
  // }).catch((error) => {
  // error;
  // }) },
};
</script>

<style scoped>
</style>


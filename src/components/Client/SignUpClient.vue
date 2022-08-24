<template>
  <div>
    <h3>Email:<input type="text" name="" id="" /></h3>
    <h3>First Name:<input type="text" name="" id="" /></h3>
    <h3>Last Name:<input type="text" name="" id="" /></h3>
    <h3>img_url:<input type="text" name="" id="" /></h3>
    <h3>UserName:<input type="text" name="" id="" /></h3>
    <h3>Password:<input type="text" name="" id="" /></h3>
    <button>Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    User_signup() {
      axios
        .request({
          url: `https://innotechfoodie.ml/api/client`,
          methods: "POST",
          headers: {
            "https://innotechfoodie.ml/api/client": "yLAQeEigreLkBVEovDJJ",
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
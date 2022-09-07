<template>
  <div>
    <section>
      <h3>Password<input ref="client_password" type="text" /></h3>
      <!-- when the button Profile is clicked it will run the function delete_profile  -->
      <button @click="delete_profile">Delete Profile</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  // data() {
  //   return {
  //     client_token: cookies.get(`token`),
  //   };
  // },

  methods: {
    delete_profile() {
      // gets the cookies token (name, value) and sets it as the variable token_num
      let token_num = cookies.get(`token`);
      axios
        .request({
          url: `https://innotechfoodie.ml/api/client`,
          method: "DELETE",
          headers: {
            "x-api-key": `yLAQeEigreLkBVEovDJJ`,
            token: token_num,
          },
          data: {
            // gets the value of the input client_password to send as data to the api
            password: this.$refs[`client_password`][`value`],
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
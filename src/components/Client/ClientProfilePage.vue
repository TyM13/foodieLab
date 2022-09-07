<template>
  <div>
    <section>
      <h3>
        Email:
        <input
          ref="client_email"
          type="text"
          name=""
          placeholder="example@hotmail.ca"
        />
      </h3>
      <h3>First Name: <input ref="client_fname" type="text" /></h3>
      <h3>Last Name: <input ref="client_lname" type="text" /></h3>
      <h3>Image: <input ref="client_image" type="url" /></h3>
      <h3>Username: <input ref="client_username" type="text" /></h3>
      <h3>Password: <input ref="client_password" type="text" /></h3>
      <!-- on click it calls the function update_changes -->
      <button @click="update_changes">Save Changes</button>
    </section>
    <router-link to="/ClientDeleteProfile">Delete Account</router-link>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    update_changes() {
      // gets the cookies token (name, value) and sets it as the variable token_num
      let token_num = cookies.get(`token`);
      axios
        .request({
          url: `https://innotechfoodie.ml/api/client`,
          method: "PATCH",
          headers: {
            "x-api-key": `yLAQeEigreLkBVEovDJJ`,

            token: token_num,
          },
          data: {
            // gets the value of the input optional what to change to send as data to the api
            email: this.$refs[`client_email`][`value`],
            first_name: this.$refs[`client_fname`][`value`],
            last_name: this.$refs[`client_lname`][`value`],
            image_url: this.$refs[`client_image`][`value`],
            username: this.$refs[`client_username`][`value`],
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
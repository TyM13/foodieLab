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
      <h3>First Name: <input type="text" name="" id="" /></h3>
      <h3>Last Name: <input type="text" name="" id="" /></h3>
      <h3>Image: <input type="text" name="" id="" /></h3>
      <h3>Username: <input type="text" name="" id="" /></h3>
      <h3>Password: <input type="text" name="" id="" /></h3>
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
            email: this.$refs[`client_email`][`value`],
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
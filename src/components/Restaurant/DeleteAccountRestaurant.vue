<template>
  <div>
    <section>
      <h3>Password<input ref="restaurant_password" type="text" name="" /></h3>
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
            password: this.$refs[`restaurant_password`][`value`],
          },
        })
        .then((response) => {
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
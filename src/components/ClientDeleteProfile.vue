<template>
  <div>
    <section>
      <h3>Password<input ref="client_password" type="text" name="" /></h3>
      <button @click="delete_profile">Delete Profile</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      client_token: cookies.get(`token`),
    };
  },

  methods: {
    delete_profile() {
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
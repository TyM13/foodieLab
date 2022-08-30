<template>
  <div>
    <section>
      <h3>
        Email:
        <input type="text" name="" id="" placeholder="example@hotmail.ca" />
      </h3>
      <h3>First Name: <input type="text" name="" id="" /></h3>
      <h3>Last Name: <input type="text" name="" id="" /></h3>
      <h3>Image: <input type="text" name="" id="" /></h3>
      <h3>Username: <input type="text" name="" id="" /></h3>
      <h3>Password: <input type="text" name="" id="" /></h3>
      <button @click="update_changes">Save Changes</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  mounted() {},
  data() {
    return {
      client_token: cookies.get(`token`),
      // client_id_num: cookies.get(`client_id`),
    };
  },

  methods: {
    update_changes() {
      axios
        .request({
          url: `https://innotechfoodie.ml/api/client`,
          headers: {
            "x-api-key": `yLAQeEigreLkBVEovDJJ`,
            // client_id: `client_id_num`,
            token: `client_token`,
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
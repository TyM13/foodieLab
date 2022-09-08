<template>
  <div></div>
</template>

<script>
// unfinished code
import axios from "axios";
import cookies from "vue-cookies";
export default {
  mounted() {
    let Restaurant_token = cookies.get(`Restaurant_token`);
    axios
      .request({
        url: `https://innotechfoodie.ml/api/menu`,
        method: "PATCH",
        headers: {
          "x-api-key": `yLAQeEigreLkBVEovDJJ`,
          token: Restaurant_token,
        },
        data: {},
      })
      .then((response) => {
        response;
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style scoped>
</style>
<template>
  <div>
    <button>Delete Item</button>
  </div>
</template>

<script>
// unfinished code
import cookies from "vue-cookies";
import axios from "axios";
export default {
  mounted() {
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
          menu_id: this.menu_items,
        },
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
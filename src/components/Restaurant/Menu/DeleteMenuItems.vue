<template>
  <div>
    <button>Delete Item</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    delete_menu_item() {
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
            menu_id: number,
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
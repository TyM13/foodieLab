<template>
  <div></div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    restaurant_selected() {
      let Restaurant_id = cookies.get(`Restaurant_id`);
      axios
        .request({
          url: " https://innotechfoodie.ml/api/restaurant",
          headers: {
            "x-api-key": "yLAQeEigreLkBVEovDJJ",
            restaurant_id: Restaurant_id,
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
  },
};
</script>

<style scoped>
</style>
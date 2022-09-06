<template>
  <div>
    <section v-for="(restaurant, index) in restaurant_info" :key="index">
      <img :src="restaurant[`banner_url`]" />
      <h2>{{ restaurant[`name`] }}</h2>
      <h4>{{ restaurant[`bio`] }}</h4>
      <nav>
        <h2>{{ restaurant[`address`] }}</h2>
        <h4>{{ restaurant[`city`] }}</h4>
        <h4>{{ restaurant[`phone_number`] }}</h4>
        <h4>{{ restaurant[`email`] }}</h4>
      </nav>
    </section>
    <section ref="menu"></section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      restaurant_info: [],
    };
  },

  mounted() {
    let restaurant_id = cookies.get(`restaurant_id`);
    axios
      .request({
        url: " https://innotechfoodie.ml/api/restaurant",
        headers: {
          "x-api-key": "yLAQeEigreLkBVEovDJJ",
        },
        params: {
          restaurant_id: restaurant_id,
        },
      })
      .then((response) => {
        this.restaurant_info = response[`data`];
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
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
    <h1>Menu</h1>
    <section ref="menu" v-for="(menu_item, index) in menu_items" :key="index">
      <h2>{{ menu_item[`name`] }}</h2>
      <img :src="menu_item[`image_url`]" />
      <h2>{{ menu_item[`description`] }}</h2>
      <h2>{{ menu_item[`price`] }}</h2>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      restaurant_info: [],
      menu_items: [],
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

    axios
      .request({
        url: "https://innotechfoodie.ml/api/menu",
        headers: {
          "x-api-key": "yLAQeEigreLkBVEovDJJ",
        },
        params: {
          restaurant_id: restaurant_id,
        },
      })
      .then((response) => {
        this.menu_items = response[`data`];
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
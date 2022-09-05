<template>
  <div>
    <div v-for="(restaurant, index) in restaurants" :key="index">
      <div @click="restaurant_clicked">
        <img :src="restaurant[`banner_url`]" />
        <h2>{{ restaurant[`name`] }}</h2>
        <h4>{{ restaurant[`bio`] }}</h4>
      </div>
      <nav>
        <h2>{{ restaurant[`address`] }}</h2>
        <h4>{{ restaurant[`city`] }}</h4>
        <h4>{{ restaurant[`phone_number`] }}</h4>
        <h4>{{ restaurant[`email`] }}</h4>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      restaurants: [],
    };
  },

  mounted() {
    axios
      .request({
        url: `https://innotechfoodie.ml/api/restaurants`,
        headers: {
          "x-api-key": `yLAQeEigreLkBVEovDJJ`,
        },
      })
      .then((response) => {
        this.restaurants = response[`data`];
        response;
      })
      .catch((error) => {
        error;
      });
  },
  methods: {
    restaurant_clicked(details) {
      cookies.get(`restaurant_id`);
      // response[`data`][`restaurant_id`];
      details;
      this.$router.push(`/RestaurantPage`);
    },
  },
};
</script>

<style scoped>
</style>
<template>
  <div>
    <!-- for loop that goes into restaurants [array of obj] and gets the info to display in the html when called
    when the banner name or bio are clicked it will call the function restaurant_clicked and send the restaurant_id -->
    <div v-for="(restaurant, index) in restaurants" :key="index">
      <div
        @click="restaurant_clicked(restaurant[`restaurant_id`], restaurant_id)"
      >
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
      // created variable called restaurant_id that's an array
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
        // sets the restaurants as the response[`data`] from the api
        this.restaurants = response[`data`];
        response;
      })
      .catch((error) => {
        error;
      });
  },
  methods: {
    restaurant_clicked(restaurant_id) {
      // gets the restaurant_id thats passed to the function and sets it as a cookie called restaurant_id
      cookies.set(`restaurant_id`, restaurant_id);
      // sends you to the restaurant page that you clicked on
      this.$router.push(`/RestaurantPage`);
    },
  },
};
</script>

<style scoped>
</style>
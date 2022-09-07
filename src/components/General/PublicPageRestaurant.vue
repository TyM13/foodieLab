<template>
  <div>
    <!--  for loop that goes in restaurant_info [array of obj] and displays the restaurant info in the html based on what's called -->
    <section
      v-for="(restaurant, index) in restaurant_info"
      :key="`restaurant_${index}`"
    >
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
    <!--  for loop that goes in menu_items [array of obj] and displays the restaurant info in the html based on what's called -->
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
    // gets the cookies restaurant_id (name, value) and sets it as the variable restaurant_id
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
        // sets the respone[data] from the api as the existing variable restaurant_info [array] puts info into the array
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
        // sets the respone[data] from the api as the existing variable menu_items [array] puts info into the array
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
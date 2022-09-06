<template>
  <div>
    <h3>Item Name<input ref="menu_item_name" type="text" /></h3>
    <h3>Item Image<input ref="menu_item_img" type="url" /></h3>
    <h3>Item Description<input ref="menu_item_description" type="text" /></h3>
    <h3>Item Price<input ref="menu_item_price" type="text" /></h3>
    <button @click="Create_Menu_Item"></button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {

  methods: {
    Create_Menu_Item() {
       let Restaurant_token = cookies.get(`Restaurant_token`);
    axios
      .request({
        url: `https://innotechfoodie.ml/api/restaurants`,
        method: "POST",
        headers: {
          "x-api-key": `yLAQeEigreLkBVEovDJJ`,
          Restaurant_token: Restaurant_token,
        },
        data: {
          description: this.$refs[`menu_item_description`][`value`],
          image_url: [`menu_item_img`][`value`],
          name: [`menu_item_name`][`value`],
          price: [`menu_item_price`][`value`],
        },
      })
      .then((response) => {
        response;
      })
      .catch((error) => {
        error;
      }),
    },
  },
};
</script>

<style scoped>
</style>
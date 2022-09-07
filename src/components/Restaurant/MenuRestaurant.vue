<template>
  <div>
    <create-menu-items-restaurant></create-menu-items-restaurant>
    <!-- <edit-menu-items></edit-menu-items>
    <delete-menu-items></delete-menu-items> -->
  </div>
</template>

<script>
import CreateMenuItemsRestaurant from "@/components/Restaurant/Menu/CreateMenuItemsRestaurant.vue";
// import EditMenuItems from "@/components/Restaurant/Menu/EditMenuItems.vue";
// import DeleteMenuItems from "@/components/Restaurant/Menu/DeleteMenuItems.vue";
export default {
  components: {
    CreateMenuItemsRestaurant,
    // EditMenuItems,
    // DeleteMenuItems,
  },
};
</script>

<style scoped>
</style>
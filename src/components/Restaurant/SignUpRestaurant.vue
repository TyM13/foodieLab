<template>
  <div>
    <h3>Email:<input ref="restaurant_email" type="text" /></h3>
    <h3>Password:<input ref="restaurant_password" type="text" /></h3>
    <button @click="restaurant_signup">Sign Up</button>
  </div>
</template>

<script>
export default {
  methods: {
    restaurant_signup() {},
  },
};
</script>

<style scoped>
</style>
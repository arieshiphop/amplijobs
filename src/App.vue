<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;800&display=swap");
:root {
  --blue-color: #003ad2;
  --white-color: #f2f5fd;
  --grey-color: #a6a6a6;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins;
}
body {
  background-image: linear-gradient(315deg, #121212 0%, #212121 90%);
}
</style>

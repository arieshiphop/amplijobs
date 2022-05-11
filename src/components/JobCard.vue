<template>
  <article :style="cssClass" class="card">
    <h3>{{ title }}</h3>
    <img :src="require(`../assets/${logo}`)" alt="Logo" />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: "var(--white-color)",
    },
  },
  computed: {
    cssClass() {
      return {
        "background-color": this.bgColor,
      };
    },
  },
};
</script>

<style>
.card {
  padding: 1.2rem;
  color: white;
  max-width: 20vw;
}
.card img {
  max-width: 100%;
  object-fit: cover;
  max-height: 100%;
}
</style>
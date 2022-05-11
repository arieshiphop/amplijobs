<template>
  <article :style="cssClass" class="card">
    <h3>{{ title }}</h3>
    <img :src="logo" alt="Logo" />
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
</style>
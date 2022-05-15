<template>
  <div class="card">
    <h4>{{ name }}</h4>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <Button text="Ver talento" />
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  flex: 1 1 30%;
  margin: 18px;
  background: rgba(255, 255, 255, 0.13);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.7px);
  -webkit-backdrop-filter: blur(3.7px);
}
.card li {
  list-style: none;
}
@media (max-width: 900px) {
  .card {
    flex: 1 1 50%;
    margin: 0;
  }
}
</style>
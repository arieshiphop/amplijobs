<template>
  <button :class="cssClass">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    cssClass: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style>
button {
  padding: 0.8em 2em;
  border-radius: 5px;
  border: transparent;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  max-width: 10rem;
  font-size: 0.9em;
  transition: 0.1s ease-in-out;
}
button:hover {
  cursor: pointer;
}
button:active {
  transform: translateY(2px);
}
.default {
  background-color: var(--blue-color);
  color: white;
}
.default:hover {
  background: rgb(15, 108, 201);
}
</style>
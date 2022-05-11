<template>
  <header>
    <a href="">
      <img src="../assets/full-logo-white.png" alt="" class="logo" />
    </a>
    <div @click="onClickHamburguer" class="toggleMenu"></div>
    <ul class="navigation">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/jobs">Find a job</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  methods: {
    onClickHamburguer() {
      const toggleMenu = document.querySelector(".toggleMenu");
      const navigation = document.querySelector(".navigation");
      toggleMenu.classList.toggle("active");
      navigation.classList.toggle("active");
    },
  },
};
</script>

<style>
header {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .logo {
  position: relative;
  max-width: 200px;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.6));
}
header ul {
  position: relative;
  display: flex;
}
header ul li {
  list-style: none;
}
header ul li a {
  display: inline-block;
  color: var(--white-color);
  font-weight: 400;
  margin-left: 40px;
  text-decoration: none;
}
@media (max-width: 700px) {
  header {
    padding: 20px 40px;
    z-index: 100;
  }
  header .logo {
    position: relative;
    max-width: 120px;
  }
  header ul {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white-color);
    z-index: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2;
    visibility: hidden;
    opacity: 0;
  }
  .navigation.active {
    opacity: 1;
    visibility: visible;
  }
  header ul li a {
    display: inline-block;
    font-weight: 400;
    margin-left: 0;
    text-decoration: none;
    font-size: 2em;
    margin: 10px 0;
  }
  header ul li a:hover {
    color: var(--blue-color);
  }
  .toggleMenu {
    position: relative;
    width: 40px;
    height: 40px;
    background: url("../assets/menu.png");
    background-position: center;
    background-size: 30px;
    background-repeat: no-repeat;
    z-index: 2;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
  .toggleMenu.active {
    background: url("../assets/close.png");
    background-position: center;
    background-size: 30px;
    background-repeat: no-repeat;
  }
}
</style>
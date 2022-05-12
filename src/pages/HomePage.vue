<template>
  <section class="sec">
    <div class="content">
      <div class="textBox">
        <span class="header">
          <h2>Encuentra una<br /><span class="star">estrella</span></h2>
          <img src="../assets/starlgo.png" alt="" />
        </span>
        <p>
          Busca al trabajador ideal, que encaje con tus necesidades y
          preferencias.
        </p>
        <div class="buttons">
          <Button text="Ver todas las ofertas" class="default" />
          <Button text="Registrate" class="reversed" />
        </div>
      </div>
    </div>
    <!-- <ul class="thumb">
      <li><img src="../assets/logo.png" alt="" /></li>
      <li><img src="../assets/logo.png" alt="" /></li>
      <li><img src="../assets/logo.png" alt="" /></li>
    </ul> -->
  </section>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style scoped>
section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
}
.header {
  display: flex;
  gap: 4rem;
}
.content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.content .textBox {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  max-width: 600px;
}
.content .textBox h2 {
  color: var(--white-color);
  font-size: 3.4em;
  line-height: 1.5em;
  font-weight: 1000;
  text-transform: uppercase;
}
.content .textBox img {
  max-width: 150px;
  height: 150px;
}
.content .textBox h2 span {
  font-size: 2em;
  background: linear-gradient(
    to right,
    #f77a55 0%,
    #eede4c 25%,
    #ff4bf0 50%,
    #9c6ca6 75%,
    #6583c1 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.content .textBox p {
  color: var(--white-color);
  font-weight: 0;
}
.content .textBox a {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 20px;
  background: var(--blue-color);
  color: #fff;
  border-radius: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
}
.thumb {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  display: flex;
}
.thumb li {
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.5s;
}
.thumb li:hover {
  transform: translateY(-15px);
}
.thumb li img {
  max-width: 40px;
}
.star {
  transition: 0.4s ease-in-out;
}
.star:hover {
  text-decoration-line: underline;
  text-decoration-style: "solid";
  text-decoration-color: rgba(0, 92, 230, 1);
  text-decoration-thickness: 5px;
}
.buttons {
  display: flex;
  gap: 1rem;
}
@media (max-width: 1000px) {
  section {
    padding: 40px;
  }
  .header img {
    display: none;
  }
  .content {
    flex-direction: column;
    margin-top: 80px;
  }
  .content .textBox {
    position: relative;
    max-width: 100%;
  }
  .content .textBox h2 {
    font-size: 2.5em;
  }
  .content .textBox span {
    font-size: 1em;
  }
  .content .textBox a {
    font-size: 14px;
    padding: 8px 15px;
  }
  .content .imgBox img {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .content .textBox span {
    font-size: 0.6em;
  }
}
</style>
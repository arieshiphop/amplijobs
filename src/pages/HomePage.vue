<template>
  <section class="sec">
    <div class="content">
      <div class="textBox">
        <span class="header">
          <h2>Encuentra un<br /><span class="star">talento</span></h2>
        </span>
        <p>
          Aquí ellos te buscan, aquí tú encuentras el talento que necesitas.
        </p>
        <Button text="Ver talentos" class="default" />
      </div>
    </div>
    <!-- <ul class="thumb">
      <li><img src="../assets/logo.png" alt="" /></li>
      <li><img src="../assets/logo.png" alt="" /></li>
      <li><img src="../assets/logo.png" alt="" /></li>
    </ul> -->
  </section>
  <video autoplay muted loop id="videoBG">
    <source src="../assets/clouds.mp4" type="video/mp4" />
  </video>
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
#videoBG {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
@media (min-aspect-ratio: 16/9) {
  #videoBG {
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ratio: 16/9) {
  #videoBG {
    width: auto;
    height: 100%;
  }
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
  color: black;
  font-size: 3em;
  line-height: 1.5em;
  font-weight: 1000;
  text-transform: uppercase;
}
.content .textBox img {
  max-width: 200px;
}
.content .textBox h2 span {
  font-size: 2em;
  background: linear-gradient(
    to right,
    #55a9f7 0%,
    #4c4fee 25%,
    #c64bff 50%,
    #bd29b0 75%,
    #e6217d 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.content .textBox p {
  color: black;
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
@media (max-width: 648px) {
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
    font-size: 2em;
  }
  .content .textBox a {
    font-size: 14px;
    padding: 8px 15px;
  }
  .content .imgBox img {
    display: none;
  }
}
@media (min-width: 2048px) {
  .content .textBox h2 {
    font-size: 10em;
  }
  .content .textBox p {
    font-size: 4em;
  }
  button {
    font-size: 4em;
  }
}
</style>
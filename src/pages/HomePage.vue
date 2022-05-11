<template>
  <section class="sec">
    <Navbar />
    <div class="content">
      <div class="textBox">
        <h2>Find your<br /><span>STAR</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab,
          voluptatem ipsam rem explicabo id iure voluptates ipsa aliquam facere,
          deleniti odit quo hic velit sequi itaque assumenda repellat facilis.
        </p>
        <Button text="View all offers" class="default" />
      </div>
      <div class="cards">
        <JobCard
          title="Empresalia"
          logo="https://media-exp1.licdn.com/dms/image/C4D0BAQFpPZVRx0WJnQ/company-logo_200_200/0/1625143570989?e=2147483647&v=beta&t=H2HG8Fk33LU4YDqW6h0Z37tV4YT_tQqOtWokqlks1V4"
          :bgColor="black"
        />
      </div>
    </div>
    <!-- <ul class="thumb">
      <li><img src="../assets/logo.png" alt="" /></li>
      <li><img src="../assets/logo.png" alt="" /></li>
      <li><img src="../assets/logo.png" alt="" /></li>
    </ul> -->
  </section>
  <section class="sec">
    <div class="content">
      <div class="textBox"></div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Button from "../components/Button.vue";
import JobCard from "../components/JobCard.vue";
export default {
  components: {
    Navbar,
    Button,
    JobCard,
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
  background: var(--white-color);
  transition: 0.5s;
}
.content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  color: #000;
  font-size: 3.4em;
  line-height: 1.5em;
  font-weight: 1000;
  text-transform: uppercase;
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
  color: #000;
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
@media (max-width: 648px) {
  section {
    padding: 40px;
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
    font-size: 3em;
  }
  .content .textBox a {
    font-size: 14px;
    padding: 8px 15px;
  }
  .content .imgBox img {
    display: none;
  }
}
</style>
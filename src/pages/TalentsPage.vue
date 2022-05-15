<template>
  <section class="sec">
    <div class="input-wrapper">
      <input
        class="input"
        name="text"
        placeholder="Busca por puesto"
        type="text"
      />
      <Button text="Buscar" class="reversed" />
    </div>
    <div class="grid_container">
      <TalentCard
        class="grid_item"
        title="Fullstack developer"
        description="Soy un desarrollador fullstack bien elegante como un bogavante y tu no jejeje"
        name="Iker"
      />
      <TalentCard
        class="grid_item"
        title="Fullstack developer"
        description="Soy un desarrollador fullstack bien elegante como un bogavante y tu no jejeje"
        name="Iker"
      />
      <TalentCard
        class="grid_item"
        title="Fullstack developer"
        description="Soy un desarrollador fullstack bien elegante como un bogavante y tu no jejeje"
        name="Iker"
      />
      <TalentCard
        class="grid_item"
        title="Fullstack developer"
        description="Soy un desarrollador fullstack bien elegante como un bogavante y tu no jejeje"
        name="Iker"
      />
      <TalentCard
        class="grid_item"
        title="Fullstack developer"
        description="Soy un desarrollador fullstack bien elegante como un bogavante y tu no jejeje"
        name="Iker"
      />
    </div>
  </section>
</template>

<script>
import Button from "../components/Button.vue";
import TalentCard from "../components/TalentCard.vue";
export default {
  name: "Talents",
  components: {
    Button,
    TalentCard,
  },
};
</script>

<style scoped>
.sec {
  display: flex;
  flex-direction: column;
}
.grid_container {
  display: flex;
  margin-top: 1rem;
  max-height: 60vh;
  width: 80vw;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 1rem;
  flex-flow: row wrap;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 45px 108px;
    grid-auto-rows: minmax(125px, auto);
  }
}
.input-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.input-wrapper input {
  background-color: #eee;
  border: none;
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
  width: 13em;
  border-radius: 1rem;
  color: var(--blue-color);
  box-shadow: 0 0.4rem #dfd9d9;
  cursor: pointer;
}

.input-wrapper input:focus {
  outline-color: var(--blue-color);
}
@media (max-width: 800px) {
  .grid_container {
    gap: 1.4rem;
  }
}
</style>
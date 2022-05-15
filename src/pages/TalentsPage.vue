<template>
  <section class="sec">
    <div class="grid_container">
      <TalentCard
        class="grid_item"
        title="Fullstack developer"
        description="no lo se"
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
import TalentCard from "../components/TalentCard.vue";
export default {
  name: "Talents",
  components: {
    TalentCard,
  },
};
</script>

<style scoped>
.grid_container {
  display: flex;
  flex-flow: row wrap;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 45px 108px;
    grid-auto-rows: minmax(125px, auto);
  }
}
</style>
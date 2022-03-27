<template>
  <div>
    <h1 class="text-center mt-5">
      <strong>{{ title }}</strong>
    </h1>
    <Card :gamesProps="gameList" />
  </div>
</template>

<script>
import Card from "@/components/CardGame.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      title: "Lista de Juegos Disponibles",
    };
  },
  computed: {
    ...mapState(["gameList"]),
  },
  components: {
    Card,
  },
};
</script>

<style></style>

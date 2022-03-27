<template>
  <div class="container mt-5">
    <div class="row justify-content-evenly">
      <div
        class="card m-3 g-0"
        style="width: 21rem"
        v-for="(game, i) in gamesProps"
        :key="i"
      >
        <div
          class="bgimg"
          :style="`background-image: url(${game.background_image})`"
        ></div>
        <div class="card-body">
          <h5 class="card-title">{{ game.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Rating: {{ game.rating }}</li>
          <li class="list-group-item">Released: {{ game.released }}</li>
          <li class="list-group-item">Updated: {{ game.updated }}</li>
        </ul>

        <div class="card-body text-center">
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modal"
            @click="loadTitle(game.name)"
          >
            Opinar
          </button>
        </div>
        <ModalComp :gameTitleProps="gameTitleCard" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ModalComp from "../components/ModalComp.vue";
export default {
  name: "CardGame",
  data() {
    return {
      gameTitleCard: "",
    };
  },

  props: {
    gamesProps: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState(["gameList"]),
  },
  methods: {
    loadTitle(gameName) {
      this.gameTitleCard = gameName;
    },
  },
  components: {
    ModalComp,
  },
};
</script>

<style>
.bgimg {
  height: 13rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  --bs-gutter-x: 0;
}
</style>

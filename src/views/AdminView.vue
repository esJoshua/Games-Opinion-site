<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center mt-5">
        <strong>{{ title }}</strong>
      </h1>
    </div>
    <div class="row mt-5" v-if="opiniones.length">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Persona</th>
            <th scope="col">Juego</th>
            <th scope="col">Opinión</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(opinion, i) in opiniones" :key="i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ opinion.name }}</td>
            <td>{{ opinion.gameTitle }}</td>
            <td>{{ opinion.opinion }}</td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="DELETE_OPINION(i)"
              >
                Eliminar
              </button>
            </td>
            <td>
              <router-link :to="{ name: 'Editar', params: { indexProps: i } }"
                ><button
                  type="button"
                  class="btn btn-primary"
                  @click="editGame(i)"
                >
                  Editar
                </button></router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row" v-else>
      <div class="bg-danger bg-opacity-25 py-4 mt-5 fs-3 container">
        <p class="m-0">No existen opiniones por administrar.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "AdminView",
  data() {
    return {
      title: "Administrando la Lista de Opiniones",
      gameOpinionId: "",
    };
  },
  computed: {
    ...mapState(["opiniones"]),
    ...mapGetters(["getOpinion"]),
  },
  methods: {
    ...mapMutations(["DELETE_OPINION"]),
    editGame(index) {
      this.gameOpinionId = index;
      /*  console.log(this.gameOpinionId); */
      this.getOpinion(this.gameOpinionId);
    },
  },
};
</script>

<style></style>

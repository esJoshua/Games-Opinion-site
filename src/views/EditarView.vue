<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center mt-5">
        <strong>{{ title }}{{ opinion.gameTitle }}</strong>
      </h1>
    </div>
    <form class="row">
      <div class="mb-3">
        <label class="form-label">Nombre: </label>
        <input
          type="text"
          class="form-control"
          placeholder="Tu nombre debe ir aquí..."
          v-model="opinion.name"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Opiniones:</label>
        <textarea
          class="form-control"
          placeholder="Tu opinión debe ir aquí..."
          v-model="opinion.opinion"
          rows="3"
        ></textarea>
      </div>
      <div class="footer">
        <router-link to="/administracion"
          ><button type="button" class="btn btn-primary">
            Regresar
          </button></router-link
        >
        <router-link to="/administracion"
          ><button @click="saveOpinion" type="button" class="btn btn-info mx-2">
            Guardar
          </button></router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "EditarView",
  data() {
    return {
      title: "Editando la Lista opinión de: ",
      index: this.$route.params.indexProps,
    };
  },
  props: {
    indexProps: {
      type: Number,
      default: () => 0,
    },
  },
  computed: {
    ...mapState(["opiniones"]),
    ...mapGetters(["getOpinion"]),

    opinion() {
      return this.getOpinion(this.index);
    },
  },
  methods: {
    saveOpinion() {
      alert("Opinión editada con éxito...");
    },
  },
};
</script>

<style></style>

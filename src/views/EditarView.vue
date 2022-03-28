<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center mt-5">
        <strong>{{ title }}</strong>
      </h1>
    </div>
    <form class="row">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Nombre:
        </label>
        <input
          type="text"
          class="form-control"
          id="nombreEdit"
          placeholder="Tu nombre debe ir aquí..."
          :v-model="nombreVmodel"
        />
      </div>
      <div class="mb-3">
        <label for="message-text" class="form-label">Opiniones:</label>
        <textarea
          class="form-control"
          id="opinionesEdit"
          placeholder="Tu opinión debe ir aquí..."
          v-model="opinionVmodel"
          rows="3"
        ></textarea>
      </div>
      <div class="footer">
        <router-link to="/administracion"
          ><button type="button" class="btn btn-primary">
            Regresar
          </button></router-link
        >
        <button type="button" class="btn btn-info mx-2">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "EditarView",
  data() {
    return {
      title: "Editando la Lista opinión de: ",
      nombreVmodel: "",
      opinionVmodel: "",
    };
  },
  computed: {
    ...mapState(["opiniones"]),
  },
};
</script>

<style></style>

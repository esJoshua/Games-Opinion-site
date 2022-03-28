<template>
  <div id="modal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Escribe tu opinion para el juego:
            <h2 class="text-center">{{ gameTitleProps }}</h2>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Nombre:</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                placeholder="Tu nombre debe ir aquí..."
                v-model="nombreVmodel"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label"
                >Opiniones:</label
              >
              <textarea
                class="form-control"
                id="opiniones"
                placeholder="Tu opinión debe ir aquí..."
                v-model="opinionVmodel"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="reset"
          >
            Cerrar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="saveOpinion"
            data-bs-dismiss="modal"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ModalComp",
  data() {
    return {
      nombreVmodel: "",
      opinionVmodel: "",
    };
  },
  props: {
    gameTitleProps: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    ...mapMutations(["PUSH_OPINION"]),
    saveOpinion() {
      const opinion = {
        gameTitle: this.gameTitleProps,
        name: this.nombreVmodel,
        opinion: this.opinionVmodel,
      };
      this.PUSH_OPINION(opinion);
      alert("Opinión enviada con éxito...");
      this.nombreVmodel = "";
      this.opinionVmodel = "";
    },
    reset() {
      this.nombreVmodel = "";
      this.opinionVmodel = "";
    },
  },
};
</script>

<style></style>

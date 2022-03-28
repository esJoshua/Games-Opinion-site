<template>
  <div>
    <h1 class="text-center mt-5">
      <strong>{{ title }}</strong>
    </h1>
    <Accordion class="mt-5" :opinionProps="opiniones" v-if="opiniones.length" />
    <div v-else>
      <div class="bg-danger bg-opacity-25 py-4 mt-5 fs-3 container">
        <p class="m-0">No existen opiniones por mostrar.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Accordion from "../components/AccordionComp.vue";
export default {
  name: "OpinionesView",
  data() {
    return {
      title: "Lista de Opiniones",
    };
  },
  computed: {
    ...mapState(["opiniones"]),
  },
  components: {
    Accordion,
  },
};
</script>

<style></style>

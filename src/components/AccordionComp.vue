<template>
  <div class="accordion" id="OpinionAccordion">
    <div class="accordion-item" v-for="(opinion, i) in opinionProps" :key="i">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#opinion-${i + 1}`"
          aria-expanded="true"
        >
          Opinión creada por: {{ opinion.nombre }}. Para el juego:
          {{ opinion.juego }}
        </button>
      </h2>
      <div
        :id="`opinion-${i + 1}`"
        class="accordion-collapse collapse"
        data-bs-parent="OpinionAccordion"
      >
        <div class="accordion-body">
          <strong>Opinión:</strong> {{ opinion.opinion }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionComp",
  props: {
    opinionProps: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>

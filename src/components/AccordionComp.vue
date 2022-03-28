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
          <span class="mx-2"
            >Opinión creada por: <strong>{{ opinion.name }}.</strong></span
          >
          Para el juego:
          <strong class="mx-1"> {{ opinion.gameTitle }}.</strong>
        </button>
      </h2>
      <div
        :id="`opinion-${i + 1}`"
        class="accordion-collapse collapse"
        data-bs-parent="OpinionAccordion"
      >
        <div class="accordion-body mx-5">
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

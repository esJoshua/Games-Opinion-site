<template>
  <div>
    <h1 class="text-center mt-5">
      <strong>{{ title }}</strong>
      <router-link class="nav-link" to="/administracion/editar"
        >probando view editar
      </router-link>
    </h1>
    <routerView />
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      title: "Administrando la Lista de Opiniones",
    };
  },
};
</script>

<style></style>

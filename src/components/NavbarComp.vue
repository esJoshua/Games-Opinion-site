<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><i class="fas fa-headset mx-1"></i>Games Opinion</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/"
                ><i class="fas fa-home mx-1"></i>Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/opiniones"
                ><i class="fas fa-comments mx-1"></i>Opiniones</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/administracion"
                ><i class="fas fa-users-cog mx-1"></i
                >Administración</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style></style>

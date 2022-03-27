import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/opiniones",
    name: "Opiniones",
    component: () => import("../views/OpinionesView.vue"),
  },
  {
    path: "/administracion",
    name: "Administracion",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "editar",
        name: "Editar",
        component: () => import("../views/EditarView.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "Error404",
    component: () => import("../views/ErrorView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

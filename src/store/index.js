import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameList: [],
    opiniones: [],
  },
  getters: {},
  mutations: {
    SET_DATA(state, payload) {
      state.gameList = payload;
      console.log(payload);
    },
    SET_OPINION(state, payload) {
      state.opiniones.push(payload);
      console.log(payload);
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const request = await axios("games.json");
        commit("SET_DATA", request.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});

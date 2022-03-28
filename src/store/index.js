import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameList: [],
    opiniones: [],
  },
  getters: {
    getOpinion: (state) => (payload) => {
      console.log(state.opiniones[payload]);
      console.log(state.opiniones);
      return state.opiniones[payload];
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.gameList = payload;
      /* console.log(payload); */
    },
    PUSH_OPINION(state, payload) {
      state.opiniones.push(payload);
      /* console.log(payload); */
    },
    DELETE_OPINION(state, payload) {
      state.opiniones.splice(payload, 1);
      /* console.log(payload); */
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

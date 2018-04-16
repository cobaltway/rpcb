import Vuex from 'vuex';

export default () => new Vuex.Store({
  state() {
    return { user: null };
  },
  mutations: {
    SET_USER(state, user) {
      console.log(user);
      state.user = user;
    }
  },
  actions: {
    async LOGIN({ dispatch }, credentials) {
      await this.$axios.$post('/me/login', credentials);
      await dispatch('FETCH_USER');
    },
    async LOGOUT({ commit }) {
      await this.$axios.$post('/me/logout');
      commit('SET_USER', null);
    },
    async REGISTER(_, credentials) {
      await this.$axios.$post('/me/register', credentials);
    },
    async FETCH_USER({ commit }) {
      commit('SET_USER', await this.$axios.$get('/me/user'));
    }
  }
});

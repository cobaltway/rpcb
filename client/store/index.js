import Vuex from 'vuex';

export default () => new Vuex.Store({
  state() {
    return { user: null };
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    async LOGIN({ dispatch }, { login, email, password }) {
      const token = await this.$axios.$post('auth/login', { login, email, password });
      await dispatch('LOGIN_WITH_TOKEN', token);
    },
    async LOGOUT({ commit }) {
      await this.$axios.$post('auth/logout');
      commit('SET_USER', null);
    }
  }
});

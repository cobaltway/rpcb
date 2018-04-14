export default async ({ app, req, store }) => {
  if (req && req.cookies && req.cookies.token) {
    const user = await app.$axios.$get('/auth/user');
    store.commit('SET_USER', user);
  }
};

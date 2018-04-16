export default async ({ req, store }) => {
  if (req && req.cookies && req.cookies['keystone.uid']) {
    await store.dispatch('FETCH_USER');
  }
};

export default (isGlobal = false) => ({
  data() {
    if (isGlobal) return {};
    return { loading: false };
  },
  methods: {
    async doRequest(request, onSuccess, onError) {
      this.loading = true;
      try {
        const data = await request();
        this.loading = false;
        if (onSuccess) onSuccess(data);
        else return data;
      }
      catch (e) {
        this.$toast.open({
          duration: 5000,
          message: e.response && e.response.data && this.$t(e.response.data) || this.$t('UNKNOWN_ERROR'),
          type: 'is-danger'
        });
        this.loading = false;
        if (onError) onError(e);
      }
    }
  }
});

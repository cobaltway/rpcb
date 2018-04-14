export default {
  data() {
    return {
      loading: false,
      error: null,
      errorText: null,
      success: null
    };
  },
  methods: {
    submit(action, onSuccess, onError) {
      this.success = null;
      this.error = null;
      this.loading = true;
      action().then((success) => {
        this.success = success;
        if (onSuccess) onSuccess();
      }).catch((err) => {
        this.error = err;
        this.errorText = this.$t(err);
        if (onError) onError();
      }).then(() => (this.loading = false));
    }
  }
};

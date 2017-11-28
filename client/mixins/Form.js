export default {
    data() {
        return {
            loading: false,
            error: null,
            success: null
        };
    },
    methods: {
        submit(action, onSuccess, onError) {
            this.success = null;
            this.error = null;
            this.loading = true;
            action().then(success => {
                this.success = success;
                if (onSuccess) onSuccess();
            })
            .catch(err => {
                this.error = err;
                if (onError) onError();
            })
            .then(() => (this.loading = false));
        }
    }
};

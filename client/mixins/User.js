export default {
    computed: {
        isAuth() {
            return this.$store.getters.isAuth;
        },
        user() {
            return this.$store.state.user.user;
        }
    }
};

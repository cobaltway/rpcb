<template>
    <div class="field has-addons">
        <template v-if="isAuth">
            <router-link :to="{name: 'me'}" class="control">
                <span class="button is-white">
                    <span> {{ user.name }} </span>
                </span>
            </router-link>

            <label class="control">
                <button class="button is-white" @click="doSignOut">
                    <aw-icon name="power-off"></aw-icon>
                </button>
            </label>
        </template>

        <template v-else>
            <label class="control">
                <button class="button is-white" @click="$store.commit('OPEN', 'SignUp')">
                    S'inscrire
                </button>
            </label>

            <label class="control">
                <button class="button is-white" @click="$store.commit('OPEN', 'SignIn')">
                    <aw-icon name="power-off"></aw-icon>
                </button>
            </label>
        </template>
    </div>
</template>

<script>
    import User from '../../mixins/User';
    import 'vue-awesome/icons/power-off';

    export default {
        mixins: [User],
        methods: {
            doSignOut() {
                this.$store.dispatch('SIGN_OUT').then(() => this.$router.push({name: 'home'}));
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../assets/css/variables.scss";

    img {
        border-radius: $radius;
        display: inline-block;
        vertical-align: top;
        margin-right: 6px;
    }
</style>

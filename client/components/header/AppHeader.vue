<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-left">
                <router-link class="nav-item" :to="{name: 'home'}" exact>
                    <aw-icon name="home"></aw-icon>
                </router-link>
            </div>

            <div class="nav-center nav-menu">
                <a class="nav-item" href="https://discord.gg/YEVG85j" target="_blank">
                    <aw-icon name="discord" scale="1.3"></aw-icon>
                    <span class="xs-hide">&nbsp; Rejoindre Discord </span>
                </a>
                <router-link class="nav-item" :to="{name: 'myChars'}">
                    <aw-icon name="users"></aw-icon>
                    <span class="xs-hide">&nbsp; Mes personnages </span>
                </router-link>
                <a class="nav-item" @click="$store.commit('OPEN', 'NewCharacter')">
                    <aw-icon name="plus-square"></aw-icon>
                    <span class="xs-hide">&nbsp; Nouveau personnage </span>
                </a>
            </div>

            <div class="nav-right">
                <user-auth class="nav-item"></user-auth>
            </div>
        </div>
    </nav>
</template>

<script>
    import User from '../../mixins/User';
    import UserAuth from './UserAuth.vue';
    import 'vue-awesome/icons/home';
    import 'vue-awesome/icons/plus-square';
    import 'vue-awesome/icons/users';

    export default {
        mixins: [User],
        components: {
            UserAuth
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../assets/css/variables.scss";

    nav {
        border-bottom: 1px dashed $grey-light;
        position: fixed;
        width: 100%;
    }

    .nav-menu a {
        font-size: 0.9em;
    }

    @media (max-width: 768px) {
        .nav-menu a {
            font-size: 0.75em;
        }
    }
</style>

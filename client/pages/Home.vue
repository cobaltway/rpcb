<template>
    <div class="section">
        <div class="container">
            <h1 class="title">
                RPCB
            </h1>
            <h2 class="subtitle">
                Communauté de jeu de rôle par messagerie instantannée
            </h2>
            <section>
                <div v-if="isAuth" class="has-text-centered">
                    <hr>
                    <span class="title"> Bienvenue <strong>{{ user.name }}</strong> ! </span>
                    <br><br>
                    <button @click="$store.commit('OPEN', 'NewCharacter')"
                        class="button is-large is-info is-outlined">
                        <span class="icon">
                            <aw-icon name="plus-square" scale="1.8"></aw-icon>
                        </span>
                        &nbsp; Nouveau personnage
                    </button>
                    <br><br>
                    <router-link v-if="user.characters.length"
                        :to="{ name: 'myChars' }"
                        class="button is-large is-info is-outlined">
                        <span class="icon">
                            <aw-icon name="users" scale="1.3"></aw-icon>
                        </span>
                        &nbsp; Vos personnages
                    </router-link>
                    <hr>
                </div>
                <template v-else>
                    <hr>
                    <p>
                        <b>R</b>ole<b>P</b>lay <b>C</b>hat<b>B</b>ox vous permet de créer rapidement de petites fiches faciles à partager pour présenter vos personnages et vos préférences de jeu.
                    </p>
                    <br>
                    <p class="has-text-centered">
                        Créez un compte en dix secondes et commencez à jouer :
                    </p>
                    <br>
                    <sign-up class="box"></sign-up>
                </template>
                <br>
                <p class="has-text-centered">
                    La communauté se regroupe sur <b>Discord</b> pour trouver des partenaires et papotter, venez faire un tour !
                </p>
                <br>
                <div class="has-text-centered">
                    <a href="https://discord.gg/YEVG85j" target="_blank" class="button is-large is-info is-outlined">
                        <span class="icon">
                            <aw-icon name="discord" scale="2"></aw-icon>
                        </span>
                        &nbsp; Rejoindre Discord
                    </a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import User from '../mixins/User';
    import SignUp from '../components/forms/SignUp.vue';
    import 'vue-awesome/icons/user';
    import 'vue-awesome/icons/users';
    import 'vue-awesome/icons/plus-square';
    import 'vue-awesome/icons/key';

    export default {
        mixins: [User],
        components: {
            SignUp
        }
    };
</script>

<style lang="scss" scoped>
</style>

<template>
    <modal name="SignIn">
        <h1 slot="header" class="modal-card-title">
            Connexion à RPCB
        </h1>

        <form @submit.prevent="doSignIn" id="signInForm">
            <div class="field">
                <label class="label"> Identifiant </label>
                <p class="control">
                    <input class="input" type="text" placeholder="Identifiant"
                        v-model="name" required>
                </p>
            </div>
            <div class="field">
                <label class="label"> Mot de passe </label>
                <p class="control">
                    <input class="input" type="password" placeholder="Mot de passe"
                        v-model="password" required>
                </p>
            </div>
            <input type="submit" id="signInSubmit" class="is-hidden" :disabled="!valid">
            <div class="help is-danger" :invisible="!error">
                Mauvaise combinaison utilisateur / mot de passe. 😐
            </div>
        </form>

        <label slot="footer" form="signInForm" for="signInSubmit"
            class="button is-success" :disabled="!valid" :class="{'is-loading': loading}">
            Connexion
        </label>
    </modal>
</template>

<script>
    import Form from '../../mixins/Form';
    import Modal from './Modal.vue';

    export default {
        mixins: [Form],
        components: {
            Modal
        },
        data() {
            return {
                name: '',
                password: ''
            };
        },
        computed: {
            valid() {
                return this.name && this.password;
            }
        },
        methods: {
            doSignIn() {
                if (!this.valid) return;
                this.submit(() => {
                    return this.$store.dispatch('SIGN_IN', {
                        name: this.name,
                        password: this.password
                    });
                }, () => this.$store.commit('CLOSE', 'SignIn'));
            }
        }
    };
</script>

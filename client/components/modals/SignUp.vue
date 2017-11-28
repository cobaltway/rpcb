<template>
    <modal name="SignUp">
        <h1 slot="header" class="modal-card-title">
            S'inscrire sur RPCB
        </h1>

        <form @submit.prevent="doSignUp" id="signUpForm">
            <div class="field">
                <label class="label"> Identifiant </label>
                <p class="control">
                    <input class="input" type="text" placeholder="Identifiant"
                        :class="{'is-success': nameOK && !this.checkingName, 'is-danger': name && !nameOK && !this.checkingName}"
                        v-model="name" required>
                    <p :invisible="!name || checkingName" class="help"
                        :class="{'is-success': nameOK, 'is-danger': !nameOK}">
                        <span v-if="nameOK"> C'est dispo, foncez ! </span>
                        <span v-else> C'est déjà pris, tentez autre chose ! </span>
                    </p>
                </p>
            </div>
            <password-confirm v-model="passwords"></password-confirm>
            <input type="submit" id="signUpSubmit" class="is-hidden" :disabled="!valid">
            <div class="help is-danger" :invisible="!error">
                Arf... quelque-chose ne fonctionne pas comme il devrait. 😬
            </div>
        </form>

        <label slot="footer" form="signUpForm" for="signUpSubmit"
            class="button is-success" :disabled="!valid"
            :class="{'is-loading': loading}">
            S'inscrire
        </label>
    </modal>
</template>

<script>
    import SignUp from '../../mixins/SignUp';
    import Modal from './Modal.vue';

    export default {
        mixins: [SignUp],
        components: {
            Modal
        }
    };
</script>

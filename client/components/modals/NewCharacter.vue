<template>
    <modal name="NewCharacter">
        <h1 slot="header" class="modal-card-title">
            Créer un nouveau personnage
        </h1>

        <form @submit.prevent="createCharacter" id="newCharacterForm">
            <div class="field has-text-centered">
                <label class="label title"> Quel est le nom de votre personnage ? </label>
                <p class="control">
                    <input class="input" type="text" placeholder="Entrez le ici... 😗"
                        v-model="name" required>
                </p>
            </div>
            <input type="submit" id="newCharacterSubmit" class="is-hidden" :disabled="!name">
            <div class="help is-danger" :invisible="!error">
                Wow, eh, quelque-chose n'a pas fonctionné... 😖
            </div>
        </form>

        <label slot="footer" form="newCharacterForm" for="newCharacterSubmit"
            class="button is-success" :disabled="!name" :class="{'is-loading': loading}">
            Go go go !
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
                name: ''
            };
        },
        methods: {
            createCharacter() {
                if (!this.name) return;
                this.submit(() => {
                    return this.$store.dispatch('character/CREATE_CHARACTER', {
                        name: this.name
                    });
                });
            }
        }
    };
</script>

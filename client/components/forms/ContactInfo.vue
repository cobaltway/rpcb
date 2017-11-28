<template>
    <form @submit.prevent="updateContact">
        <horizontal-field name="Courriel" type="email" placeholder="Si vous la jouez à l'ancienne 🙂" v-model="user.contact.email">
            <aw-icon name="envelope"></aw-icon>
        </horizontal-field>
        <horizontal-field name="Discord" placeholder="Bon choix ! 😌" v-model="user.contact.discord">
            <aw-icon name="discord" scale="1.4"></aw-icon>
        </horizontal-field>
        <horizontal-field name="Skype" placeholder="Vous utilisez encore Skype ? 😨" v-model="user.contact.skype">
            <aw-icon name="skype" scale="1.2"></aw-icon>
        </horizontal-field>
        <horizontal-field name="Telegram" placeholder="Tous vos RPs encryptés 😉" v-model="user.contact.telegram">
            <aw-icon name="paper-plane"></aw-icon>
        </horizontal-field>
        <horizontal-submit :loading="loading" :error="error" :success="success"></horizontal-submit>
    </form>
</template>

<script>
    import User from '../../mixins/User';
    import Form from '../../mixins/Form';
    import HorizontalField from '../inputs/HorizontalField.vue';
    import HorizontalSubmit from '../inputs/HorizontalSubmit.vue';
    import 'vue-awesome/icons/envelope';
    import 'vue-awesome/icons/skype';
    import 'vue-awesome/icons/paper-plane';

    export default {
        mixins: [User, Form],
        components: {
            HorizontalField,
            HorizontalSubmit
        },
        methods: {
            updateContact() {
                this.submit(() => {
                    return this.$store.dispatch('MODIFY_USER', {
                        data: { contact: this.user.contact }
                    });
                });
            }
        }
    };
</script>

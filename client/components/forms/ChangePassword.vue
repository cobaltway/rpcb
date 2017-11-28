<template>
    <form @submit.prevent="changePassword">
        <span class="field label"> Vieux : </span>
        <horizontal-field name="Mot de passe actuel" type="password" v-model="this.oldPassword"
            placeholder="Vous n'en voulez plus, on s'en débarasse !">
            <aw-icon name="key"></aw-icon>
        </horizontal-field>
        <span class="field label"> Neuf : </span>
        <password-confirm v-model="passwords"></password-confirm>
        <horizontal-submit :loading="loading" :error="error" :success="success"></horizontal-submit>
    </form>
</template>

<script>
    import User from '../../mixins/User';
    import Form from '../../mixins/Form';
    import HorizontalField from '../inputs/HorizontalField.vue';
    import PasswordConfirm from '../inputs/PasswordConfirm.vue';
    import HorizontalSubmit from '../inputs/HorizontalSubmit.vue';
    import 'vue-awesome/icons/key';

    export default {
        mixins: [User, Form],
        components: {
            HorizontalField,
            PasswordConfirm,
            HorizontalSubmit
        },
        data() {
            return {
                oldPassword: '',
                passwords: ['', '']
            };
        },
        computed: {
            valid() {
                return this.oldPassword && this.passwordsMatch;
            },
            passwordsMatch() {
                return this.passwords[0] && this.passwords[1] && this.passwords[0] === this.passwords[1];
            }
        },
        methods: {
            changePassword() {
                if (!this.valid) return;
                this.submit(() => {
                    return this.$store.dispatch('MODIFY_USER', {
                        data: {
                            oldPassword: this.oldPassword,
                            password: this.passwords[0],
                            passwordConfirm: this.passwords[1]
                        }
                    });
                });
            }
        }
    };
</script>

import Form from './Form.js';
import debounce from 'debounce';
import api from '../api/';
import PasswordConfirm from '../components/inputs/passwordConfirm.vue';

export default {
    mixins: [Form],
    components: {
        PasswordConfirm
    },
    data() {
        return {
            name: '',
            passwords: ['', ''],
            nameAvailible: true,
            checkingName: false
        };
    },
    computed: {
        nameOK() {
            return this.name && this.nameAvailible;
        },
        passwordsMatch() {
            return this.passwords[0] && this.passwords[1] && this.passwords[0] === this.passwords[1];
        },
        valid() {
            return this.nameOK && this.passwordsMatch;
        }
    },
    methods: {
        doSignUp() {
            if (!this.valid) return;
            this.submit(() => {
                return this.$store.dispatch('SIGN_UP', {
                    name: this.name,
                    password: this.passwords[0],
                    passwordConfirm: this.passwords[1]
                });
            }, () => this.$store.commit('CLOSE', 'SignUp'));
        }
    },
    watch: {
        name: debounce(function() {
            if (!this.name) return;
            this.checkingName = true;
            api({
                path: 'GET_user-check-name-$name',
                params: { name: this.name }
            }).then(({valid}) => {
                this.nameAvailible = valid;
                this.checkingName = false;
            });
        }, 300)
    }
};

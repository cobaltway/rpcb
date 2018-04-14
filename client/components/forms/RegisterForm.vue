<template>
  <form @submit.prevent="doSignUp">
    <username-input v-model="name" :valid.sync="validName"/>

    <b-field :label="$t('PASSWORD')" message="&nbsp" horizontal>
      <b-input type="password" :placeholder="$t('SOMETHING_SECRET')" icon="key" v-model="password" autocomplete="new-password" password-reveal/>
    </b-field>

    <div class="has-text-centered">
      <button type="submit" class="button is-primary is-large" :disabled="!valid" :class="{'is-loading': loading}"  v-t="'REGISTER'"/>
    </div>
  </form>
</template>

<script>
  import UsernameInput from '../inputs/UsernameInput.vue';
  import Request from '../../mixins/Request';

  export default {
    mixins: [Request()],
    components: { UsernameInput },
    data() {
      return {
        name: '',
        password: '',
        validName: false
      };
    },
    computed: {
      valid() {
        return this.validName && this.password;
      }
    },
    methods: {
      doSignUp() {
        if (!this.valid) return;
        this.doRequest(() => this.$store.dispatch('SIGN_UP', {
          name: this.name,
          password: this.password
        }));
      }
    }
  };
</script>

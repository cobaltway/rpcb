<template>
  <b-modal name="LOGIN" :active="active" @update:active="$emit('update:active', $event)" :width="300" scroll="keep" has-modal-card>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <h1 class="modal-card-title" v-t="'LOGIN_TO_RPCB'"/>
      </header>

      <section class="modal-card-body">
        <form @submit.prevent="doLogin" id="loginForm">
          <b-field :label="$t('PSEUDO')">
            <b-input :placeholder="$t('MY_PSEUDO')" icon="account" v-model="name"/>
          </b-field>
          <b-field :label="$t('PASSWORD')">
            <b-input type="password" :placeholder="$t('MY_PASSWORD')" icon="key" v-model="password" password-reveal/>
          </b-field>

          <input type="submit" id="loginSubmit" class="is-hidden" :disabled="!valid">
        </form>
      </section>

      <footer class="modal-card-foot">
        <label form="loginForm" for="loginSubmit" class="button is-primary is-large"
          :disabled="!valid" :class="{'is-loading': loading}" style="margin: auto;" v-t="'LOGIN'"/>
      </footer>
    </div>
  </b-modal>
</template>

<script>
  import Request from '../../mixins/Request';

  export default {
    mixins: [Request()],
    props: ['active'],
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
      doLogin() {
        if (!this.valid) return;
        this.doRequest(() => this.$store.dispatch('LOGIN', {
          name: this.name,
          password: this.password
        }));
      }
    }
  };
</script>

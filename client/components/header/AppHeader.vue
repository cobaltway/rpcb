<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/" exact>
        <b-icon icon="home-circle"/>
      </nuxt-link>
    </div>
    <div class="navbar-menu" v-if="user">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/mychars">
          <b-icon icon="account-group"/>
          &nbsp; <span class="xs-hide" v-t="'MY_CHARACTERS'"/>
        </nuxt-link>
        <a class="navbar-item" @click="$store.commit('OPEN', 'NewCharacter')">
          <b-icon icon="account-plus"/>
          &nbsp; <span class="xs-hide" v-t="'NEW_CHARACTER'"/>
        </a>
      </div>
    </div>
    <div class="navbar-end">
      <template v-if="user">
        <nuxt-link class="navbar-item" to="/me">
          <b-icon icon="account-location"/> &nbsp;
          <span style="text-transform: capitalize;"> {{ user.name }} </span>
        </nuxt-link>
        <a class="navbar-item" @click="doSignOut">
          <b-icon icon="power"/>
        </a>
      </template>

      <template v-else>
        <a class="navbar-item" @click="loginModal = true">
          <b-icon icon="power"/>
        </a>
        <login :active.sync="loginModal"/>
      </template>
    </div>
  </nav>
</template>

<script>
    import UserAuth from './UserAuth.vue';
    import Login from '../modals/Login.vue';

    export default {
      components: { UserAuth, Login },
      data() {
        return { loginModal: false };
      },
      computed: {
        user() {
          return this.$store.state.user;
        }
      },
      methods: {
        doSignOut() {
          this.$store.dispatch('SIGN_OUT').then(() => this.$router.push({ name: 'home' }));
        }
      }
    };
</script>

<style lang="scss" scoped>
    @import "../../assets/css/variables.scss";
</style>

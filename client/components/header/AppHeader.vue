<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/" exact>
        <b-icon icon="home-circle"/>
      </nuxt-link>
    </div>
    <div class="navbar-menu" v-if="$store.state.user">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/mychars">
          <b-icon icon="account-multiple"/>
          &nbsp; <span class="xs-hide" v-t="'MY_CHARACTERS'"/>
        </nuxt-link>
        <a class="navbar-item" @click="$store.commit('OPEN', 'NewCharacter')">
          <b-icon icon="account-plus"/>
          &nbsp; <span class="xs-hide" v-t="'NEW_CHARACTER'"/>
        </a>
      </div>
    </div>
    <div class="navbar-end">
      <template v-if="$store.state.user">
        <nuxt-link class="navbar-item" to="/me">
            <span> {{ user.name }} </span>
        </nuxt-link>
        <a class="navbar-item" @click="doSignOut">
          <b-icon icon="power"/>
        </a>
      </template>

      <template v-else>
        <a class="navbar-item" @click="$store.commit('OPEN', 'SignUp')" v-t="'REGISTER'"/>
        <a class="navbar-item" @click="$store.commit('OPEN', 'SignIn')">
          <b-icon icon="power"/>
        </a>
      </template>
    </div>
  </nav>
</template>

<script>
    import UserAuth from './UserAuth.vue';

    export default {
      components: { UserAuth },
      doSignOut() {
        this.$store.dispatch('SIGN_OUT').then(() => this.$router.push({ name: 'home' }));
      }
    };
</script>

<style lang="scss" scoped>
    @import "../../assets/css/variables.scss";
</style>

<template>
  <div class="section">
    <div class="container">
      <h1 class="title" v-t="'RPCB'"/>
      <h2 class="subtitle" v-t="'ROLE_PLAY_COMMUNITY'"/>
      <div v-if="user" class="has-text-centered">
        <hr/>
        <div class="title"> <span v-t="'WELCOME'"/>
          <strong> {{ user.name }} </strong><span v-t="'!'"/>
        </div>
        <a @click="$store.commit('OPEN', 'NewCharacter')" class="button is-large is-info is-outlined">
          <b-icon icon="plus-square"/> &nbsp; <span v-t="'NEW_CHARACTER'"/>
        </a>
        <br/><br/>
        <b-icon icon="users"/> &nbsp; <span v-t="'YOUR_CHARACTERS'"/>
        <hr/>
      </div>
      <template v-else>
        <hr/>
        <p v-html="$t('RPCB_ALLOW_YOU_TO')"/> <br/>
        <p class="has-text-centered" v-html="$t('CREATE_AN_ACCOUNT_QUICKLY')"/> <br/>
        <register-form class="box"/>
      </template>
      <br/> <hr/> <p class="has-text-centered" v-html="$t('COMMUNITY_GET_TOGETHER')"/> <br/>
      <div class="has-text-centered">
        <a href="https://discord.gg/YEVG85j" target="_blank" class="button is-info is-outlined">
          <b-icon icon="discord"/>  &nbsp; <span v-t="'JOIN_DISCORD'"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    import RegisterForm from '../components/forms/RegisterForm.vue';

    export default {
      components: { RegisterForm },
      computed: {
        user() {
          return this.$store.state.user;
        }
      }
    };
</script>

<style lang="scss" scoped>
  .box {
    margin: auto;
    max-width: 600px;
  }
</style>

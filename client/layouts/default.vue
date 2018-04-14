<template>
  <div id="app">
    <section>
      <app-header/>
      <div class="sub-header-content">
        <nuxt/>
      </div>
    </section>
  </div>
</template>

<script>
  import AppHeader from '../components/header/AppHeader.vue';

  export default { components: { AppHeader } };
</script>

<style lang="scss" scoped>
  .sub-header-content {
    padding-top: 52px;
  }
</style>

<template>
  <b-modal name="SignUp" :active="active" @update:active="$emit('update:active', $event)">
    <div class="modal-card">
      <header class="modal-card-head">
        <h1 class="modal-card-title"> S'inscrire sur RPCB </h1>
      </header>
    </div>
    <section class="modal-card-body">
      <register-form @registered="$emit('update:active', false)"/>
    </section>
  </b-modal>
</template>

<script>
    import RegisterForm from '../forms/RegisterForm.vue';

    export default {
      components: { RegisterForm },
      props: ['active']
    };
</script>

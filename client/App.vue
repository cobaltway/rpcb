<template>
    <section>
        <app-header></app-header>
        <div class="sub-header-content">
            <slot></slot>
        </div>
        <all-modals></all-modals>
    </section>
</template>

<script>
    import AppHeader from './components/header/AppHeader.vue';
    import AllModals from './components/modals/AllModals.vue';

    export default {
        components: {
            AppHeader,
            AllModals
        }
    };
</script>

<style lang="scss">
    @import "./styles/bulma.scss";
    @import "./styles/transitions.scss";
    @import "./styles/layout.scss";
    @import "./styles/forms.scss";

    .sub-header-content {
        padding-top: 52px;
    }
</style>

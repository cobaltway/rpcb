<template>
    <div id="app">
        <section>
            <app-header/>
            <div class="sub-header-content">
                <nuxt/>
            </div>
            <all-modals/>
        </section>
    </div>
</template>

<script>
    import AppHeader from '../components/header/AppHeader.vue';
    import AllModals from '../components/modals/AllModals.vue';

    export default {
        components: {
            AppHeader,
            AllModals
        }
    };
</script>

<style>
    .sub-header-content {
        padding-top: 52px;
    }
</style>

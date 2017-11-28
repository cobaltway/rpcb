<template>
    <div class="modal is-active" v-if="show">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <slot name="header"></slot>
                <button class="delete" @click="close"></button>
            </header>

            <section class="modal-card-body">
                <slot></slot>
            </section>

            <footer class="modal-card-foot">
                <slot name="footer"></slot>
            </footer>
          </div>
    </div>
</template>

<script>
    export default {
        props: ['name'],
        computed: {
            show() {
                return this.$store.state.modals[this.name];
            }
        },
        methods: {
            close() {
                this.$store.commit('CLOSE', this.name);
            }
        }
    };
</script>

<style scoped>
    footer {
        justify-content: flex-end;
    }
</style>

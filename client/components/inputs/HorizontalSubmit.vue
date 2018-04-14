<template>
    <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <button type="submit" class="button is-primary"
                        :class="{'is-loading': loading}">
                        Mettre à jour
                    </button>
                    <span v-if="success !== null" class="help is-info">
                        C'est pris en compte ! 😀
                    </span>
                    <span v-else-if="error !== null" class="help is-danger">
                        Quelque-chose ne va pas, yo. 😧
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default { props: ['loading', 'success', 'error'] };
</script>

<style scoped>
    .help {
        display: inline-block;
        vertical-align: sub;
        margin-left: 5px;
    }
</style>

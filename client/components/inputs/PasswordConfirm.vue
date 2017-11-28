<template>
    <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label">Mot de passe (×2)</label>
        </div>
        <div class="field-body">
            <div class="field is-grouped">
                <p class="control is-expanded has-icons-left">
                    <input class="input" type="password" placeholder="Mot de passe"
                        :class="{'is-success': value[0]}"
                        v-model="value[0]" required>
                    <span class="icon is-small is-left">
                        <aw-icon name="key"></aw-icon>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control is-expanded has-icons-left">
                    <input class="input" type="password" placeholder="Répétez"
                        :class="{'is-success': match, 'is-danger': value[0] && value[1] && !match}"
                        v-model="value[1]" required>
                    <span class="icon is-small is-left">
                        <aw-icon name="key"></aw-icon>
                    </span>
                </p>
                <p class="help" :invisible="!value[0] || !value[1]"
                    :class="{'is-success': match, 'is-danger': !match}">
                    <span v-if="match"> Ni-quel ! </span>
                    <span v-else class="help is-danger"> Faites correspondre les mots de passe ! </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        computed: {
            match() {
                return this.value[0] && this.value[1] && this.value[0] === this.value[1];
            }
        },
        watch: {
            password() {
                this.$emit('input', this.value);
            }
        }
    };
</script>

<template>
    <form @submit.prevent="doSignUp">
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Pseudo</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded has-icons-left">
                        <input class="input" type="text" placeholder="Mon super pseudo"
                            :class="{'is-success': nameOK && !this.checkingName, 'is-danger': name && !nameOK && !this.checkingName}"
                            v-model="name" required>
                        <span class="icon is-small is-left">
                            <aw-icon name="user"></aw-icon>
                        </span>
                    </p>
                    <p :invisible="!name || checkingName" class="help"
                        :class="{'is-success': nameOK, 'is-danger': !nameOK}">
                        <span v-if="nameOK"> C'est dispo, foncez ! </span>
                        <span v-else> C'est déjà pris, tentez autre chose ! </span>
                    </p>
                </div>
            </div>
        </div>

        <password-confirm v-model="passwords"></password-confirm>

        <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button type="submit" class="button is-primary" :disabled="!valid"
                            :class="{'is-loading': loading}">
                            En voiture Simone !
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import SignUp from '../../mixins/SignUp';

    export default {
        mixins: [SignUp]
    };
</script>

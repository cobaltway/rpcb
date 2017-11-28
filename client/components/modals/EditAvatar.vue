<template>
    <modal name="EditAvatar">
        <h1 slot="header" class="modal-card-title">
            Changer son avatar
        </h1>

        <file-input :value="avatar" @input="changeAvatar"></file-input>

        <div slot="footer">
            <progress v-if="loading" class="progress" :value="progress" max="100">
                {{ progress }}%
            </progress>
            <div v-else-if="error" class="help is-danger">
                Wow, euh, quelque-chose n'a pas fonctionné. 😟
            </div>
        </div>
    </modal>
</template>

<script>
    import Form from '../../mixins/Form';
    import Modal from './Modal.vue';
    import FileInput from '../inputs/FileInput.vue';

    export default {
        mixins: [Form],
        components: {
            Modal,
            FileInput
        },
        data() {
            return {
                avatar: null,
                progress: 0
            };
        },
        methods: {
            changeAvatar(file) {
                if (Array.isArray(file)) file = file[0];
                if (!file) return;
                this.avatar = file;
                const data = new window.FormData();
                data.append('avatar', file);
                this.submit(() => {
                    return this.$store.dispatch('MODIFY_USER', {
                        data,
                        config: {
                            onUploadProgress: progressEvent => {
                                this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                            }
                        }
                    }).then(() => this.$store.commit('OPEN', 'EditAvatar'));
                });
            }
        }
    };
</script>

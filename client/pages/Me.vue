<template>
    <div class="section">
        <div class="container">
            <div class="has-text-centered">
                <h1 class="title is-2">
                    <aw-icon name="user-circle" scale="1.8"></aw-icon>
                    {{ user.name }}
                </h1>
                <figure class="image is-128x128">
                    <template>
                        <edit-avatar v-model="changeAvatar"></edit-avatar>
                        <button class="button is-white hover-avatar" @click="changeAvatar = true">
                            <aw-icon name="pencil" scale="2"></aw-icon>
                        </button>
                    </template>
                    <img :src="user.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctfQYPcfoA_S5ZxyOYRD0kUCqkva4U5jHB791wtr9qPTe2WS44A'">
                </figure>

                <hr>

                <h2 class="title"> Informations de contact </h2>
                <p class="subtitle">
                    Hey, gardez à l'esprit que tout ce que vous entrez ici est <strong>public</strong>.
                </p>
                <contact-info class="box"></contact-info>

                <h2 class="title"> Changer de mot de passe </h2>
                <change-password class="box"></change-password>
            </div>
        </div>
    </div>
</template>

<script>
    import User from '../mixins/User';
    import EditAvatar from '../components/modals/EditAvatar.vue';
    import ContactInfo from '../components/forms/ContactInfo.vue';
    import ChangePassword from '../components/forms/ChangePassword.vue';
    import 'vue-awesome/icons/user-circle';
    import 'vue-awesome/icons/pencil';

    export default {
        mixins: [User],
        components: {
            EditAvatar,
            ContactInfo,
            ChangePassword
        },
        data() {
            return {
                changeAvatar: false
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import "../assets/css/variables.scss";

    figure {
        display: inline-block;
        border-radius: 5px;
        overflow: hidden;
    }

    .title.is-2 {
        margin-bottom: 25px;
    }

    .hover-avatar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: none;
        border: none;
        opacity: 0;
        transition: opacity $speed $easing;

        &:hover {
            opacity: 0.75;
        }
    }
</style>

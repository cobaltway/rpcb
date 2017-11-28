<template>
    <span>
        <sign-in></sign-in>
        <sign-up></sign-up>
        <new-character></new-character>
        <edit-avatar></edit-avatar>
    </span>
</template>

<script>
    import SignIn from './SignIn.vue';
    import SignUp from './SignUp.vue';
    import NewCharacter from './NewCharacter.vue';
    import EditAvatar from './EditAvatar.vue';

    export default {
        components: {
            SignIn,
            SignUp,
            NewCharacter,
            EditAvatar
        }
    };
</script>

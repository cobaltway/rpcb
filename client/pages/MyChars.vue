<template>
    <div class="section">
        <div class="container">
            <h1 class="title">
                Mes personnages
            </h1>

            <table class="table" v-if="characters.length">
                <thead>
                    <tr>
                        <th>
                            Personnage
                        </th>
                        <th>
                            Public
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="char in characters">
                        <td>
                            {{ char.name }}
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
            <article v-else class="message">
                <div class="message-body has-text-centered">
                    Vous n'avez pas encore de personnage...
                    <br>
                    Qu'est-ce que vous attendez ? 😛
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    import User from '../mixins/User';

    export default {
        mixins: [User],
        computed: {
            characters() {
                console.log(this.user, this.user.user, this.user.characters);
                return this.user.characters;
            }
        }
    };
</script>

<style scoped>

</style>

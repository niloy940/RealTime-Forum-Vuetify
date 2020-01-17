<template>
    <v-container>
        <v-row>
            <v-col md="8">
                <Questions></Questions>
            </v-col>
            Sidebar
        </v-row>
    </v-container>
</template>

<script>
import Questions from './Questions';

    export default {
        name: 'Forum',

        components: {
            Questions,
        },
    }
</script>

<style scoped>

</style>

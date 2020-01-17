<template>
    <div>
  <v-card class="mx-auto" v-for="questions in getQuestions" :key="questions.id">
    <v-card-title class="headline mb-0">{{ questions.title }}</v-card-title>

    <v-card-subtitle class="pb-0">Niloy said 3 hours ago</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
      <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
    export default {
        name: 'Questions',

        mounted() {
            this.$store.dispatch('allQuestions');
        },

        computed: {
            getQuestions() {
                return this.$store.getters.getAllQuestions
            }
        }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Forum</h1>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/forum">
        <v-btn text>
          <span class="mr-2">FORUM</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
      </router-link>

      <router-link v-if="loggedIn" to="/ask">
        <v-btn text>
          <span class="mr-2">Ask Question</span>
        </v-btn>
      </router-link>

      <v-btn href="#" text>
        <span class="mr-2">CATEGORY</span>
      </v-btn>

      <router-link v-if="!loggedIn" to="/login">
        <v-btn text>
          <span class="mr-2">LOGIN</span>
        </v-btn>
      </router-link>

      <router-link v-if="!loggedIn" to="/register">
        <v-btn text>
          <span class="mr-2">REGISTER</span>
        </v-btn>
      </router-link>

      <router-link v-if="loggedIn" to="/logout">
        <v-btn text>
          <span class="mr-2">LOGOUT</span>
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn;
      }
    }
  }
</script>

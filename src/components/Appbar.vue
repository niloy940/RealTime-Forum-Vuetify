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

      <v-btn href="#" text>
        <span class="mr-2">FORUM</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-btn href="#" text>
        <span class="mr-2">ASK QUESTION</span>
      </v-btn>
      <v-btn href="#" text>
        <span class="mr-2">CATEGORY</span>
      </v-btn>
      <v-btn href="#" text>
        <span class="mr-2">LOGIN</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

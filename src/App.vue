<template>
  <v-app>
    <Appbar />

    <v-content>
      <HelloWorld />
    </v-content>

    <AppFooter />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Appbar from "./components/Appbar";
import AppFooter from "./components/Footer";

export default {
  name: "App",

  components: {
    HelloWorld,
    Appbar,
    AppFooter
  },

  data: () => ({
    //
  })
};
</script>

<template>
  <v-app id="inspire">
    <v-app-bar app fixed>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
        app
        fixed
        :mini-variant.sync="drawer">
      <sidebar />
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="px-0">
        <v-layout justify-center align-center class="px-0">
          <app-main />
        </v-layout>
      </v-container>
    </v-main>
    <v-footer app fixed>
      <span style="margin-left:1em">&copy; You</span>
    </v-footer>
  </v-app>
</template>

<script>
import { AppMain, Sidebar } from './components';
export default {
  name: "Layout",
  components: {
    Sidebar,
    AppMain
  },
  data: () => ({
    drawer: true,
  }),
  props: {
    source: String
  }
}
</script>

<style scoped>
.logo {
  width: 16em;
}
</style>
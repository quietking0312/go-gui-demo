<template>
  <v-app id="inspire">
    <v-app-bar app fixed clipped-left>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid class="px-0">
        <v-layout justify-center align-center class="px-0">
          <app-main />
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span style="margin-left:1em">&copy; You</span>
    </v-footer>
  </v-app>
</template>

<script>
import { AppMain } from './components';
export default {
  name: "Layout",
  components: {
    AppMain
  },
  data: () => ({
    drawer: false
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
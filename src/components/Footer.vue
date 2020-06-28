<template>
  <v-footer dark padless>
    <v-card class="flex primary" flat tile>
      <v-card-title>
        <strong class="subheading">Get connected with me through social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — Made with <v-icon color="red">mdi-heart</v-icon> by
        <strong>Bakate</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-twitter', 'mdi-linkedin', 'mdi-github'],
  }),
}
</script>

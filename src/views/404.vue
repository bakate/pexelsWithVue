<template>
  <v-container class="text-center">
    <v-row align="stretch">
      <v-col cols="12">
        <h1 class="display-1">Oops !</h1>
        <h2>
          The
          <template v-if="resource">
            {{ resource }}
          </template>
          you're trying to access doesn't exist
        </h2>
        <v-btn @click="$router.replace({ name: 'home' })" color="warning" large rounded>
          <v-icon>mdi-arrow-left</v-icon>
          <span>Go Home</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
}
</script>

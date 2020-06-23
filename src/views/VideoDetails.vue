<script>
import { mapState } from 'vuex'
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState('videos', ['singleVideo']),
  },
  created() {
    this.$store.dispatch('videos/getSingleVideo', this.id)
  },
}
</script>
<template>
  <div>
    <h2>Hello, I'm the signel video Page with id: {{ $route.params.id }}</h2>
    <h3>{{ singleVideo }}</h3>
    <!-- <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card :href="singleVideo.photographer_url" target="_blank" rel="noreferrer">
            <v-img :src="singleVideo.src.large" height="550" />
            <v-card-text v-text="singleVideo.photographer"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

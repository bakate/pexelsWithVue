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
    ...mapState('photos', ['singlePhoto']),
  },

  created() {
    this.$store.dispatch('photos/getSinglePhoto', this.id)
  },
}
</script>
<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card :href="singlePhoto.photographer_url" target="_blank" rel="noreferrer">
            <v-img :src="singlePhoto.src.large" height="550" />
            <v-card-text v-text="singlePhoto.photographer"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

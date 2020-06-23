<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      page: 1,
    }
  },
  // props: {
  //   id: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  computed: {
    ...mapState('photos', ['curatedPhotos']),
  },
  created() {
    this.$store.dispatch('photos/curated')
  },
}
</script>
<template>
  <div>
    <h2 class="text-center display-2">last curated photos from Pexels</h2>
    <!-- <h2>{{ curatedPhotos.photos }}</h2> -->
    <v-container fluid>
      <v-row>
        <v-col v-for="photo in curatedPhotos" :key="photo.id" cols="12" md="4">
          <v-card link :to="{ name: 'photoDetails', params: { id: photo.id } }">
            <v-img :src="photo.src.medium" height="350" />
            <v-card-text v-text="photo.photographer"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

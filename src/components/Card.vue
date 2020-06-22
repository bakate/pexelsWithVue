<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('photos', {
      allPhotos: state => state.photos,
    }),
  },
}
</script>
<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col v-for="photo in allPhotos" :key="photo.id" cols="12" md="4">
          <v-card link :to="{ name: 'photoDetails', params: { id: photo.id } }">
            <v-img :src="photo.src.medium" height="350" />
            <v-card-text v-text="photo.photographer"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

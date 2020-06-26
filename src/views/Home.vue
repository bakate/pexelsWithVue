<script>
import Curated from './CuratedPhotos'
import { mapState } from 'vuex'
export default {
  components: {
    Curated,
  },
  computed: mapState({
    search: state => state.photos.search,
    photos: state => state.photos.photos,
  }),
}
</script>
<template>
  <div>
    <div v-if="search.length">
      <BaseTypography> Here are your photos for : {{ search }} </BaseTypography>
      <BaseCard :items="photos" md="4" />
    </div>
    <div v-if="!search.length">
      <Curated />
    </div>
  </div>
</template>

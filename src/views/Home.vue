<script>
import Card from '@/components/Card'
import Curated from './CuratedPhotos'
import { mapState } from 'vuex'
export default {
  components: {
    Card,
    Curated,
  },
  computed: mapState({
    search: state => state.photos.search,
    // vids: state => state.videos.name,
  }),
}
</script>
<template>
  <div>
    <h1>This is the home page</h1>
    <Card />
    <div v-if="!search.length">
      <Curated />
    </div>
  </div>
</template>

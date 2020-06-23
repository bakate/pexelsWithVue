<script>
import Card from '@/components/Card'
import { mapState } from 'vuex'
export default {
  components: {
    Card,
  },
  computed: mapState({
    search: state => state.photos.search,
    // vids: state => state.videos.name,
  }),
}
</script>
<template>
  <div>
    <h1 class="text-center pb-3" v-if="search.length">Here are your photos for: {{ search }}</h1>
    <h1 class="text-center pb-3" v-else>Search for something</h1>
    <Card />
  </div>
</template>

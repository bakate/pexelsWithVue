<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      search: '',
    }
  },
  computed: mapState(['photos/search']),
  methods: {
    ...mapActions({
      searchedTerm: 'photos/searchedTerm',
      videos: 'videos/retrieveVideos',
    }),
    getTerms(val) {
      this.searchedTerm(val)
      this.videos(val)
      this.search = ''
    },
  },
}
</script>
<template>
  <v-text-field
    class="secondary lighthen-3 pt-3 text-center text-h5"
    placeholder="search"
    height="16"
    dense
    prepend-inner-icon="mdi-magnify"
    v-model="search"
    @keyup.enter="getTerms(search)"
    rounded
    clearable
  />
</template>

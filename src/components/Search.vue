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
    ...mapActions('photos', ['searchedTerm']),
    getTerms(val) {
      this.searchedTerm(val)
      this.search = ''
    },
  },
}
</script>
<template>
  <v-text-field
    class="blue accent-1 pt-2 px-1"
    placeholder="search"
    height="20"
    prepend-inner-icon="mdi-magnify"
    v-model="search"
    @keyup.enter="getTerms(search)"
    rounded
    clearable
  />
</template>

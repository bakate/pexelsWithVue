<script>
import { mapState } from 'vuex'
export default {
  computed: mapState('photos', ['photos', 'page', 'favorites', 'isLoading']),
  created() {
    this.$store.dispatch('photos/curated')
  },
  data() {
    return {
      value: this.page,
    }
  },
}
</script>
<template>
  <div>
    <BaseTypography>
      <p>last curated photos from Pexels</p>
    </BaseTypography>
    <div v-if="isLoading"><BaseTypography /></div>
    <BasePagination :length="photos.length" v-model="value" />
    <BaseCard :items="photos" md="4"> </BaseCard>
    <BasePagination :length="photos.length" v-model="value" class="mb-3" />
  </div>
</template>

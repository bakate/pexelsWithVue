<script>
import { mapState } from 'vuex'
export default {
  computed: mapState('photos', ['curatedPhotos', 'page']),
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
    <BasePagination :length="curatedPhotos.length" v-model="value" />
    <BaseCard :items="curatedPhotos" md="4"> </BaseCard>
    <BasePagination :length="curatedPhotos.length" v-model="value" class="mb-3" />
  </div>
</template>

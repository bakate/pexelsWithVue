<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('photos', {
      curatedPhotos: state => state.curatedPhotos,
      page: state => state.page,
    }),
  },
  created() {
    this.$store.dispatch('photos/curated', this.value)
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
    <BasePagniation :length="curatedPhotos.length" v-model="value" />
    <BaseCard :items="curatedPhotos" md="4"> </BaseCard>
  </div>
</template>

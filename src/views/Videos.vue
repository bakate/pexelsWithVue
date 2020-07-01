<script>
import Helper from '@/components/HelperText'
import { mapState } from 'vuex'
export default {
  components: {
    Helper,
  },
  computed: mapState({
    videosArr: state => state.videos.videosArr,
    isLoading: state => state.photos.isLoading,
  }),
  created() {
    this.$store.dispatch('videos/getCuratedVideos')
  },
}
</script>
<template>
  <div>
    <Helper category="videos" />
    <div v-if="isLoading"><BaseTypography /></div>
    <BaseVideo :items="videosArr" md="4"></BaseVideo>
  </div>
</template>

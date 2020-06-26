<script>
import Helper from '@/components/HelperText'
import { mapState } from 'vuex'
export default {
  components: {
    Helper,
  },
  computed: mapState('videos', ['videosArr']),
}
</script>
<template>
  <div>
    <Helper category="videos" />
    <BaseVideo :items="videosArr" md="4"></BaseVideo>
  </div>
</template>

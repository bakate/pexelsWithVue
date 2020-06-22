<script>
import Card from '@/components/Card'
export default {
  components: {
    Card,
  },
  // computed: mapState({
  //   name: state => state.photos.name,
  //   vids: state => state.videos.name,
  // }),
}
</script>
<template>
  <div>
    <h1>This is the home page</h1>
    <Card />
  </div>
</template>

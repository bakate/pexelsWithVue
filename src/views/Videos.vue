<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      search: state => state.photos.search,
      allVideos: state => state.videos.videosArr,
      // vids: state => state.videos.name,
    }),
  },
}
</script>
<template>
  <div>
    <h1 class="text-center pb-3" v-if="search.length">Here are your videos for : {{ search }}</h1>
    <h1 class="text-center pb-3" v-else>Search for something</h1>
    <div v-for="video in allVideos" :key="video.id"></div>
    <v-container fluid>
      <v-row align="stretch">
        <v-col v-for="video in allVideos" :key="video.id" cols="12" md="4">
          <v-card link :to="{ name: 'videoDetails', params: { id: video.id } }">
            <video
              :src="video.video_files[0].link"
              muted
              type="video/mp4"
              loop
              autoplay
              :poster="video.image"
              controls
              height="100%"
              width="100%"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

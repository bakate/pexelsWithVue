<script>
import { baseComponentsMixins } from '@/mixins'
export default {
  mixins: [baseComponentsMixins],
  props: {
    md: {
      type: String,
    },
    items: {
      type: Array,
    },
    singleItem: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<template>
  <v-container fluid v-bind="$attrs">
    <v-row v-if="items" class="fill-height" justify="center" align="center">
      <v-col cols="12" :md="md" v-for="video in items" :key="video.id">
        <v-hover v-slot:default="{ hover }">
          <v-card
            link
            class="mx-auto"
            v-bind="$attrs"
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 24 : 2"
            :max-width="450"
            :max-height="350"
            :to="{ name: 'videoDetails', params: { id: video.id } }"
          >
            <slot name="video">
              <video
                :src="video.video_files[0].link"
                muted
                type="video/mp4"
                loop
                controls
                height="100%"
                width="100%"
              />
            </slot>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row v-else class="fill-height">
      <v-col cols="12" :md="md">
        <v-card max-height="620" max-width="960" class="mx-auto">
          <slot name="video">
            <video
              :src="singleItem.video_files[0].link"
              muted
              type="video/mp4"
              loop
              autoplay
              controls
              height="100%"
              width="100%"
            />
          </slot>
          <v-card-actions>
            <slot name="actions"></slot>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

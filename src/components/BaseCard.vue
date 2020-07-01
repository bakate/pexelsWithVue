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
    cardTitle: {
      type: Boolean,
    },
  },
}
</script>
<template>
  <v-container fluid>
    <v-row v-if="items" class="fill-height" justify="center" align="center">
      <v-col cols="12" :md="md" v-for="item in items" :key="item.id">
        <v-hover v-slot:default="{ hover }">
          <v-card
            v-bind="$attrs"
            link
            class="mx-auto"
            :elevation="hover ? 24 : 2"
            :class="{ 'on-hover': hover }"
            max-width="450"
            :to="{ name: 'photoDetails', params: { id: Number(item.id) } }"
          >
            <slot name="image">
              <v-img
                :src="item.src.medium"
                height="300"
                class="white--text align-end"
                :aspect-ratio="16 / 9"
              >
                <v-card-title v-if="cardTitle">Photographer: {{ item.photographer }}</v-card-title>
              </v-img>
            </slot>
            <slot name="actions"> </slot>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row v-else class="fill-height">
      <v-col cols="12" :md="md">
        <v-card v-bind="$attrs">
          <slot name="image"> </slot>
          <v-card-actions>
            <slot name="actions"></slot>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

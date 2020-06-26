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
  <v-container fluid v-bind="$attrs">
    <v-row v-if="items">
      <v-col cols="12" :md="md" v-for="item in items" :key="item.id">
        <v-card
          link
          class="mx-auto"
          max-width="450"
          :to="{ name: 'photoDetails', params: { id: item.id } }"
        >
          <slot name="image">
            <v-img :src="item.src.medium" height="300" class="white--text align-end">
              <v-card-title v-if="cardTitle">Photographer: {{ item.photographer }}</v-card-title>
            </v-img>
          </slot>
          <slot name="actions"> </slot>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" :md="md">
        <v-card>
          <slot name="image"> </slot>
          <v-card-actions>
            <slot name="actions"></slot>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    singlePhoto: {
      type: Object,
      required: true,
    },
  },
  methods: mapActions('photos', ['addFavoriteAction']),
}
</script>
<template>
  <div>
    <BaseCard>
      <template v-slot:image>
        <v-hover v-slot:default="{ hover }">
          <v-img
            :src="singlePhoto.src.large"
            height="550"
            class="white--text align-end"
            :class="{ 'on-hover': hover }"
            aspect-ratio="16/9"
            position="50% 50%"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out blue lighten-4 v-card--reveal"
                style="height: 100%"
              >
                <v-btn icon @click="addFavoriteAction(singlePhoto.id)">
                  <v-icon size="150px" color="red">mdi-heart</v-icon>
                </v-btn>
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
      </template>
      <template v-slot:actions>
        <BaseButton class="blue accent-1" :to="{ name: 'home' }">
          <slot>
            <v-icon>mdi-arrow-left</v-icon>
            <span>Back</span>
          </slot>
        </BaseButton>
        <v-spacer></v-spacer>
        <baseTypography
          ><p class="display-1">Photographer: {{ singlePhoto.photographer }}</p></baseTypography
        >
        <v-spacer></v-spacer>
        <BaseButton class="blue accent-1" :href="singlePhoto.url" target="_blank" noreferrer>
          <slot>
            <span>Visit Page</span>
            <v-icon>mdi-arrow-right</v-icon>
          </slot>
        </BaseButton>
      </template>
    </BaseCard>
  </div>
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

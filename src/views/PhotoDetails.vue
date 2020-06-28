<script>
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
            :class="{ 'on-hover': hover }"
            :aspect-ratio="16 / 9"
            position="75% 25%"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out blue lighten-4 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                <v-btn icon>
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

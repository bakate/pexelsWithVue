<template>
  <v-expand-transition>
    <div
      v-if="hover"
      class="d-flex transition-fast-in-fast-out blue lighten-4 v-card--reveal"
      style="height: 100%;"
    >
      <v-btn icon>
        <v-icon :size="size" color="red">mdi-heart</v-icon>
      </v-btn>
    </div>
  </v-expand-transition>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '80',
    },
  },
}
</script>

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

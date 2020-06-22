<template>
  <v-btn :color="color" :rounded="rounded" :to="link" exact depressed ripple dark>
    <v-icon>{{ icon }}</v-icon>
    <span>{{ content }}</span>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    rounded: {
      type: Boolean,
    },
    content: {
      type: String,
      default: 'Submit',
    },
    icon: {
      type: String,
    },
    link: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

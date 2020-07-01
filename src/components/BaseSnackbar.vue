<script>
import { baseComponentsMixins } from '@/mixins'
export default {
  mixins: [baseComponentsMixins],
  props: {
    text: {
      type: String,
      default: () => '',
    },
    color: {
      type: String,
      default: 'success',
    },
  },
}
</script>
<template>
  <v-snackbar v-bind="$attrs" v-on="$listeners" timeout="3000" app top dark :color="color">
    {{ text }}
    <slot name="action">
      <v-btn v-bind="$attrs" v-on="$listeners" />
    </slot>
  </v-snackbar>
</template>

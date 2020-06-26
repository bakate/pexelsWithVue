<script>
import { baseComponentsMixins } from '@/mixins'
export default {
  mixins: [baseComponentsMixins],
  props: {
    length: {
      type: Number,
    },
    value: {
      type: Number,
      // default: 1,
    },
  },
  methods: {
    updateValue(e) {
      console.log('VALUE', this.value)
      this.$emit('input', e)
    },
  },
}
</script>
<template>
  <v-pagination
    :length="length"
    circle
    :value="value"
    total-visible="5"
    @input="updateValue"
    prev-icon="mdi-arrow-left"
    next-icon="mdi-arrow-right"
    v-bind="$attrs"
  ></v-pagination>
</template>

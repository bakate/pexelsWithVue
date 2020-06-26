<template>
  <v-text-field :label="label" :value="value" @input="updateValue" v-bind="$attrs" />
</template>

<script>
import { baseComponentsMixins } from '@/mixins'
export default {
  mixins: [baseComponentsMixins],
  props: {
    label: {
      type: String,
      default: '',
    },
    value: [String, Number],
  },
}
</script>

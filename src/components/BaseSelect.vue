<template>
  <v-select
    :items="items"
    :item-text="itemText"
    :item-value="itemValue"
    return-object
    persistent-hint
    single-line
    @change="updateValue"
    v-bind="$attrs"
  ></v-select>
</template>

<script>
import { baseComponentsMixins } from '@/mixins'
export default {
  mixins: [baseComponentsMixins],
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemText: {
      type: String,
      required: true,
    },
    itemValue: {
      type: String,
      required: true,
    },
  },
}
</script>

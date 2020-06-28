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
      this.$emit('input', e)
    },
    // paginate(itemsPerPage, items) {
    //   const numberOfPages = Math.ceil(items.length / itemsPerPage)
    //   const newMovies = Array.from({ length: numberOfPages }, (_, index) => {
    //     const start = index * itemsPerPage
    //     return items.slice(start, start + itemsPerPage)
    //   })
    //   return newMovies
    // },
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

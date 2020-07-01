<template>
  <div class="text-h3 font-weight-light text-center text-capitalize py-1" v-bind="$attrs">
    <slot><p class="text-h5 text-center">Loading ...</p></slot>
  </div>
</template>

<script>
import { baseComponentsMixins } from '@/mixins'
export default {
  mixins: [baseComponentsMixins],
}
</script>

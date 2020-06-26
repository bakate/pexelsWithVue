<script>
import { mapState } from 'vuex'
export default {
  computed: mapState('photos', ['search']),
  props: {
    category: {
      type: String,
      default: 'photos',
    },
  },
}
</script>

<template>
  <BaseTypography v-if="search.length">
    <slot>
      <p>
        {{ search }}
        {{ category }}
      </p>
    </slot>
  </BaseTypography>
  <BaseTypography v-else>
    <slot>
      <p>
        Search for something
      </p>
    </slot>
  </BaseTypography>
</template>

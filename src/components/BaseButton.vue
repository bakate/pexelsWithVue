<script>
export default {
  inheritAttrs: false,
}
</script>
<template>
  <v-btn exact dark v-on="$listeners" v-bind="$attrs" rounded text>
    <slot />
  </v-btn>
</template>

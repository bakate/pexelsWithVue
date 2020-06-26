export const baseComponentsMixins = {
  inheritAttrs: false,
  methods: {
    updateValue(e) {
      this.$emit('input', e)
    },
  },
}

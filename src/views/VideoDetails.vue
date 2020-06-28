<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    singleVideo: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template>
  <div>
    <BaseVideo :singleItem="singleVideo">
      <template v-slot:actions>
        <BaseButton class="blue accent-1" :to="{ name: 'videos' }">
          <slot>
            <v-icon>mdi-arrow-left</v-icon>
            <span>Back</span>
          </slot>
        </BaseButton>
        <v-spacer></v-spacer>
        <BaseTypography
          ><p class="display-1">Broad to you by : {{ singleVideo.user.name }}</p></BaseTypography
        >
        <v-spacer></v-spacer>
        <BaseButton class="blue accent-1" :href="singleVideo.url" target="_blank" noreferrer>
          <slot>
            <span>learn more</span>
            <v-icon>mdi-arrow-right</v-icon>
          </slot>
        </BaseButton>
      </template>
    </BaseVideo>
  </div>
</template>

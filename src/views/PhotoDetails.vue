<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    singlePhoto: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template>
  <div>
    <BaseCard>
      <template v-slot:image>
        <v-img :src="singlePhoto.src.large" height="550" aspect-ratio="1" />
      </template>
      <template v-slot:actions>
        <BaseButton class="blue accent-1" :to="{ name: 'home' }">
          <slot>
            <v-icon>mdi-arrow-left</v-icon>
            <span>Back</span>
          </slot>
        </BaseButton>
        <v-spacer></v-spacer>
        <BaseButton class="blue accent-1" :href="singlePhoto.url" target="_blank" noreferrer>
          <slot>
            <span>Visit Page</span>
            <v-icon>mdi-arrow-right</v-icon>
          </slot>
        </BaseButton>
      </template>
    </BaseCard>
  </div>
</template>

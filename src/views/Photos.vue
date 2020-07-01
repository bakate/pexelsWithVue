<script>
import Helper from '@/components/HelperText'
import { mapState } from 'vuex'

export default {
  computed: mapState('photos', ['photos', 'page', 'isLoading']),
  components: {
    Helper,
  },
}
</script>
<template>
  <div>
    <Helper />
    <div v-if="isLoading"><BaseTypography /></div>
    <BaseCard :items="photos" md="4">
      <template v-slot:actions>
        <v-card-actions>
          <BaseButton class="blue accent-1">
            <slot>
              <v-icon>mdi-bookmark</v-icon>
            </slot>
          </BaseButton>
          <v-spacer></v-spacer>
          <BaseButton class="blue accent-1">
            <slot>
              <v-icon>mdi-eye</v-icon>
            </slot>
          </BaseButton>
        </v-card-actions>
      </template>
    </BaseCard>
  </div>
</template>

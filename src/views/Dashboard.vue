<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      snackbar: false,
    }
  },
  computed: mapGetters('photos', ['serialize']),
  methods: {
    ...mapActions('photos', ['removeFavoriteAction']),
    removePhoto(id) {
      this.removeFavoriteAction(id)
      this.snackbar = true
    },
  },
}
</script>
<template>
  <div>
    <BaseSnackbar v-model="snackbar" text="Element has been successfuly remoded" color="success">
      <template v-slot:action>
        <v-btn @click="snackbar = false" color="indigo" rounded large text dark>CLOSE</v-btn>
      </template>
    </BaseSnackbar>

    <div class="mx-auto">
      <BaseTypography
        ><p class="display-1">
          Welcome to your dashboard. <br />
          You'll find very soon your favorite photos and videos
        </p></BaseTypography
      >

      <div v-if="serialize.length">
        <v-container fluid>
          <v-row justify="center" align="center" class="fill-height">
            <v-col cols="12" md="3" v-for="item in serialize" :key="item.id">
              <v-card max-width="450" link>
                <v-img :src="item.src && item.src.medium" height="300" aspect-ratio="16/9" />

                <v-card-actions>
                  <BaseButton class="blue accent-1 mx-auto" @click="removePhoto(item.id)">
                    <slot>
                      <v-icon>mdi-delete</v-icon>
                    </slot>
                  </BaseButton>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div v-else>
        <BaseTypography><p>Go favorite some photos and you'll find them here !</p></BaseTypography>
      </div>
    </div>
  </div>
</template>

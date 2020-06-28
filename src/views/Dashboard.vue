<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      snackbar: true,
      text: 'Great! Good to see you!',
      timeout: 3000,
    }
  },
  computed: { ...mapState('user', ['user']), ...mapGetters('user', ['isUserAuth']) },
}
</script>
<template>
  <div>
    <!-- <v-snackbar v-model="snackbar" absolute text right dark color="success" :timeout="timeout"
      >{{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="indigo" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
    <div class="mx-auto">
      <BaseTypography
        ><p class="display-1">
          Welcome to your dashboard. <br />
          You'll find very soon your favorite photos and videos
        </p></BaseTypography
      >
    </div>
  </div>
</template>

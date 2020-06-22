<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
  created() {
    const local = localStorage.getItem('locale')
    if (local) {
      this.$i18n.locale = local
    } else if (navigator.language) {
      this.$i18n.locale = navigator.language.substring(0, 2)
    }
  },
}
</script>
<template>
  <v-app>
    <Navbar />
    <v-main class="grey lighten-2 px-8">
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

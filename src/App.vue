<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
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
    <Navbar @signed="snackbar = true" />
    <v-main :class="$root.toggle ? 'grey darken-2' : 'grey lighten-4'" class="px-8 dark">
      <router-view :key="$route.fullPath" />
    </v-main>
    <Footer />
  </v-app>
</template>

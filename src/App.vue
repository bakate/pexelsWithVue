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
}
</script>
<template>
  <v-app>
    <Navbar />
    <v-main class="grey lighten-2 px-8 mt-5">
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

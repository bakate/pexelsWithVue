<script>
import Search from './Search'
import { mapState } from 'vuex'
export default {
  components: {
    Search,
  },
  computed: mapState(['informations']),
}
</script>
<template>
  <v-app-bar app color="blue darken-3" height="70" dark dense>
    <v-toolbar-title>
      <BaseButton content="Pexels" class="font-weight-black" rounded :link="{ name: 'home' }" />
    </v-toolbar-title>
    <v-spacer />

    <Search />
    <v-spacer />
    <BaseButton
      v-for="(item, i) in informations"
      :key="i"
      :content="item.text"
      class="mr-4"
      rounded
      :link="{ name: item.route }"
    />

    <v-spacer />
    <BaseButton icon="mdi-account" content="" rounded :link="{ name: 'dashboard' }" />
  </v-app-bar>
</template>

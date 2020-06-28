<script>
import Search from './Search'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Search,
  },
  props: {
    theme: {
      type: String,
    },
  },
  data() {
    return {
      drawer: false,

      languages: [
        { text: 'English', code: 'en' },
        { text: 'Spanish', code: 'es' },
        { text: 'French', code: 'fr' },
        { text: 'Italian', code: 'it' },
      ],
    }
  },
  computed: { ...mapState(['informations']), ...mapGetters('user', ['isUserAuth']) },
  methods: {
    ...mapActions('user', ['signOutAction']),
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$root.toggle = !this.$root.toggle
    },
  },
}
</script>
<template>
  <nav>
    <v-app-bar app color="primary" height="70" dark dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <BaseButton class="font-weight-black" :to="{ name: 'home' }">
          <slot>pexels</slot>
        </BaseButton>
      </v-toolbar-title>
      <v-spacer />
      <Search />
      <v-spacer />
      <BaseButton
        v-for="(item, i) in informations"
        :key="i"
        class=" mr-4 hidden-sm-and-down"
        :to="{ name: item.route }"
      >
        <slot>{{ item.text }}</slot>
      </BaseButton>
      <BaseButton v-if="isUserAuth" class="mr-4 hidden-sm-and-down" :to="{ name: 'dashboard' }">
        dashboard
      </BaseButton>

      <v-spacer />
      <BaseButton :to="{ name: 'dashboard' }" @click="signOutAction">
        <slot>
          <v-icon v-text="isUserAuth ? 'mdi-logout-variant' : 'mdi-account'"></v-icon>
        </slot>
      </BaseButton>
      <v-overflow-btn
        class="mt-2 mx-3"
        :items="languages"
        label="Language"
        :item-value="languages.code"
        dark
      />
      <BaseButton @click="toggleTheme">
        <slot v-if="$root.toggle">
          <v-icon large>mdi-white-balance-sunny</v-icon>
        </slot>
        <slot v-else>
          <v-icon large>mdi-moon-waxing-crescent</v-icon>
        </slot>
      </BaseButton>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app color="primary" dark right>
      <v-col>
        <v-list nav>
          <v-list-item
            v-for="(item, i) in informations"
            :key="i"
            router
            :to="{ name: item.route }"
            exact
            class="my-8"
            @click="drawer = !drawer"
          >
            <v-list-item-icon>
              <v-icon dark v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item> </v-list
      ></v-col>
    </v-navigation-drawer>
  </nav>
</template>

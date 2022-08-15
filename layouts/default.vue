<template>
  <v-app dark>
    <!-- header -->
    <v-app-bar color="transparent" flat fixed app>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <!-- body -->
    <v-main :class="backgroundTheme">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- footer -->
    <v-footer :absolute="!fixed" app>
      <v-col cols="12" class="font-weight-bold" align="center">&copy; {{ new Date().getFullYear() }} {{ footerMessage }}</v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
    backgroundTheme() {
      return this.$vuetify.theme.dark ? 'background-color-dark' : 'background-color-light'
    }
  }
}
</script>

<style scoped lang="scss">
.background-color-light {
  background-color: $main-color-light;
}
.background-color-dark {
  background-color: $main-color-dark;
}
</style>
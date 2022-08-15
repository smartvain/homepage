<script setup lang="ts">
import { computed } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
import colorModule from '@/assets/scss/module.scss'
const { $vuetify } = useContext()

// data
const title = 'Ryuichi Amejima'
const footerMessage = 'Ryuichi Amejima. All Rights Reserved.'

// computed
const backgroundTheme = computed(() => {
  return $vuetify.theme.dark
    ? colorModule.MAIN_COLOR_DARK
    : colorModule.MAIN_COLOR_LIGHT
})
const fontColorTheme = computed(() => ({
  '--font-color': $vuetify.theme.dark
    ? colorModule.MAIN_COLOR_LIGHT
    : colorModule.MAIN_COLOR_DARK
}))
const weatherIconTheme = computed(() => {
  return $vuetify.theme.dark
    ? 'mdi-weather-sunny'
    : 'mdi-weather-night'
})

// methods
const toggleTheme = () => {
  $vuetify.theme.dark = !$vuetify.theme.dark
}
</script>

<template>
  <v-app dark :style="fontColorTheme">
    <!-- header -->
    <v-app-bar color="transparent" flat fixed app>
      <v-btn icon>
        <v-icon>mdi-space-invaders</v-icon>
      </v-btn>
      <v-app-bar-title class="pl-0 font-weight-bold" v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="toggleTheme">
        <v-icon>{{ weatherIconTheme }}</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- body -->
    <v-main :style="{ 'background-color': backgroundTheme }">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- footer -->
    <v-footer :color="colorModule.FOOTER_BACKGROUND_COLOR" app>
      <v-col cols="12" class="font-weight-bold" align="center">
        <span :style="{ 'color': colorModule.MAIN_COLOR_LIGHT }">
          &copy; {{ new Date().getFullYear() }} {{ footerMessage }}
        </span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style scoped lang="scss">
* {
  color: var(--font-color);
}
</style>
<script setup lang="ts">
import { computed } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
import colorModule from '@/assets/scss/module.scss'
const { $vuetify } = useContext()

// data
const title = 'Ryuichi Amejima'
const footerMessage = 'Ryuichi Amejima. All Rights Reserved.'
const headerButtons = [
  { text: 'Skills' },
  { text: 'Projects' },
  { text: 'Contact' },
  { text: 'Source' },
]

// dark mode properties
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
      <v-app-bar-title class="pl-0 font-weight-bold" style="font-size: 1.6rem" v-text="title" />
      <v-spacer />
      <v-btn v-for="(item, index) in headerButtons" :key="index" class="mr-10 rounded-lg" outlined>
        {{ item.text }}
      </v-btn>
      <v-btn icon @click.stop="toggleTheme">
        <v-icon>{{ weatherIconTheme }}</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- body -->
    <v-main :style="{ 'background-color': backgroundTheme }">
      <Nuxt />
    </v-main>
    <!-- footer -->
    <v-footer :color="colorModule.THIRD_COLOR">
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
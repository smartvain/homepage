<script setup lang="ts">
import { computed } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
import colorModule from '@/assets/scss/module.scss'
const { $vuetify } = useContext()

// data
const title         = 'Ryuichi Amejima'
const footerMessage = 'Ryuichi Amejima. All Rights Reserved.'
const githubUrl     = 'https://github.com/smartvain'
const addTop        = 20
const topLengths = {
  skillsTop:   818,
  projectsTop: 1664,
  contactTop:  2341,
}
const headerButtons = [
  { text: 'Skills',   handleClick() { $vuetify.goTo(topLengths.skillsTop + addTop) } },
  { text: 'Projects', handleClick() { $vuetify.goTo(topLengths.projectsTop + addTop) } },
  { text: 'Contact',  handleClick() { $vuetify.goTo(topLengths.contactTop + addTop) } },
  { text: 'Source',   handleClick() { window.open(githubUrl, '_blank') }, isIcon: true },
]

// dark mode computed properties
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
const githubLogoTheme = computed(() => {
  return $vuetify.theme.dark
    ? require('@/assets/images/icons/Github-Mark-Light-64px.png')
    : require('@/assets/images/icons/Github-Mark-64px.png')
})
</script>

<template>
  <v-app dark :style="fontColorTheme">
    <!-- Header -->
    <v-app-bar color="transparent" flat fixed app>
      <v-btn plain @click="$vuetify.goTo(0)">
        <v-icon class="mr-2">mdi-space-invaders</v-icon>
        <v-app-bar-title class="font-weight-bold" style="font-size: 1.6rem" v-text="title" />
      </v-btn>
      <v-spacer />
      <v-btn v-for="(item, index) in headerButtons" :key="index" class="mr-10 rounded-lg" @click="item.handleClick" outlined>
        <v-img v-if="item.isIcon" class="mr-2" max-width="1.5rem" :src="githubLogoTheme" />
        {{ item.text }}
      </v-btn>
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>{{ weatherIconTheme }}</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Body -->
    <v-main :style="{ 'background-color': backgroundTheme }" class="pb-16">
      <Nuxt />
    </v-main>
    <!-- Footer -->
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
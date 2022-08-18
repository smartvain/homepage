<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'
import { useContext } from '@nuxtjs/composition-api';
import { computed, provide } from 'vue';
import { topLengthsSet, topLengthsSetKey } from '~/store';
import { HeaderButtonType } from '~/types/common';

provide(topLengthsSetKey, topLengthsSet)

const { $vuetify }   = useContext()
const { topLengths } = topLengthsSet

const logoTitle     = 'Ryuichi Amejima'
const footerMessage = 'Ryuichi Amejima. All Rights Reserved.'
const githubUrl     = 'https://github.com/smartvain'

const headerButtons :HeaderButtonType[] = [
  { text: 'Skills',   handleClick() { $vuetify.goTo(topLengths.skills) } },
  { text: 'Projects', handleClick() { $vuetify.goTo(topLengths.projects) } },
  { text: 'Contact',  handleClick() { $vuetify.goTo(topLengths.contact) } },
  { text: 'Source',   handleClick() { window.open(githubUrl, '_blank') }, isIcon: true },
]

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
        <v-app-bar-title class="font-weight-bold" style="font-size: 1.6rem" v-text="logoTitle" />
      </v-btn>
      <v-spacer />
      <v-btn v-for="(item, index) in headerButtons" :key="index" class="mr-10 rounded-lg" @click="item.handleClick" outlined>
        <v-img v-if="item.isIcon" class="mr-2" max-width="1.5rem" :src="githubLogoTheme" />
        {{ item.text }}
      </v-btn>
      <v-btn class="mr-0" icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
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
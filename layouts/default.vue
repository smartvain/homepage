<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'
import { useContext, useRouter } from '@nuxtjs/composition-api';
import { computed, provide } from 'vue';
import { topLengthsSet, topLengthsSetKey } from '~/store';
import { HeaderButtonType } from '~/types/common';

const { $vuetify, route } = useContext()
const $router             = useRouter()

const logoTitle     = 'Ryuichi Amejima'
const footerMessage = 'Ryuichi Amejima. All Rights Reserved.'
const githubUrl     = 'https://github.com/smartvain/personal-portfolio'

const { topLengths } = topLengthsSet
const headerButtons: HeaderButtonType[] = [
  { text: 'Skills',
    handleClick() {
      if (route.value.fullPath !== '/') $router.push('/')
      $vuetify.goTo(topLengths.skills)
    }
  },
  { text: 'Projects',
    handleClick() {
      if (route.value.fullPath !== '/') $router.push('/')
      $vuetify.goTo(topLengths.projects)
    }
  },
  { text: 'Contact',
    handleClick() {
      if (route.value.fullPath !== '/') $router.push('/')
      $vuetify.goTo(topLengths.contact)
    }
  },
  { text: 'Source',
    handleClick() { window.open(githubUrl, '_blank') },
    isIcon: true
  },
]

const backgroundTheme = computed(() => {
  return $vuetify.theme.dark
    ? colorModule.MAIN_COLOR_DARK
    : colorModule.MAIN_COLOR_LIGHT
})
const fontColorTheme = computed(() => {
  return $vuetify.theme.dark
    ? colorModule.MAIN_COLOR_LIGHT
    : colorModule.MAIN_COLOR_DARK
})
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

provide(topLengthsSetKey, topLengthsSet)
</script>

<template>
  <v-app :style="{ '--font-color': fontColorTheme }">
    <v-app-bar color="transparent" flat fixed app>
      <v-btn plain @click="$vuetify.goTo(0)">
        <v-icon class="mr-2">mdi-space-invaders</v-icon>
        <v-app-bar-title class="font-weight-bold" style="font-size: 1.6rem" v-text="logoTitle" />
      </v-btn>
      <v-spacer />
      <v-btn v-for="(item, index) of headerButtons" :key="`${index}-${item.text}`" class="mr-10 rounded-lg" outlined @click="item.handleClick">
        <v-img v-if="item.isIcon" class="mr-2" max-width="1.5rem" :src="githubLogoTheme" eager />
        {{ item.text }}
      </v-btn>
      <v-btn class="mr-0" icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>{{ weatherIconTheme }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main :style="{ 'background-color': backgroundTheme }">
      <Nuxt />
    </v-main>

    <v-footer :color="colorModule.THIRD_COLOR">
      <v-col cols="12" class="font-weight-bold" align="center">
        <span :style="{ 'color': colorModule.MAIN_COLOR_LIGHT }">
          &copy; {{ new Date().getFullYear() }} {{ footerMessage }}
        </span>
      </v-col>
    </v-footer>
  </v-app>
</template>
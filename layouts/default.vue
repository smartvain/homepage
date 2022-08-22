<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss';
import { provide, useContext, useRouter } from '@nuxtjs/composition-api';
import { topLengthsSet, topLengthsSetKey, darkModeProperties, darkModePropertiesKey } from '~/store';
import { HeaderButtonType } from '~/types/common';

const router              = useRouter()
const { $vuetify, route } = useContext()
const { backgroundTheme, fontColorTheme, weatherIconTheme, githubLogoTheme } = darkModeProperties($vuetify)

const logoTitle     = 'Ryuichi Amejima'
const footerMessage = 'Ryuichi Amejima. All Rights Reserved.'
const githubUrl     = 'https://github.com/smartvain/personal-portfolio'

const isRoutePath    = route.value.fullPath === '/'
const { topLengths } = topLengthsSet
const headerButtons: HeaderButtonType[] = [
  { text: 'Skills',
    handleClick: (): void => {
      if (!isRoutePath) router.push('/')
      $vuetify.goTo(topLengths.skills)
    }
  },
  { text: 'Projects',
    handleClick: (): void => {
      if (!isRoutePath) router.push('/')
      $vuetify.goTo(topLengths.projects)
    }
  },
  { text: 'Contact',
    handleClick: (): void => {
      if (!isRoutePath) router.push('/')
      $vuetify.goTo(topLengths.contact)
    }
  },
  { text: 'Source',
    handleClick: (): void => { window.open(githubUrl, '_blank') },
    isIcon: true
  },
]

const handleLogoClick = (): void => window.location.reload()

provide(topLengthsSetKey, topLengthsSet)
provide(darkModePropertiesKey, darkModeProperties)
</script>

<template>
  <v-app :style="{ '--font-color': fontColorTheme }">
    <v-app-bar color="transparent" flat fixed app>
      <v-btn plain @click.stop="handleLogoClick">
        <v-icon class="mr-2">mdi-space-invaders</v-icon>
        <v-app-bar-title class="font-weight-bold" style="font-size: 1.6rem" v-text="logoTitle" />
      </v-btn>
      <v-spacer />
      <v-btn
        v-for="(item, index) of headerButtons"
        :key="`${index}-${item.text}`"
        class="mr-10 rounded-lg"
        outlined
        @click.stop="item.handleClick">
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
<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss';
import { onMounted, provide, ref, useContext, useRouter } from '@nuxtjs/composition-api';
import { topLengthsSet, topLengthsSetKey, darkModeProperties, darkModePropertiesKey, screenWidthSet, screenWidthSetKey } from '~/store';
import { HeaderButtonType } from '~/types/common';
import SideBar from '../components/items/SideBar.vue';

const router              = useRouter()
const { $vuetify, route } = useContext()
const { backgroundTheme, fontColorTheme, weatherIconTheme, githubLogoTheme } = darkModeProperties($vuetify)
const { isSmMedia, isMdMedia } = screenWidthSet

const isOpenSideBar = ref<boolean>(false)

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
    },
    isIcon: true
  },
  { text: 'Projects',
    handleClick: (): void => {
      if (!isRoutePath) router.push('/')
      $vuetify.goTo(topLengths.projects)
    },
    isIcon: true
  },
  { text: 'Contact',
    handleClick: (): void => {
      if (!isRoutePath) router.push('/')
      $vuetify.goTo(topLengths.contact)
    },
    isIcon: true
  },
  { text: 'Source',
    handleClick: (): void => { window.open(githubUrl, '_blank') },
    isIcon: true
  },
]

provide(topLengthsSetKey, topLengthsSet)
provide(darkModePropertiesKey, darkModeProperties)
provide(screenWidthSetKey, screenWidthSet)

onMounted(() => {
  window.addEventListener('resize', () => screenWidthSet.updateScreenWidth(window.innerWidth))
})
</script>

<template>
  <v-app :style="{ '--font-color': fontColorTheme }" style="overflow: hidden">
    <v-app-bar color="transparent" flat fixed app>
      <v-btn plain class="px-1" href="/">
        <v-icon class="mr-2">mdi-space-invaders</v-icon>
        <v-app-bar-title class="font-weight-bold" :class="!isSmMedia ? 'text-subtitle-1' : 'text-h5'" v-text="logoTitle" />
      </v-btn>
      <v-spacer />
      <v-btn
        v-for="(item, index) of headerButtons"
        :key="`${index}-${item.text}`"
        class="mr-10 rounded-lg d-none d-md-flex"
        outlined
        @click.stop="item.handleClick">
        <div v-if="item.isIcon">
          <v-img v-if="item.text === 'Source'" class="mr-2" max-width="1.5rem" :src="githubLogoTheme" eager />
        </div>
        {{ item.text }}
      </v-btn>
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>{{ weatherIconTheme }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="isOpenSideBar = !isOpenSideBar" />
    </v-app-bar>

    <SideBar :headerButtons="headerButtons" :isOpen.sync="isOpenSideBar" />

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
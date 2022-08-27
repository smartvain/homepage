<script setup lang="ts">
import {
  topLengthsSet,
  topLengthsSetKey,
  darkModeProperties,
  darkModePropertiesKey,
  screenWidthSet,
  screenWidthSetKey,
  openSectionsSet,
  openSectionsSetKey,
  moveSectionsSet,
  moveSectionsSetKey,
  loading,
  loadingKey
} from '~/store';
import colorModule from '@/assets/scss/module.scss';
import SideBar from '../components/items/SideBar.vue';
import { onMounted, provide, ref, useContext, useRouter } from '@nuxtjs/composition-api';
import { HeaderButtonType } from '~/types/common';

const router = useRouter()
const { $vuetify, route } = useContext()
const { isSmMedia } = screenWidthSet
const {
  backgroundTheme,
  fontColorTheme,
  weatherIconTheme,
  githubLogoTheme
} = darkModeProperties($vuetify)
const {
  delaySeconds,
  moveSkillsSection,
  moveProjectsSection,
  moveContactSection
} = moveSectionsSet($vuetify)

const isOpenSideBar = ref<boolean>(false)

const logoTitle     = 'Ryuichi Amejima'
const footerMessage = 'Ryuichi Amejima. All Rights Reserved.'
const githubUrl     = 'https://github.com/smartvain/personal-portfolio'

const routePath = '/'
const headerButtons: HeaderButtonType[] = [
  { text: 'Skills',
    handleClick: (): void => {
      if (route.value.fullPath === routePath) moveSkillsSection()
      else {
        router.push(routePath)
        setTimeout(() => { moveSkillsSection() }, delaySeconds)
      }
    },
    isIcon: true
  },
  { text: 'Projects',
    handleClick: (): void => {
      if (route.value.fullPath === routePath) moveProjectsSection()
      else {
        router.push(routePath)
        setTimeout(() => { moveProjectsSection() }, delaySeconds)
      }
    },
    isIcon: true
  },
  { text: 'Contact',
    handleClick: (): void => {
      if (route.value.fullPath === routePath) moveContactSection()
      else {
        router.push(routePath)
        setTimeout(() => { moveContactSection() }, delaySeconds)
      }
    },
    isIcon: true
  },
  { text: 'Credit',
    handleClick: (): void => { router.push('/credit') },
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
provide(openSectionsSetKey, openSectionsSet)
provide(moveSectionsSetKey, moveSectionsSet)
provide(loadingKey, loading)

onMounted(() => window.addEventListener('resize', () => screenWidthSet.updateScreenWidth(window.innerWidth)))
</script>

<template>
  <v-app :style="{ '--font-color': fontColorTheme }" style="overflow: hidden">
    <v-app-bar color="transparent" flat fixed app style="backdrop-filter: blur(1.5px);">
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
        @click.stop="item.handleClick"
      >
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
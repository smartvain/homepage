import colorModule from "@/assets/scss/module.scss"
import { computed, InjectionKey, reactive } from "vue"
import { Framework } from "vuetify"

export const topLengthsSet = (() => {
  const topPlus = 20
  
  const topLengths = reactive({ skills: 0, projects: 0, contact: 0 })
  
  const setTopLengths = (areaName: keyof typeof topLengths, length: number): void => {
    topLengths[areaName] = length + topPlus
  }

  return { topLengths, setTopLengths }
})()

export const topLengthsSetKey: InjectionKey<typeof topLengthsSet> = Symbol('useTopLengthsSetKey')

export const darkModeProperties = ($vuetify: Framework) => {
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
  const cardBackGroundTheme = computed(() => {
    return $vuetify.theme.dark
      ? colorModule.THIRD_COLOR_DARKEN
      : '#fff'
  })

  return {
    backgroundTheme,
    fontColorTheme,
    weatherIconTheme,
    githubLogoTheme,
    cardBackGroundTheme
  }
}

export const darkModePropertiesKey: InjectionKey<typeof darkModeProperties> = Symbol('useDarkModePropertiesKey')
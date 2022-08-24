import colorModule from "@/assets/scss/module.scss"
import { computed, InjectionKey, reactive, ref } from "vue"
import { Framework } from "vuetify"

export const topLengthsSet = (() => {
  const topLengths = reactive({ skills: 0, projects: 0, contact: 0 })

  const setTopLengths = (areaName: keyof typeof topLengths, length: number): void => {
    topLengths[areaName] = length
  }

  return {
    topLengths,
    setTopLengths
  }
})()

export const darkModeProperties = ($vuetify: Framework) => {
  const backgroundTheme     = computed((): string => {
    return $vuetify.theme.dark
      ? colorModule.MAIN_COLOR_DARK
      : colorModule.MAIN_COLOR_LIGHT
  })
  const fontColorTheme      = computed((): string => {
    return $vuetify.theme.dark
      ? colorModule.MAIN_COLOR_LIGHT
      : colorModule.MAIN_COLOR_DARK
  })
  const weatherIconTheme    = computed((): string => {
    return $vuetify.theme.dark
      ? 'mdi-weather-sunny'
      : 'mdi-weather-night'
  })
  const githubLogoTheme     = computed((): NodeRequire => {
    return $vuetify.theme.dark
      ? require('@/assets/images/icons/Github-Mark-Light-64px.png')
      : require('@/assets/images/icons/Github-Mark-64px.png')
  })
  const cardBackGroundTheme = computed((): string => {
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

export const screenWidthSet = (() => {
  const smBreakPoint = 600
  const mdBreakPoint = 960
  const screenWidth  = ref<number>(window.innerWidth)

  const isSmMedia = computed((): boolean => screenWidth.value > smBreakPoint)
  const isMdMedia = computed((): boolean => screenWidth.value > mdBreakPoint)

  const updateScreenWidth = (width: number): void => {
    screenWidth.value = width
  }

  return {
    updateScreenWidth,
    isSmMedia,
    isMdMedia
  }
})()

export const openSectionsSet = (() => {
  const isOpenSections = reactive({
    top:      false,
    skills:   false,
    projects: false,
    contact:  false
  })

  const switchSection = (sectionName: keyof typeof isOpenSections, bool: boolean) => {
    isOpenSections[sectionName] = bool
  }

  return {
    isOpenSections,
    switchSection
  }
})()

export const topLengthsSetKey:      InjectionKey<typeof topLengthsSet>      = Symbol('useTopLengthsSetKey')
export const darkModePropertiesKey: InjectionKey<typeof darkModeProperties> = Symbol('useDarkModePropertiesKey')
export const screenWidthSetKey:     InjectionKey<typeof screenWidthSet>     = Symbol('useScreenWidthSetKey')
export const openSectionsSetKey:    InjectionKey<typeof openSectionsSet>    = Symbol('useOpenSectionsSetKey')
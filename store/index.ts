import { InjectionKey, reactive } from "vue"

export const topLengthsSet = (() => {
  const topPlus = 10
  
  const topLengths = reactive({ skills: 0, projects: 0, contact: 0 })
  
  const setTopLengths = (areaName: keyof typeof topLengths, length: number): void => {
    topLengths[areaName] = length + topPlus
  }

  return { topLengths, setTopLengths }
})()

export const topLengthsSetKey: InjectionKey<typeof topLengthsSet> = Symbol('useTopLengthsSetKey')
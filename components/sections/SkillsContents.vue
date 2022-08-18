<script setup lang="ts">
import { computed, ref } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
import { SkillTypes } from '~/types/common';
import colorModule from '@/assets/scss/module.scss'

const { $vuetify } = useContext()

const currentSkillTab = ref<number>(0)

const skillTypes: SkillTypes = {
  frontend: [
    { skillName: 'JavaScript', desc: 'Experienced',  year: 2.3 },
    { skillName: 'TypeScript', desc: 'Experienced',  year: 1.7 },
    { skillName: 'Vue.js',     desc: 'Experience',   year: 1.7 },
    { skillName: 'Nuxt.js',    desc: 'Experience',   year: 1.7 },
    { skillName: 'Vuetify',    desc: 'Experience',   year: 1.7 },
    { skillName: 'CSS / SCSS', desc: 'Experienced',  year: 2.3 },
    { skillName: 'HTML',       desc: 'Experienced',  year: 2.3 },
    { skillName: 'Bootstrap',  desc: 'intermediate', year: 1.2 },
  ],
  backend: [
    { skillName: 'PHP',     desc: 'Experience',   year: 2.3 },
    { skillName: 'Laravel', desc: 'Experience',   year: 2.3 },
    { skillName: 'MySQL',   desc: 'Experience',   year: 2.3 },
    { skillName: 'Docker',  desc: 'Experience',   year: 2 },
    { skillName: 'Node.js', desc: 'Intermediate', year: 1 },
  ]
}

const cardBackGroundTheme = computed(() => {
  return $vuetify.theme.dark
    ? colorModule.THIRD_COLOR_DARKEN
    : '#fff'
})
const fontColorTheme = computed(() => {
  return $vuetify.theme.dark
    ? colorModule.MAIN_COLOR_LIGHT
    : colorModule.MAIN_COLOR_DARK
})

const calcPercentageByYears = (year: number) => {
  const percentage = year >= 3 ? 100 : year * 35
  return `${percentage}%`
}
</script>

<template>
  <v-card height="500" class="rounded-xl px-7 py-2" :color="cardBackGroundTheme" flat>
    <v-tabs v-model="currentSkillTab" :slider-color="fontColorTheme" centered background-color="transparent">
      <v-tab v-for="(skill, skillTypeName) in skillTypes" :key="skillTypeName" :style="{ 'color': fontColorTheme }" class="font-weight-bold">
        {{ skillTypeName }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="currentSkillTab" class="overflow-y-auto pt-3 skill-tab-item">
      <v-tab-item v-for="(skills, skillTypesName) in skillTypes" :key="skillTypesName">
        <v-row>
          <v-col v-for="(skill, index) of skills" :key="`${index}-${skill.skillName}`" cols="6">
            <v-card-title  class="ml-3">
              <v-icon class="text-h5 mr-3">mdi-check-decagram</v-icon>
              <span class="mr-5 text-h6">{{ skill.skillName }}</span>
              <span class="text-subtitle-2 grey--text">{{ skill.year }}years</span>
            </v-card-title>
            <v-card-text>
              <div class="progBar">
                <div class="bar" :style="{ '--percentage': calcPercentageByYears(skill.year), '--bar-color': colorModule.SECONDARY_COLOR_LIGHT }" />
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<style scoped lang="scss">
.skill-tab-item {
  background-color: transparent;
  height: 84%;
}

.progBar {
  width: 100%;
  height: 1rem;
  background-color: #ececec;
  position: relative;
  border-radius:.6rem;
  overflow: hidden;
}

.progBar .bar {
  position: absolute;
  height: 100%;
  background-color: var(--bar-color);
  animation: progress 1.5s normal;
  animation-fill-mode: forwards;
}

@keyframes progress {
  0% {
    width: 0
  }

  100% {
    width: var(--percentage)
  }
}
</style>
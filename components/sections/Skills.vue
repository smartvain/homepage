<script setup lang="ts">
import { computed } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
import { SkillTypes } from '~/types/common';
import colorModule from '@/assets/scss/module.scss'

const { $vuetify } = useContext()

const sectionTitle  = 'SKILLS'
const sectionDetail = 'Skills I can handle are listed here.'
const skills: SkillTypes = {
  frontend: {
    'JavaScript': { year: 2, desc: 'Experienced' },
    'TypeScript': { year: 1, desc: 'Intermediate' },
    'Vue.js':     { year: 2, desc: 'Experience' },
    'Nuxt.js':    { year: 2, desc: 'Experience' },
    'Vuetify':    { year: 2, desc: 'Experience' },
    'CSS / SCSS': { year: 2, desc: 'Experienced' },
    'HTML':       { year: 2, desc: 'Experienced' },
    'Bootstrap':  { year: 1, desc: 'intermediate' },
  },
  backend: {
    'PHP':     { year: 3, desc: 'Experience' },
    'Laravel': { year: 2, desc: 'Experience' },
    'MySQL':   { year: 2, desc: 'Experience' },
    'Docker':  { year: 2, desc: 'Experience' },
    'Node.js': { year: 1, desc: 'Intermediate' },
  }
}

const cardBackGroundTheme = computed(() => {
  return $vuetify.theme.dark
    ? colorModule.THIRD_COLOR_DARKEN
    : '#fff'
})
</script>

<template>
  <v-row justify="center" align="center" name="skills-area" class="section-area skills-area">
    <v-col cols="6" align-self="start">
      <div style="position: relative; top: -5rem;">
        <img style="width: 65rem" :src="require('@/assets/images/skill-space.png')" class="skill-space">
        <img style="width: 65rem" :src="require('@/assets/images/skill-astronaut.png')" class="skill-astronaut">
      </div>
    </v-col>
    <v-col cols="6" align="center">
      <h1 v-text="sectionTitle" class="section-title section-title-top-area" />
      <p v-text="sectionDetail" class="section-description section-description-top-area" />
      <v-card height="500" width="1000" class="rounded-xl pa-7" :color="cardBackGroundTheme" flat>
        <v-card-title class="justify-center font-weight-bold pa-0">Frontend Development</v-card-title>
        <v-row class="overflow-y-auto mt-3" style="height: 90%">
          <v-col v-for="(item, skillName) in skills.frontend" cols="6">
            <v-card-title  class="ml-3">
              <v-icon class="text-h5 mr-3">mdi-check-decagram</v-icon>
              <span class="mr-5 text-h6">{{ skillName }}</span>
              <span class="text-subtitle-2 grey--text">{{ item.desc }}</span>
            </v-card-title>
            <v-card-text>
              <div class="progBar">
                <div class="bar"></div>
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scope lang="scss">
.skill-space {
  position: absolute;
  top: 0;
  right: -10rem;
}

.skill-astronaut {
  position: absolute;
  top: 0;
  right: -10rem;
  animation: 5s float infinite;
}

// Float animation with rotation
@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(-5deg);
  }
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
  background-color: #FFCA28;
  animation: progress 4s normal;
  animation-fill-mode: forwards;
}

@keyframes progress {
  0% {
    width: 0
  }

  100% {
    width: 100%
  }
}
</style>
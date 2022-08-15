<script setup lang="ts">
import { computed } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
import colorModule from '@/assets/scss/module.scss'
const { $vuetify } = useContext()

const detail = 'Skills I can handle are listed here.'

const cardBackGroundTheme = computed(() => {
  return $vuetify.theme.dark
    ? colorModule.THIRD_COLOR_DARKEN
    : false
})
</script>

<template>
  <v-row justify="center" align="center" name="skills-area" class="section-area skills-area">
    <v-col cols="6" align-self="start">
      <div style="position: relative;">
        <img style="width: 65rem" :src="require('@/assets/images/skill-space.png')" class="skill-space">
        <img style="width: 65rem" :src="require('@/assets/images/skill-astronaut.png')" class="skill-astronaut">
      </div>
    </v-col>
    <v-col cols="6" align="center">
      <h1 class="section-title section-title-top-area">SKILLS</h1>
      <p v-text="detail" class="section-description section-description-top-area mt-11" />
      <v-card height="500" width="1000" class="rounded-xl" :color="cardBackGroundTheme" flat>

      </v-card>
    </v-col>
  </v-row>
</template>

<style scope lang="scss">
:root {
  --position-right: -10rem;
}
.skill-space {
  position: absolute;
  top: 0;
  right: var(--position-right);
}

.skill-astronaut {
  position: absolute;
  top: 0;
  right: var(--position-right);
  animation: 5s float infinite;
}

// Float animation with rotation
@keyframes float {
  0%, 100% {
    transform:translateY(0) rotate(0deg);
  }
  50% {
    transform:translateY(-30px) rotate(-10deg);
  }
}
</style>
<script setup lang="ts">
import SkillsContents from './SkillsContents.vue'

const sectionTitle  = 'SKILLS'
const sectionDetail = 'Skills I can handle are listed here.'
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
      <SkillsContents />
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
</style>
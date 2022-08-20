<script setup lang="ts">
import SkillsContents from './SkillsContents.vue'
import ComponentAnimation from '../ComponentAnimation.vue'

defineProps<{ isOpen: boolean }>()

const sectionTitle  = 'SKILLS'
const sectionDetail = 'Skills I can handle are listed here.'
</script>

<template>
  <div class="section-area skills-area" name="skills-area">
    <ComponentAnimation>
      <v-row v-show="isOpen" justify="center" align="center">
        <v-col cols="6" align-self="start">
          <div style="position: relative; top: -5rem;">
            <v-img style="width: 65rem" :src="require('@/assets/images/skills-background.png')" class="skills-area-main-image" eager/>
            <v-img style="width: 65rem" :src="require('@/assets/images/skills-astronaut.png')" class="skills-area-astronaut-image" eager/>
          </div>
        </v-col>
        <v-col cols="6" align="center">
          <h1 v-text="sectionTitle" class="section-title" />
          <p v-text="sectionDetail" class="section-description" />
          <SkillsContents />
        </v-col>
      </v-row>
    </ComponentAnimation>
  </div>
</template>

<style scope lang="scss">
.skills-area {
  margin-top: 3rem !important;
}

.skills-area-main-image {
  position: absolute;
  top: 0;
  right: -10rem;
}

.skills-area-astronaut-image {
  position: absolute;
  top: 0;
  right: -10rem;
  animation: 5s float infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(-5deg);
  }
}
</style>
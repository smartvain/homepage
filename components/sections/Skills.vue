<script setup lang="ts">
import SkillsContents from './SkillsContents.vue'
import MainImageLeftAnimation from '../animations/MainImageLeftAnimation.vue';
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue';
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue';
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';

defineProps<{ isOpen: boolean }>()

const sectionTitle  = 'SKILLS'
const sectionDetail = 'Skills I can handle are listed here.'
</script>

<template>
  <div class="section-area skills-area" name="skills-area">
    <v-row justify="center" align="center">
      <v-col cols="6" align-self="start">
        <div style="position: relative; top: -5rem;">
          <MainImageLeftAnimation>
            <img v-show="isOpen" style="width: 58rem" :src="require('@/assets/images/skills-background.png')" class="skills-area-main-image" rel="preload"/>
          </MainImageLeftAnimation>
          <div v-show="isOpen" class="animation-image-appear">
            <img style="width: 58rem" :src="require('@/assets/images/skills-astronaut.png')" class="skills-area-astronaut-image" rel="preload"/>
          </div>
        </div>
      </v-col>
      <v-col cols="6" align="center">
        <SectionTitleAnimation>
          <h1 v-show="isOpen" v-text="sectionTitle" class="section-title" />
        </SectionTitleAnimation>
        <SectionDetailAnimation>
          <p v-show="isOpen" v-text="sectionDetail" class="section-detail" />
        </SectionDetailAnimation>
        <SectionContentAnimation>
          <SkillsContents v-show="isOpen" />
        </SectionContentAnimation>
      </v-col>
    </v-row>
  </div>
</template>

<style scope lang="scss">
.skills-area {
  margin-top: 3rem !important;
}

.skills-area-main-image {
  position: absolute;
  top: 1.3rem;
  right: -6.6rem;
}

.skills-area-astronaut-image {
  position: absolute;
  top: 1.3rem;
  right: -6.6rem;
  animation: 5s floatWithRotate infinite;
}

@keyframes floatWithRotate {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(-5deg);
  }
}
</style>
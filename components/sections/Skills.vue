<script setup lang="ts">
import SkillsContents from './SkillsContents.vue'
import MainImageLeftAnimation from '../animations/MainImageLeftAnimation.vue';
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue';
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue';
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';
import { screenWidthSetKey } from '~/store';
import { inject } from 'vue';

defineProps<{ isOpen: boolean }>()

const screenWidthSet = inject(screenWidthSetKey)
if (!screenWidthSet) throw new Error('screenWidthSet is undefined')
const { isSmMedia } = screenWidthSet

const sectionTitle  = 'SKILLS'
const sectionDetail = 'This section is lined with skills I can handle.'
</script>

<template>
  <div class="section-area" id="skills-area">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4" md="6" align-self="start" style="position: relative" :class="{ 'skills-area-image-position-res': !isSmMedia }">
        <MainImageLeftAnimation>
          <img
            v-show="isOpen"
            class="skills-area-background-image"
            :class="{ 'd-none': !isSmMedia }"
            :src="require('@/assets/images/skills/skills-background.png')"
            rel="preload"
          >
        </MainImageLeftAnimation>
        <div v-show="isOpen" class="animation-image-appear">
          <img :src="require('@/assets/images/skills/skills-planet-main.png')" class="skills-area-planet-main-image" rel="preload">
          <img :src="require('@/assets/images/skills/skills-asteroid.png')" class="skills-area-asteroid-image" rel="preload">
          <div class="planets-wrapper">
            <img :src="require('@/assets/images/skills/skills-planet1.png')" class="skills-area-planet-image" rel="preload">
            <img :src="require('@/assets/images/skills/skills-planet2.png')" class="skills-area-planet-image" rel="preload">
            <img :src="require('@/assets/images/skills/skills-planet3.png')" class="skills-area-planet-image" rel="preload">
            <img :src="require('@/assets/images/skills/skills-planet4.png')" class="skills-area-planet-image" rel="preload">
          </div>
          <img :src="require('@/assets/images/skills/skills-astronaut.png')" class="skills-area-astronaut-image" rel="preload">
        </div>
      </v-col>
      <v-col cols="12" sm="8" md="6" align="center">
        <SectionTitleAnimation>
          <h1 v-show="isOpen" v-text="sectionTitle" class="section-title" :class="{ 'font-color-res': !isSmMedia }" />
        </SectionTitleAnimation>
        <SectionDetailAnimation>
          <p v-show="isOpen" v-text="sectionDetail" class="section-detail" :class="{ 'font-color-res': !isSmMedia }" />
        </SectionDetailAnimation>
        <SectionContentAnimation>
          <SkillsContents v-show="isOpen" />
        </SectionContentAnimation>
      </v-col>
    </v-row>
  </div>
</template>

<style scope lang="scss">
.skills-area-background-image {
  position: absolute;
  top: -3rem;
  right: -7rem;
  width: 58rem;
}

.skills-area-astronaut-image {
  position: absolute;
  top: 2.5rem;
  right: -7rem;
  width: 58rem;
  animation: 5s floatWithRotate infinite;

  @keyframes floatWithRotate {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }

    50% {
      transform: translateY(-20px) rotate(-5deg);
    }
  }
}

.skills-area-planet-main-image {
  position: absolute;
  top: 2.5rem;
  right: -7rem;
  width: 58rem;
  animation: 5s float infinite;
  animation-delay: .4s;
}

.skills-area-asteroid-image {
  position: absolute;
  top: 2.5rem;
  right: -7rem;
  width: 58rem;
  animation: 5s float infinite;
  animation-delay: .6s;
}

.skills-area-planet-image {
  position: absolute;
  top: 2.5rem;
  right: -7rem;
  width: 58rem;
  animation: 5s float infinite;
  &:first-child {
    animation-delay: .2s;
  }
  &:nth-child(2) {
    animation-delay: .6s;
  }
  &:nth-child(3) {
    animation-delay: .8s;
  }
  &:nth-child(4) {
    animation-delay: 1s;
  }
}

// responsive
.font-color-res {
  color: $main-color-light;
}

.skills-area-image-position-res {
  transform: translate(4rem, 46rem);
}
</style>
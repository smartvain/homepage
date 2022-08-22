<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue'
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue'
import MainImageRightAnimation from '../animations/MainImageRightAnimation.vue'
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';
import ContactButton from '../items/ContactButton.vue';
import ShootingStars from '../items/ShootingStars.vue'
import TopImageClipSvg from '../items/TopImageClipSvg.vue';
import { onMounted, ref } from 'vue'

const sectionDetail = 'I work for a Tokyo-based company as a full-stack web developer and also freelance. I am skilled in all aspects of web development, from design to coding. If you like my website, please contact me.'

const isOpen = ref<boolean>(false)
onMounted(() => setTimeout(() => isOpen.value = true, 300))
</script>

<template>
  <div class="section-area top-area">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="5" align="center">
        <SectionTitleAnimation>
          <h1 v-show="isOpen" class="section-title">
            I'M <span :style="{ 'color': colorModule.SECONDARY_COLOR }">WEB</span><br>DEVELOPER.
          </h1>
        </SectionTitleAnimation>
        <SectionDetailAnimation>
          <p v-show="isOpen" v-text="sectionDetail" class="section-detail mt-13" />
        </SectionDetailAnimation>
        <SectionContentAnimation>
          <ContactButton v-show="isOpen" />
        </SectionContentAnimation>
      </v-col>
      <v-col cols="12" sm="7" align-self="start" style="position: relative" class="d-none d-sm-flex">
        <div class="top-image-clip-svg">
          <img :src="require('@/assets/images/top/top-background.png')" class="top-area-spurious-image" rel="preload">
          <MainImageRightAnimation>
            <img v-show="isOpen" :src="require('@/assets/images/top/top-background.png')" class="top-area-background-image" rel="preload">
          </MainImageRightAnimation>
          <div v-show="isOpen" class="animation-image-appear">
            <img :src="require('@/assets/images/top/top-earth.png')" class="top-area-earth-image" rel="preload">
            <ShootingStars />
          </div>
          <MainImageRightAnimation>
            <img v-show="isOpen" :src="require('@/assets/images/top/top-astronaut.png')" class="top-area-astronaut-image" rel="preload">
          </MainImageRightAnimation>
          <TopImageClipSvg />
        </div>
        <div v-show="isOpen" class="animation-image-appear">
          <img :src="require('@/assets/images/top/top-satellite.png')" class="top-area-satellite-image" rel="preload">
          <img :src="require('@/assets/images/top/top-shine.png')" class="top-area-shine-image" rel="preload">
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.top-area h1, p {
  text-align: left;
}

.top-image-clip-svg {
  clip-path: url(#top-image-clip-svg);
  -webkit-clip-path: url(#top-image-clip-svg);
}

.top-area-spurious-image {
  width: 70rem;
  opacity: 0;
}

.top-area-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 70rem;
}

.top-area-astronaut-image {
  position: absolute;
  top: 1.5rem;
  left: 0;
  width: 70rem;
}

.top-area-earth-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 70rem;
  animation: 150s rotatePlanet infinite linear;

  @keyframes rotatePlanet {
  0% {
    transform: rotate(0);
    transform-origin: 74.5% 37% 0;
  }
  100% {
    transform: rotate(1turn);
    transform-origin: 74.5% 37% 0;
  }
}
}

.top-area-satellite-image {
  position: absolute;
  top: 2rem;
  left: 0;
  width: 23rem;
  animation: 4s floatForSatellite infinite;

  @keyframes floatForSatellite {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}
}

.top-area-shine-image {
  position: absolute;
  top: 17rem;
  left: 42rem;
  width: 8rem;
  animation: 4s shine infinite;

  @keyframes shine {
  0%, 100% {
    transform: rotate(0) scale(0);
  }
  50% {
    transform: rotate(1turn) scale(1);
  }
}
}
</style>
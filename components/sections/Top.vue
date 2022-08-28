<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue'
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue'
import MainImageRightAnimation from '../animations/MainImageRightAnimation.vue'
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';
import ButtonTemplate from '../items/ButtonTemplate.vue';
import { inject, onMounted } from 'vue'
import { moveSectionsSetKey, openSectionsSetKey, screenWidthSetKey } from '~/store';
import { useContext } from '@nuxtjs/composition-api';

defineProps<{ isOpen: boolean }>()

const { $vuetify } = useContext()
const openSectionsSet = inject(openSectionsSetKey)
const moveSectionsSet = inject(moveSectionsSetKey)
const screenWidthSet  = inject(screenWidthSetKey)
if (!openSectionsSet) throw new Error('openSectionsSet is undefined')
if (!moveSectionsSet) throw new Error('moveSectionsSet is undefined')
if (!screenWidthSet)  throw new Error('screenWidthSet is undefined')
const { switchSection }      = openSectionsSet
const { isSmMedia }          = screenWidthSet
const { moveContactSection } = moveSectionsSet($vuetify)

const sectionDetail = 'I work for a Tokyo-based company as a full-stack web developer and also freelance. I am skilled in all aspects of web development, from design to coding. If you like my website, please contact me.'

onMounted(() => setTimeout(() => switchSection('top', true), 300))
</script>

<template>
  <div class="section-area top-area">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="5" align="center" style="margin-top: 12%">
        <SectionTitleAnimation>
          <h1 v-show="isOpen" class="section-title">
            I'M <span :style="{ 'color': colorModule.SECONDARY_COLOR }">WEB</span><br>DEVELOPER.
          </h1>
        </SectionTitleAnimation>
        <SectionDetailAnimation>
          <p v-show="isOpen" v-text="sectionDetail" class="section-detail mt-13" />
        </SectionDetailAnimation>
        <SectionContentAnimation>
          <ButtonTemplate class="mt-7" v-show="isOpen" :clickEvent="moveContactSection">Contact</ButtonTemplate>
        </SectionContentAnimation>
      </v-col>
      <v-col cols="12" sm="7" align-self="start" style="position: relative">
        <picture>
          <MainImageRightAnimation>
            <!-- <source :srcset="require('@/assets/images/sections/top/top-background.png?webp')" type="image/webp" /> -->
            <img
              v-show="isOpen"
              :class="!isSmMedia ? 'top-area-images-position-res' : 'top-area-images-position'"
              :src="require('@/assets/images/sections/top/top-background.png?webp')"
              rel="preload"
            >
          </MainImageRightAnimation>
          <div v-show="isOpen" class="animation-image-appear">
            <img
              class="top-area-earth-image"
              :src="require('@/assets/images/sections/top/top-earth.png?webp')"
              rel="preload"
            >
          </div>
          <MainImageRightAnimation>
            <img
              v-show="isOpen"
              :class="!isSmMedia ? 'top-area-images-position-res filter-brightness' : 'top-area-images-position'"
              :src="require('@/assets/images/sections/top/top-astronaut.png?webp')"
              rel="preload"
            >
          </MainImageRightAnimation>
          <div v-show="isOpen" class="animation-image-appear">
            <img
              class="top-area-satellite-image"
              :class="!isSmMedia ? 'top-area-images-position-res' : 'top-area-images-position'"
              :src="require('@/assets/images/sections/top/top-satellite.png?webp')"
              rel="preload"
            >
            <img
              class="top-area-shine-image"
              :src="require('@/assets/images/sections/top/top-shine.png?webp')"
              rel="preload"
            >
          </div>
        </picture>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.top-area h1, p {
  @media screen and ( min-width: 600px ) {
    text-align: left;
  }
}

.top-image-clip-svg {
  clip-path: url(#top-image-clip-svg);
  -webkit-clip-path: url(#top-image-clip-svg);
}

.top-area-images-position {
  position: absolute;
  top: -2%;
  left: -6%;
  width: 76rem;
}

.top-area-images-position-res {
  position: absolute;
  top: 3%;
  left: -16%;
  width: 134%;
}

.top-area-earth-image {
  position: absolute;
  top: 120%;
  left: 63%;
  width: 43%;
  @media screen and ( min-width: 600px ) {
    top: 4rem;
    left: 39rem;
    width: 43%;
  }
  animation: 150s rotatePlanet infinite linear;
  @keyframes rotatePlanet {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1turn);
  }
}
}

.top-area-satellite-image {
  animation: 4s floatForSatellite infinite;
  @keyframes floatForSatellite {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4%);
  }
}
}

.top-area-shine-image {
  position: absolute;
  top: 500%;
  left: 64%;
  width: 13%;
  @media screen and ( min-width: 600px ) {
    top: 17rem;
    left: 68%;
    width: 15%;
  }
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
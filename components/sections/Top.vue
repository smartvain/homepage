<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue'
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue'
import MainImageRightAnimation from '../animations/MainImageRightAnimation.vue'
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';
import ContactButton from '../items/ContactButton.vue';
import { onMounted, ref } from 'vue'

const sectionDetail = 'I work for a Tokyo-based company as a full-stack web developer and also freelance. I am skilled in all aspects of web development, from design to coding. If you like my website, please contact me.'

const isOpen = ref<boolean>(false)
onMounted(() => setTimeout(() => isOpen.value = true, 300))
</script>

<template>
  <div class="section-area top-area">
    <v-row justify="center" align="center">
      <v-col cols="5" align="center">
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
      <v-col cols="7" align="center" style="position: relative">
        <MainImageRightAnimation>
          <img v-show="isOpen" :src="require('@/assets/images/top-main.png')" class="top-area-main-image" rel="preload">
        </MainImageRightAnimation>
        <div v-show="isOpen" class="animation-image-appear">
          <img :src="require('@/assets/images/top-satellite.png')" class="top-area-satellite-image" rel="preload">
          <img :src="require('@/assets/images/top-shine.png')" class="top-area-shine-image" rel="preload">
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.top-area h1, p {
  text-align: left;
}

.top-area-main-image {
  width: 70rem
}

.top-area-satellite-image {
  position: absolute;
  top: 2rem;
  left: 0;
  width: 23rem;
  animation: 4s floatForTop infinite;
}

.top-area-shine-image {
  position: absolute;
  top: 17rem;
  left: 42rem;
  width: 8rem;
  animation: 4s shine infinite;
}

@keyframes floatForTop {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

@keyframes shine {
  0%, 100% {
    transform: rotate(0) scale(0);
  }
  50% {
    transform: rotate(1turn) scale(1);
  }
}
</style>
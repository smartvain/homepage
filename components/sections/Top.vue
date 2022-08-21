<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue'
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue'
import MainImageRightAnimation from '../animations/MainImageRightAnimation.vue'
import { inject, useContext } from '@nuxtjs/composition-api';
import { topLengthsSetKey } from '~/store';
import { onMounted, ref } from 'vue'
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';

const { $vuetify } = useContext()

const state = inject(topLengthsSetKey)
if (!state) throw new Error('Inject return value is undefined')
const { topLengths } = state

const sectionDetail = 'I work for a Tokyo-based company as a full-stack web developer and also freelance. I am skilled in all aspects of web development, from design to coding. If you like my website, please contact me.'

const isOpen = ref<boolean>(false)
onMounted(() => setTimeout(() => isOpen.value = true, 300))
</script>

<template>
  <div class="section-area top-area" name="top-area">
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
          <v-btn v-show="isOpen" class="mt-7 font-weight-bold white--text rounded-lg pa-5" style="font-size: 1.5rem" :color="colorModule.THIRD_COLOR"
            @click="$vuetify.goTo(topLengths.contact)">
            Contact
          </v-btn>
        </SectionContentAnimation>
      </v-col>
      <v-col cols="7" align="center" style="position: relative">
        <MainImageRightAnimation>
          <img v-show="isOpen" style="width: 70rem" :src="require('@/assets/images/top-main.png')" rel="preload">
        </MainImageRightAnimation>
        <div v-show="isOpen" class="animation-image-appear">
          <img style="width: 23rem" :src="require('@/assets/images/top-satellite.png')" class="top-area-satellite-image" rel="preload">
          <img style="width: 8rem" :src="require('@/assets/images/top-shine.png')" class="top-area-shine-image" rel="preload">
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.top-area h1, p {
  text-align: left;
}

.top-area-satellite-image {
  position: absolute;
  top: 2rem;
  left: 0;
  animation: 4s float infinite;
}

.top-area-shine-image {
  position: absolute;
  top: 17rem;
  left: 42rem;
  animation: 4s shine infinite;
}

@keyframes float {
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
<script setup lang="ts">
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue';
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue';
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';
import MainImageLeftAnimation from '../animations/MainImageLeftAnimation.vue';
import { screenWidthSetKey } from '~/store';
import { inject } from 'vue';

defineProps<{ isOpen: boolean }>()

const screenWidthSet = inject(screenWidthSetKey)
if (!screenWidthSet) throw new Error('screenWidthSet is undefined')
const { isSmMedia } = screenWidthSet

const sectionTitle  = 'CONTACT'
const sectionDetail = 'You can contact me through this form.'
</script>

<template>
  <div class="section-area" id="contact-area">
    <v-row justify="center" align="center" :class="{ 'contact-area-wrapper-res': !isSmMedia }">
      <v-col cols="12" sm="4" md="6" align-self="start" style="position: relative" :class="{ 'contact-area-image-position-res': !isSmMedia }">
        <MainImageLeftAnimation>
          <img
            v-show="isOpen"
            class="contact-area-background-image"
            :class="{ 'd-none': !isSmMedia }"
            :src="require('@/assets/images/sections/contact/contact-background.png')"
            rel="preload"
          >
        </MainImageLeftAnimation>
        <div v-show="isOpen" class="animation-image-appear">
          <img :src="require('@/assets/images/sections/contact/contact-planet.png')" class="contact-area-planet-image" rel="preload">
          <img :src="require('@/assets/images/sections/contact/contact-astronaut.png')" class="contact-area-astronaut-image" rel="preload">
        </div>
      </v-col>
      <v-col cols="12" sm="8" md="6" align="center" :class="{ 'contact-area-main-position-res': !isSmMedia }">
        <SectionTitleAnimation>
          <h1 v-show="isOpen" v-text="sectionTitle" class="section-title" />
        </SectionTitleAnimation>
        <SectionDetailAnimation>
          <p v-show="isOpen" v-text="sectionDetail" class="section-detail" />
        </SectionDetailAnimation>
        <SectionContentAnimation>
          <iframe
            v-show="isOpen"
            src="https://docs.google.com/forms/d/e/1FAIpQLScUVQBTmQ8j6GcndcIn87kbA3RJsHgz74_56XCexn6XhDPjWw/viewform?embedded=true"
            width="100%"
            height="550"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >Loading…
          </iframe>
        </SectionContentAnimation>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.contact-area-background-image {
  position: absolute;
  top: 6rem;
  right: -2rem;
  width: 52rem;

}

.contact-area-astronaut-image{
  position: absolute;
  top: 4rem;
  right: 1.5rem;
  width: 21rem;
  transform: rotate(-15deg);
  animation: 5s float infinite;
}

.contact-area-planet-image{
  position: absolute;
  top: 13.5rem;
  right: 2.5rem;
  width: 49rem;
  animation: 6s float infinite;
}

// responsive
.contact-area-image-position-res {
  transform: translate(5rem, -15rem);
}

.contact-area-main-position-res {
  position: absolute;
  top: 0;
}

.contact-area-wrapper-res {
  height: 51rem;
}
</style>
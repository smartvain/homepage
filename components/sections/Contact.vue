<script setup lang="ts">
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue';
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue';
import MainImageLeftAnimation from '../animations/MainImageLeftAnimation.vue';
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';

defineProps<{ isOpen: boolean }>()

const sectionTitle  = 'CONTACT'
const sectionDetail = 'You can also contact us for work here.'
</script>

<template>
  <div class="section-area">
    <v-row justify="center" align="center">
      <v-col cols="6" align-self="start" style="position: relative">
        <MainImageLeftAnimation>
          <img v-show="isOpen" :src="require('@/assets/images/contact-background.png')" class="contact-area-background-image" rel="preload">
        </MainImageLeftAnimation>
        <div v-show="isOpen" class="animation-image-appear">
          <img :src="require('@/assets/images/contact-planet.png')" class="contact-area-planet-image" rel="preload">
          <img :src="require('@/assets/images/contact-astronaut.png')" class="contact-area-astronaut-image" rel="preload">
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
          <form v-show="isOpen">
            <v-text-field type="text" solo class="rounded-lg" height="80" placeholder="Your full name" flat />
            <v-text-field type="email" solo class="rounded-lg" height="80" placeholder="Your Email" flat />
            <v-textarea type="text" solo class="rounded-lg" height="300" placeholder="Your message" flat no-resize />
          </form>
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
</style>
<script setup lang="ts">
import ContactSvg from './ContactSvg.vue';
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue';
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue';
import MainImageLeftAnimation from '../animations/MainImageLeftAnimation.vue';

defineProps<{ isOpen: boolean }>()

const sectionTitle  = 'CONTACT'
const sectionDetail = 'You can also contact us for work here.'
const starsCount    = 10
</script>

<template>
  <div class="section-area" name="contact-area">
    <v-row justify="center" align="center">
      <v-col cols="6" align-self="start" style="position: relative">
        <MainImageLeftAnimation>
          <img v-show="isOpen" style="width: 55rem" :src="require('@/assets/images/contact-background.png')" class="contact-area-main-image" rel="preload">
        </MainImageLeftAnimation>
        <div class="shooting-stars-wrapper"><span v-for="n of starsCount" class="shooting-stars" /></div>
        <ContactSvg />
        <div v-show="isOpen" class="animation-image-appear">
          <img v-show="isOpen" style="width: 38rem" :src="require('@/assets/images/contact-astronaut.png')" class="contact-area-astronaut-image" rel="preload">
        </div>
      </v-col>
      <v-col cols="6" align="center">
        <SectionTitleAnimation>
          <h1 v-show="isOpen" v-text="sectionTitle" class="section-title" />
        </SectionTitleAnimation>
        <SectionDetailAnimation>
          <div v-show="isOpen">
            <p v-text="sectionDetail" class="section-description" />
            <form>
              <v-text-field type="text" solo class="rounded-lg" height="80" placeholder="Your full name" flat />
              <v-text-field type="email" solo class="rounded-lg" height="80" placeholder="Your Email" flat />
              <v-textarea type="text" solo class="rounded-lg" height="300" placeholder="Your message" flat />
            </form>
          </div>
        </SectionDetailAnimation>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.contact-area-main-image {
  position: absolute;
  top: 0;
  right: -5rem;
}

.contact-area-astronaut-image {
  position: absolute;
  top: 11rem;
  right: 2rem;
}


.shooting-stars-wrapper {
  clip-path: url(#contact-area-svg);
  -webkit-clip-path: url(#contact-area-svg);
}

.shooting-stars {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
  animation: shooting 3s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }

  // &:nth-child(1) {
  //   top: 0;
  //   right: 0;
  //   left: initial;
  //   animation-delay: 0;
  //   animation-duration: 1s;
  // }

  &:nth-child(2) {
    top: 0;
    right: 80px;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
  }

  &:nth-child(3) {
    top: 80px;
    right: 0px;
    left: initial;
    animation-delay: 0.4s;
    animation-duration: 2s;
  }

  // &:nth-child(4) {
  //   top: 0;
  //   right: 180px;
  //   left: initial;
  //   animation-delay: 0.6s;
  //   animation-duration: 1.5s;
  // }

  // &:nth-child(5) {
  //   top: 0;
  //   right: 400px;
  //   left: initial;
  //   animation-delay: 0.8s;
  //   animation-duration: 2.5s;
  // }

  &:nth-child(6) {
    top: 0;
    right: 600px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 3s;
  }

  &:nth-child(7) {
    top: 300px;
    right: 0px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 1.75s;
  }

  // &:nth-child(8) {
  //   top: 0px;
  //   right: 700px;
  //   left: initial;
  //   animation-delay: 1.4s;
  //   animation-duration: 1.25s;
  // }

  &:nth-child(9) {
    top: 0px;
    right: 1000px;
    left: initial;
    animation-delay: 0.75s;
    animation-duration: 2.25s;
  }

  &:nth-child(10) {
    top: 0px;
    right: 1000px;
    left: initial;
    animation-delay: 2.75s;
    animation-duration: 2.25s;
  }
}

// Shooing stars animation
@keyframes shooting {
  0% {
    transform: rotate(325deg) translateX(0);
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: rotate(325deg) translateX(-1500px);
    opacity: 0;
  }
}
</style>
<script setup lang="ts">
import { computed } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
import colorModule from '@/assets/scss/module.scss'
const { $vuetify } = useContext()

const detail = 'You can also contact us for work here.'

const cardBackGroundTheme = computed(() => {
  return $vuetify.theme.dark
    ? colorModule.THIRD_COLOR_DARKEN
    : '#fff'
})
</script>

<template>
  <v-row justify="center" align="center" name="contact-area" class="section-area contact-area">
    <v-col cols="6" align-self="start">
      <div style="position: relative;">
        <img style="width: 55rem" :src="require('@/assets/images/contact-astronaut2.png')" class="contact-astronaut">
        <div class="stars-wrapper"><span v-for="n of 10" class="stars" /></div>
        <img style="width: 42rem" :src="require('@/assets/images/contact-astronaut-set.png')" class="contact-astronaut-set">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
          <defs>
            <clipPath id="contact-astronaut-svg">
              <path style="transform: scale(0.31) translate(3.5rem, 3.5rem);" fill-rule="evenodd"  stroke="rgb(3, 0, 0)" stroke-width="5px" stroke-linecap="butt" stroke-linejoin="miter" fill="rgb(0, 0, 0)"
                d="M1071.500,63.748 C1071.500,63.748 815.464,141.745 679.499,152.748 C543.534,163.752 267.898,38.59 149.497,101.748 C31.97,165.437 -18.834,272.18 33.497,839.750 C85.830,1407.482 -330.483,1888.765 892.499,1837.753 C2115.483,1786.741 1782.563,1295.929 1800.502,995.751 C1818.441,695.572 1816.581,483.262 1637.501,182.748 C1458.422,-117.765 1098.970,54.716 1098.500,53.748 C1098.30,52.780 1071.500,63.748 1071.500,63.748 Z"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </v-col>
    <v-col cols="6" align="center">
      <h1 class="section-title section-title-top-area">CONTACT</h1>
      <p v-text="detail" class="section-description section-description-top-area mt-11" />
      <form>
        <v-text-field solo class="rounded-lg" height="80" placeholder="Your full name" :color="cardBackGroundTheme" flat />
        <v-text-field solo class="rounded-lg" height="80" placeholder="Your Email" :color="cardBackGroundTheme" flat />
        <v-textarea solo class="rounded-lg" height="300" placeholder="Your message" :color="cardBackGroundTheme" flat />
      </form>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.contact-astronaut {
  position: absolute;
  top: 0;
  right: -5rem;
}

.contact-astronaut-set {
  position: absolute;
  top: 9rem;
  right: -2rem;
}

.stars-wrapper {
  clip-path: url(#contact-astronaut-svg);
  -webkit-clip-path: url(#contact-astronaut-svg);
}

.stars {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
  animation: shooting 3s linear infinite;
}

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

.stars::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, #fff, transparent);
}

// .stars:nth-child(1) {
//   top: 0;
//   right: 0;
//   left: initial;
//   animation-delay: 0;
//   animation-duration: 1s;
// }

.stars:nth-child(2) {
  top: 0;
  right: 80px;
  left: initial;
  animation-delay: 0.2s;
  animation-duration: 3s;
}

.stars:nth-child(3) {
  top: 80px;
  right: 0px;
  left: initial;
  animation-delay: 0.4s;
  animation-duration: 2s;
}

// .stars:nth-child(4) {
//   top: 0;
//   right: 180px;
//   left: initial;
//   animation-delay: 0.6s;
//   animation-duration: 1.5s;
// }

// .stars:nth-child(5) {
//   top: 0;
//   right: 400px;
//   left: initial;
//   animation-delay: 0.8s;
//   animation-duration: 2.5s;
// }

.stars:nth-child(6) {
  top: 0;
  right: 600px;
  left: initial;
  animation-delay: 1s;
  animation-duration: 3s;
}

.stars:nth-child(7) {
  top: 300px;
  right: 0px;
  left: initial;
  animation-delay: 1s;
  animation-duration: 1.75s;
}

// .stars:nth-child(8) {
//   top: 0px;
//   right: 700px;
//   left: initial;
//   animation-delay: 1.4s;
//   animation-duration: 1.25s;
// }

.stars:nth-child(9) {
  top: 0px;
  right: 1000px;
  left: initial;
  animation-delay: 0.75s;
  animation-duration: 2.25s;
}

.stars:nth-child(10) {
  top: 0px;
  right: 1000px;
  left: initial;
  animation-delay: 2.75s;
  animation-duration: 2.25s;
}
</style>
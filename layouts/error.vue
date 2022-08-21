<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'
import { NuxtError } from '@nuxt/types';

const { error } = defineProps<{ error: NuxtError }>()

let errorTitle  = ''
let errorDetail = ''
switch (error.statusCode) {
  case 404:
    errorTitle  = '404\nNot found'
    errorDetail = error.message!
    break
  default:
    errorTitle  = 'An error\noccurred'
    errorDetail = "If the error still occurs after some time,\nplease contact the administrator"
}

const contactAdmin = () => {
  console.log('unimplemented')
}
</script>

<template>
  <v-container fluid style="width: 93%; max-width: 102rem;">
    <v-row justify="center" align="center">
      <v-col cols="5" style="position: relative">
        <img style="width: 50rem" :src="require('@/assets/images/error-background.png')" class="error-area-background-image" rel="preload">
        <img style="width: 20rem" :src="require('@/assets/images/error-astronaut.png')" class="error-area-astronaut-image">
        <img style="width: 48rem" :src="require('@/assets/images/error-planet.png')" class="error-area-planet-image">
      </v-col>
      <v-col cols="6" align="center">
        <h1 v-text="errorTitle" style="white-space: pre-wrap" class="section-title" />
        <p v-text="errorDetail" style="white-space: pre-wrap" class="section-detail" />
        <v-btn v-if="error.statusCode === 404" to="/" class="font-weight-bold white--text rounded-lg pa-5" style="font-size: 1.2rem" :color="colorModule.THIRD_COLOR">
          Return to Home
        </v-btn>
        <v-btn v-else class="font-weight-bold white--text rounded-lg pa-5" style="font-size: 1.2rem" :color="colorModule.THIRD_COLOR" @click="contactAdmin">
          Contact
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.error-area-astronaut-image{
  position: absolute;
  top: 0;
  right: -3rem;
  transform: rotate(-10deg);
  animation: 4s float infinite;
}

.error-area-planet-image{
  position: absolute;
  top: 8rem;
  right: -5rem;
  animation: 6s float infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
</style>
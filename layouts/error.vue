<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'
import { NuxtError } from '@nuxt/types';
import ContactButton from '~/components/items/ContactButton.vue';

const { error } = defineProps<{ error: NuxtError }>()

let errorTitle  = ''
let errorDetail = ''
switch (error.statusCode) {
  case 404:
    errorTitle  = '404\nNot found'
    errorDetail = `"${window.location.href}" could not be found `!
    break
  default:
    errorTitle  = 'An error\noccurred'
    errorDetail = "If the error still occurs after some time,\nplease contact the administrator"
}
</script>

<template>
  <v-container fluid style="width: 93%; max-width: 102rem;">
    <v-row justify="center" align="center">
      <v-col cols="5" style="position: relative">
        <img style="width: 46rem" :src="require('@/assets/images/error-background.png')" rel="preload">
        <img style="width: 32rem" :src="require('@/assets/images/error-astronaut.png')" class="error-area-astronaut-image" rel="preload">
      </v-col>
      <v-col cols="6" align="center">
        <h1 v-text="errorTitle" style="white-space: pre-wrap" class="section-title" />
        <p v-text="errorDetail" style="white-space: pre-wrap" class="section-detail" />
        <v-btn v-if="error.statusCode === 404" to="/" class="font-weight-bold white--text rounded-lg pa-5" style="font-size: 1.2rem" :color="colorModule.THIRD_COLOR">
          Return to Home
        </v-btn>
        <ContactButton v-else />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.error-area-astronaut-image {
  position: absolute;
  top: 9rem;
  right: -1rem;
}
</style>
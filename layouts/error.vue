<script setup lang="ts">
import ButtonTemplate from '~/components/items/ButtonTemplate.vue';
import { NuxtError } from '@nuxt/types';
import { useRouter } from '@nuxtjs/composition-api';
import { screenWidthSet } from '~/store';

const router = useRouter()
const { error } = defineProps<{ error: NuxtError }>()
const { isMdMedia } = screenWidthSet

let errorTitle  = ''
let errorDetail = ''
switch (error.statusCode) {
  case 404:
    errorTitle  = '404\nNot found'
    errorDetail = `"${window.location.href}" could not be found `!
    break
  default:
    errorTitle  = 'An error\noccurred'
    errorDetail = "If the error still occurs after some time,\nplease contact the administrator\nusing the Source button at the top of the screen."
}

const pageReload = (): void => { window.location.reload() }
const returnHome = (): void => { router.push('/') }
</script>

<template>
  <v-container fluid style="width: 93%; max-width: 102rem;">
    <v-row justify="center" align="center">
      <v-col cols="12" md="5" style="position: relative" :class="{ 'filter-brightness': !isMdMedia }">
        <img :src="require('@/assets/images/error/error-background.png')" :class="!isMdMedia ? 'error-area-background-image-res' : 'error-area-background-image'" rel="preload">
        <img :src="require('@/assets/images/error/error-astronaut.png')" :class="!isMdMedia ? 'error-area-astronaut-image-res' : 'error-area-astronaut-image'" rel="preload">
      </v-col>
      <v-col cols="12" md="5" align="center" :class="{ 'error-left-position-res': !isMdMedia }">
        <h1 v-text="errorTitle" style="white-space: pre-wrap" class="section-title" :class="{ 'font-color-fix': !isMdMedia }" />
        <p v-text="errorDetail" style="white-space: pre-wrap" class="section-detail" :class="{ 'font-color-fix': !isMdMedia }" />
        <ButtonTemplate v-if="error.statusCode === 404" class="mt-4" :clickEvent="returnHome">Return Home</ButtonTemplate>
        <ButtonTemplate v-else class="mt-4" :clickEvent="pageReload">Page Reload</ButtonTemplate>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.error-area-background-image {
  width: 46rem;
}

.error-area-astronaut-image {
  position: absolute;
  top: 9rem;
  right: -1rem;
  width: 32rem;
}

.error-area-background-image-res {
  width: 100%;
}

.error-area-astronaut-image-res {
  position: absolute;
  top: 15%;
  right: 0;
  width: 73%;
}

.error-left-position-res {
  position: absolute;
  top: 9%;
}
</style>
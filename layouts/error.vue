<script setup lang="ts">
import ButtonTemplate from '~/components/items/ButtonTemplate.vue';
import { NuxtError } from '@nuxt/types';
import { useRouter } from '@nuxtjs/composition-api';

const { error } = defineProps<{ error: NuxtError }>()

const router = useRouter()

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
      <v-col cols="5" style="position: relative">
        <img :src="require('@/assets/images/error/error-background.png')" class="error-area-background-image" rel="preload">
        <img :src="require('@/assets/images/error/error-astronaut.png')" class="error-area-astronaut-image" rel="preload">
      </v-col>
      <v-col cols="6" align="center">
        <h1 v-text="errorTitle" style="white-space: pre-wrap" class="section-title" />
        <p v-text="errorDetail" style="white-space: pre-wrap" class="section-detail" />
        <ButtonTemplate v-if="error.statusCode === 404" class="mt-4" :clickEvent="returnHome">Return Home</ButtonTemplate>
        <ButtonTemplate v-else class="mt-4" :clickEvent="pageReload">Page Reload</ButtonTemplate>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.error-area-background-image {
  width: 46rem
}

.error-area-astronaut-image {
  position: absolute;
  top: 9rem;
  right: -1rem;
  width: 32rem;
}
</style>
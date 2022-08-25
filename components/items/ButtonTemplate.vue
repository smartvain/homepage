<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss';
import { inject } from '@nuxtjs/composition-api';
import { screenWidthSetKey } from '~/store';

const screenWidthSet = inject(screenWidthSetKey)
if (!screenWidthSet) throw new Error('screenWidthSet is undefined')
const { isSmMedia }  = screenWidthSet

defineProps<{ clickEvent: Function }>()
</script>

<template>
  <v-btn
    class="font-weight-bold white--text rounded-lg pa-5"
    :class="!isSmMedia ? 'text-subtitle-1' : 'text-h5'"
    :color="colorModule.THIRD_COLOR"
    @click="clickEvent"
  ><slot />
  </v-btn>
</template>
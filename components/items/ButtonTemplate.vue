<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss';
import { inject } from '@nuxtjs/composition-api';
import { loadingKey, screenWidthSetKey } from '~/store';
import { ButtonOptions } from '~/types/common';

defineProps<{ clickEvent: Function, options?: ButtonOptions }>()

const pulseCount = 3

const screenWidthSet = inject(screenWidthSetKey)
const loading        = inject(loadingKey)
if (!screenWidthSet) throw new Error('screenWidthSet is undefined')
if (!loading)        throw new Error('loading is undefined')
const { isSmMedia }       = screenWidthSet
const { isLoadingButton } = loading
</script>

<template>
  <v-btn
    class="font-weight-bold white--text rounded-lg pa-5"
    :class="!isSmMedia ? 'text-subtitle-1' : 'text-h5'"
    :color="colorModule.THIRD_COLOR"
    :loading="isLoadingButton"
    :type="options ? options.type : 'button'"
    @click.prevent="clickEvent"
  >
    <slot />
    <template #loader>
      <div class="d-flex align-center">
        <div v-for="n of pulseCount" class="pulse-bubble" />
      </div>
    </template>
  </v-btn>
</template>

<style scoped lang="scss">
.pulse-bubble {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: white;
  &:nth-child(1) {
    animation: pulse .4s ease 0s infinite alternate;
  }
  &:nth-child(2) {
    animation: pulse .4s ease .2s infinite alternate;
  }
  &:nth-child(3) {
    animation: pulse .4s ease .4s infinite alternate;
  }
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
}
</style>
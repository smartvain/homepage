<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss';
import { inject, useContext } from '@nuxtjs/composition-api';
import { screenWidthSetKey, topLengthsSetKey } from '~/store';

const { $vuetify } = useContext()
const topLengthsSet  = inject(topLengthsSetKey)
const screenWidthSet = inject(screenWidthSetKey)
if (!topLengthsSet)  throw new Error('topLengthsSet is undefined')
if (!screenWidthSet) throw new Error('screenWidthSet is undefined')
const { isSmMedia }  = screenWidthSet
const { topLengths } = topLengthsSet


const handleContactButton = (): void => {
  $vuetify.goTo(topLengths.contact)
}
</script>

<template>
  <v-btn
    class="mt-7 font-weight-bold white--text rounded-lg pa-5"
    :class="!isSmMedia ? 'text-subtitle-1' : 'text-h5'"
    :color="colorModule.THIRD_COLOR"
    @click="handleContactButton"
  >Contact
  </v-btn>
</template>
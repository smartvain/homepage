<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss';
import { inject, useContext } from '@nuxtjs/composition-api';
import { topLengthsSetKey } from '~/store';

const { $vuetify } = useContext()
const topLengthsSet = inject(topLengthsSetKey)
if (!topLengthsSet) throw new Error('topLengthsSet is undefined')
const { topLengths } = topLengthsSet

const handleContactButton = (): void => {
  $vuetify.goTo(topLengths.contact)
}
</script>

<template>
  <v-btn
    class="mt-7 font-weight-bold white--text rounded-lg pa-5"
    style="font-size: 1.5rem"
    :color="colorModule.THIRD_COLOR"
    @click="handleContactButton"
  >Contact
  </v-btn>
</template>
<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss';
import { inject, useContext } from '@nuxtjs/composition-api';
import { topLengthsSetKey } from '~/store';

const { $vuetify } = useContext()
const state = inject(topLengthsSetKey)
if (!state) throw new Error('Inject return value is undefined')
const { topLengths } = state

const handleContactButton = () => {
  $vuetify.goTo(topLengths.contact)
}
</script>

<template>
  <v-btn
    class="mt-7 font-weight-bold white--text rounded-lg pa-5"
    style="font-size: 1.5rem"
    :color="colorModule.THIRD_COLOR"
    @click="handleContactButton"
  >
    Contact
  </v-btn>
</template>
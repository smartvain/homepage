<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'
import { inject, useContext } from '@nuxtjs/composition-api';
import { topLengthsSetKey } from '~/store';

const { $vuetify } = useContext()

const state = inject(topLengthsSetKey)
if (!state) throw new Error('Inject return value is undefined')
const { topLengths } = state

const sectionTitle = 'I work for a Tokyo-based company as a full-stack web developer and also freelance. I am skilled in all aspects of web development, from design to coding. If you like my website, please contact me.'
</script>

<template>
  <div class="section-area top-area" name="top-area">
    <v-row justify="center" align="center">
      <v-col cols="5" align="center">
        <h1 class="section-title">
          I'M <span :style="{ 'color': colorModule.SECONDARY_COLOR }">WEB</span><br>DEVELOPER.
        </h1>
        <p v-text="sectionTitle" class="section-description mt-16" />
        <v-btn class="mt-7 font-weight-bold white--text rounded-xl px-6 py-5 text-h5" :color="colorModule.THIRD_COLOR"
          @click="$vuetify.goTo(topLengths.contact)">
          Contact
        </v-btn>
      </v-col>
      <v-col cols="7" align="center">
        <div style="position: relative">
          <v-img style="width: 25rem" :src="require('@/assets/images/top-satellite.png')" class="top-area-satellite-image" eager />
          <v-img style="width: 8rem" :src="require('@/assets/images/top-shine.png')" class="top-area-shine-image" eager />
          <v-img style="width: 70rem" :src="require('@/assets/images/top-main.png')" eager />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.top-area h1, p {
  text-align: left;
}

.top-area-satellite-image {
  position: absolute;
  animation: 4s float infinite;
}

.top-area-shine-image {
  position: absolute;
  top: 35%;
  left: 70%;
  animation: 4s shine infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

@keyframes sparkle {
  0%, 100% {
    transform: rotate(0) scale(0);
  }
  50% {
    transform: rotate(1turn) scale(1);
  }
}
</style>
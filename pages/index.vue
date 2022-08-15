<script setup lang="ts">
import colorModule from '@/assets/scss/module.scss'

const detail = 'I work for a Tokyo-based company as a full-stack web developer and also freelance. I am skilled in all aspects of web development, from design to coding. If you like my website, please contact me.'
</script>

<template>
  <v-container fluid style="width: 93%">
    <!-- Top area -->
    <v-row justify="center" align="center" name="top-area" class="section-area top-area">
      <v-col cols="5" align="center">
        <h1 class="section-title section-title-top-area">
          I'M <span :style="{ 'color': colorModule.SECONDARY_COLOR }">WEB</span><br>DEVELOPER.
        </h1>
        <p v-text="detail" class="section-description section-description-top-area mt-16" />
        <v-btn class="mt-7 font-weight-bold white--text rounded-xl px-8 py-5" style="font-size: 1.3rem" :color="colorModule.THIRD_COLOR">
          Contact
        </v-btn>
      </v-col>
      <v-col cols="7" align="center">
        <img style="width: 25rem" :src="require('@/assets/images/main-satellite.png')" class="satellite-image">
        <img style="width: 8rem" :src="require('@/assets/images/main-star.png')" class="star-image">
        <img style="width: 70rem" :src="require('@/assets/images/main-astronaut.png')">
      </v-col>
    </v-row>
    <!-- Skills area -->
    <v-row justify="center" align="center" name="top-area" class="section-area top-area">
      
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.top-area h1, p {
  text-align: left;
}

.satellite-image {
  position: absolute;
  animation: 4s float infinite;
}

.star-image {
  position: absolute;
  top: 20rem;
  left: 84rem;
  animation: 4s sparkle infinite;
}

// float animation
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

// Sparkle animation
@keyframes sparkle {
  0%, 100% {
    transform: rotate(0) scale(0);
  }
  50% {
    transform: rotate(1turn) scale(1);
  }
}
</style>
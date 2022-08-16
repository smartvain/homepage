<script setup lang="ts">
import { computed } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
import colorModule from '@/assets/scss/module.scss'
const { $vuetify } = useContext()

const detail = 'You can also contact us for work here.'

const cardBackGroundTheme = computed(() => {
  return $vuetify.theme.dark
    ? colorModule.THIRD_COLOR_DARKEN
    : false
})
</script>

<template>
  <v-row justify="center" align="center" name="contact-area" class="section-area contact-area">
    <v-col cols="6" align-self="start">
      <div style="position: relative;">
        <img style="width: 55rem" :src="require('@/assets/images/contact-astronaut.png')" class="contact-astronaut">
        <img style="width: 17rem" :src="require('@/assets/images/contact-flag.png')" class="contact-flag">
      </div>
    </v-col>
    <v-col cols="6" align="center">
      <h1 class="section-title section-title-top-area">CONTACT</h1>
      <p v-text="detail" class="section-description section-description-top-area mt-11" />
      <form>
        <v-text-field solo class="rounded-lg" height="80" placeholder="Your full name" :color="cardBackGroundTheme" flat />
        <v-text-field solo class="rounded-lg" height="80" placeholder="Your Email" :color="cardBackGroundTheme" flat />
        <v-textarea solo class="rounded-lg" height="300" placeholder="Your message" :color="cardBackGroundTheme" flat />
      </form>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.contact-flag {
  position: absolute;
  top: 12rem;
  right: .7rem;
  transform: rotate(24deg);
}

.contact-astronaut {
  position: absolute;
  top: 0;
  right: -5rem;
}
</style>
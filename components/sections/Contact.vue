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
    <v-col cols="6" align="center">

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
</style>
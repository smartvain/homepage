<script setup lang="ts">
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue';
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue';
import MainImageLeftAnimation from '../animations/MainImageLeftAnimation.vue';
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';
import { screenWidthSetKey } from '~/store';
import { inject, reactive } from 'vue';
import SendEmailButton from '../items/SendEmailButton.vue';

defineProps<{ isOpen: boolean }>()

const screenWidthSet = inject(screenWidthSetKey)
if (!screenWidthSet) throw new Error('screenWidthSet is undefined')
const { isSmMedia } = screenWidthSet

const sectionTitle  = 'CONTACT'
const sectionDetail = 'You can contact me through this form.'

const sendEmailForm = reactive({from: '', name: '', content: ''})
</script>

<template>
  <div class="section-area" id="contact-area">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4" md="6" align-self="start" style="position: relative" :class="{ 'contact-area-image-position-res': !isSmMedia }">
        <MainImageLeftAnimation>
          <img
            v-show="isOpen"
            class="contact-area-background-image"
            :class="{ 'd-none': !isSmMedia }"
            :src="require('@/assets/images/contact/contact-background.png')"
            rel="preload"
          >
        </MainImageLeftAnimation>
        <div v-show="isOpen" class="animation-image-appear">
          <img :src="require('@/assets/images/contact/contact-planet.png')" class="contact-area-planet-image" rel="preload">
          <img :src="require('@/assets/images/contact/contact-astronaut.png')" class="contact-area-astronaut-image" rel="preload">
        </div>
      </v-col>
      <v-col cols="12" sm="8" md="6" align="center">
        <SectionTitleAnimation>
          <h1 v-show="isOpen" v-text="sectionTitle" class="section-title" />
        </SectionTitleAnimation>
        <SectionDetailAnimation>
          <p v-show="isOpen" v-text="sectionDetail" class="section-detail" />
        </SectionDetailAnimation>
        <SectionContentAnimation>
          <form v-show="isOpen">
            <v-text-field v-model="sendEmailForm.name" type="text" solo class="rounded-lg" height="80" placeholder="Your full name" flat />
            <v-text-field v-model="sendEmailForm.from" type="email" solo class="rounded-lg" height="80" placeholder="Your Email" flat />
            <v-textarea v-model="sendEmailForm.content" type="text" solo class="rounded-lg" height="210" placeholder="Your message" flat no-resize />
            <SendEmailButton :sendEmailForm="sendEmailForm" />
          </form>
        </SectionContentAnimation>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.contact-area-background-image {
  position: absolute;
  top: 6rem;
  right: -2rem;
  width: 52rem;

}

.contact-area-astronaut-image{
  position: absolute;
  top: 4rem;
  right: 1.5rem;
  width: 21rem;
  transform: rotate(-15deg);
  animation: 5s float infinite;
}

.contact-area-planet-image{
  position: absolute;
  top: 13.5rem;
  right: 2.5rem;
  width: 49rem;
  animation: 6s float infinite;
}

.contact-area-image-position-res {
  transform: translate(5rem, -15rem);
}
</style>
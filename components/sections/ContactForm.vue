<script setup lang="ts">
import { reactive, ref } from 'vue';
import SendEmailButton from '../items/SendEmailButton.vue';
import SectionContentAnimation from '../animations/SectionContentAnimation.vue';

defineProps<{ isOpen: boolean }>()

const sendEmailForm = reactive({email: '', name: '', message: ''})
const valid         = ref<boolean>(false)

const nameLimit    = 20
const emailLimit   = 50
const messageLimit = 500
const nameRules = [
  (input: string) => !!input || 'Name is required',
  (input: string) => input.length <= nameLimit || `Name must be less than ${nameLimit} characters`,
]
const fromRules = [
  (input: string) => !!input || 'Email is required',
  (input: string) => input.length <= emailLimit || `Name must be less than ${emailLimit} characters`,
  (input: string) => /.+@.+/.test(input) || 'E-mail must be valid',
]
const messageRules = [
  (input: string) => !!input || 'Message is required',
  (input: string) => input.length <= messageLimit || `Name must be less than ${messageLimit} characters`,
]
</script>

<template>
  <SectionContentAnimation>
    <v-form v-show="isOpen" v-model="valid">
      <v-text-field
        v-model="sendEmailForm.name"
        type="text"
        class="rounded-lg"
        height="80"
        placeholder="Your full name"
        :rules="nameRules"
        solo flat required
        validate-on-blur
      />
      <v-text-field
        v-model="sendEmailForm.email"
        type="email"
        class="rounded-lg"
        height="80"
        placeholder="Your Email"
        :rules="fromRules"
        solo flat required
        validate-on-blur
      />
      <v-textarea
        v-model="sendEmailForm.message"
        type="text"
        class="rounded-lg"
        height="210"
        placeholder="Your message"
        :rules="messageRules"
        :counter="messageLimit"
        solo flat no-resize required
        validate-on-blur
      />
      <SendEmailButton :disabled="!valid" :sendEmailForm="sendEmailForm" />
    </v-form>
  </SectionContentAnimation>
</template>
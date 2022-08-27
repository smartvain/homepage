<script setup lang="ts">
import ButtonTemplate from '../items/ButtonTemplate.vue';
import { inject, useContext, ContextWithMail } from '@nuxtjs/composition-api';
import { loadingKey } from '~/store';
import { ButtonOptions, SendEmailForm, InputEmailForm } from '~/types/common';

const { sendEmailForm, validate } = defineProps<{ sendEmailForm: InputEmailForm, validate: () => boolean }>()

const loading = inject(loadingKey)
if (!loading) throw new Error('loading is undefined')
const { updateIsLoadingButton } = loading

const context         = useContext()
const contextWithMail = useContext() as ContextWithMail

const buttonOptions: ButtonOptions = { type: 'submit' }

const sendEmail = (): void => {
  if (!validate()) return
  
  updateIsLoadingButton(true)

  const emailDetail: SendEmailForm = {
    from:    sendEmailForm.email,
    subject: `Receive Email from ${sendEmailForm.name}(${sendEmailForm.email})!`,
    text:    sendEmailForm.message
  }
  try {
    contextWithMail.$mail.send(emailDetail)
    setTimeout(() => {
      context.$toast.show('Email successfully sent!')
      updateIsLoadingButton(false)
    }, 1000)
  } catch (e: Error) {
    console.log(e.message)
    context.$toast.error('Failed to send email. Please contact the administrator using the Source button at the top of the screen.')
    updateIsLoadingButton(false)
  }
}
</script>

<template>
  <ButtonTemplate :options="buttonOptions" :clickEvent="sendEmail">Send Email</ButtonTemplate>
</template>
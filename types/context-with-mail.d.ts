import { useContext } from '@nuxtjs/composition-api'
import { SendEmailForm } from './common'

declare module '@nuxtjs/composition-api' {
  type UseContextReturn = ReturnType<typeof useContext>

  interface ContextWithMail extends UseContextReturn {
    $mail: { send: (form: SendEmailForm) => any }
  }
}
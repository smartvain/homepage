import { ComponentPublicInstance } from "vue";

declare module 'vue' {
  interface ComponentPublicInstanceWithValidate extends ComponentPublicInstance {
    reset:           () => void
    resetValidation: () => void
    validate:        () => boolean
  }
}
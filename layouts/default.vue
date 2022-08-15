<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
const { $vuetify } = useContext()

// data
const fixed = ref(false)
const title = 'Ryuichi Amejima'
const footerMessage = 'Ryuichi Amejima. All Rights Reserved.'

// computed
const backgroundTheme = computed(() => {
  return $vuetify.theme.dark ? 'background-color-dark' : 'background-color-light'
})
</script>

<template>
  <v-app dark>
    <!-- header -->
    <v-app-bar color="transparent" flat fixed app>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <!-- body -->
    <v-main :class="backgroundTheme">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- footer -->
    <v-footer :absolute="!fixed" app>
      <v-col cols="12" class="font-weight-bold" align="center">&copy; {{ new Date().getFullYear() }} {{ footerMessage }}</v-col>
    </v-footer>
  </v-app>
</template>

<style scoped lang="scss">
.background-color-light {
  background-color: $main-color-light;
}
.background-color-dark {
  background-color: $main-color-dark;
}
</style>
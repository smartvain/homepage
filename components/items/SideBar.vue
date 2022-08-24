<script setup lang="ts">
import { inject, ref } from 'vue';
import { darkModePropertiesKey } from '~/store';
import { HeaderButtonType } from '~/types/common';
import { useContext } from '@nuxtjs/composition-api';

const { $vuetify } = useContext()
const { headerButtons, isOpen } = defineProps<{ headerButtons: HeaderButtonType[], isOpen: boolean }>()

const _isOpen = ref<boolean>(isOpen)
const emit = defineEmits(['update:isOpen'])
emit('update:isOpen', _isOpen)

const darkModeProperties = inject(darkModePropertiesKey)
if (!darkModeProperties) throw Error('darkModeProperties is undefined')
const { githubLogoTheme } = darkModeProperties($vuetify)
</script>

<template>
  <v-navigation-drawer v-model="_isOpen" fixed temporary style="opacity: .9">
    <v-list nav>
      <v-list-item-group>
        <v-list-item v-for="(button, index) of headerButtons" :key="`${index}-${button.text}`" @click.stop="button.handleClick">
          <v-list-item-icon v-if="button.isIcon">
            <v-icon v-if="button.text === 'Skills'">mdi-electron-framework</v-icon>
            <v-icon v-else-if="button.text === 'Projects'">mdi-folder-multiple-image</v-icon>
            <v-icon v-else-if="button.text === 'Contact'">mdi-contactless-payment-circle</v-icon>
            <v-img v-else-if="button.text === 'Source'" :src="githubLogoTheme" max-width="1.5rem" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ button.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
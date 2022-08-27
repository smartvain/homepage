<script setup lang="ts">
import MainContainer from '~/components/items/MainContainer.vue';
import { inject } from 'vue';
import { useContext } from '@nuxtjs/composition-api';
import { darkModePropertiesKey } from '~/store';
import { CreditList } from '~/types/common';

const { $vuetify } = useContext()

const darkModeProperties = inject(darkModePropertiesKey)
if (!darkModeProperties) throw new Error('darkModeProperties is undefined')
const { cardBackGroundTheme } = darkModeProperties($vuetify)

const pageTitle = 'Attribution of images used on this site'

const creditList: CreditList[] = [
  { url: require('@/assets/images/origin/DJV MAR 732-13.jpg'),
    link: '<a href="https://www.freepik.com/free-vector/space-rocket-helmet-with-satellite-icons_28157674.htm#page=2&position=19&from_view=undefined">Image by gstudioimagen1</a> on Freepik',
    service: 'freepick'
  },
  { url: require('@/assets/images/origin/16949.jpg'),
    link: '<a href="https://www.freepik.com/free-vector/open-space-background_4265896.htm#&position=31&from_view=undefined">Image by macrovector</a> on Freepik',
    service: 'freepick'
  },
  { url: require('@/assets/images/origin/16951.jpg'),
    link: '<a href="https://www.freepik.com/free-vector/outer-space-cartoon-background_4265898.htm#&position=11&from_view=undefined">Image by macrovector</a> on Freepik',
    service: 'freepick'
  },
  { url: require('@/assets/images/origin/430520-PEOMX7-243.jpg'),
    link: 'Image by <a href="https://www.freepik.com/free-vector/colorful-astronaut-composition-with-flat-design_2965309.htm#&position=29&from_view=undefined">Freepik</a>',
    service: 'freepick'
  },
  { url: require('@/assets/images/origin/JEMA BRY 1711-02.jpg'),
    link: '<a href="https://www.freepik.com/free-vector/earth-planets_29109033.htm#&position=33&from_view=undefined">Image by gstudioimagen1</a> on Freepik',
    service: 'freepick'
  },
  { url: require('@/assets/images/origin/30507.jpg'),
    link: '<a href="https://www.freepik.com/free-vector/set-isolated-space-exploration-icons-with-realistic-rockets-artificial-satellites-planets-with-human-characters-vector-illustration_7199799.htm#page=2&position=21&from_view=undefined">Image by macrovector</a> on Freepik',
    service: 'freepick'
  },
  { url: require('@/assets/images/origin/astronaut.png'),
    link: '<a href="https://www.flaticon.com/free-icons/astronaut" title="astronaut icons">Astronaut icons created by Eucalyp - Flaticon</a>',
    service: 'flaticon'
  },
]
</script>

<script lang="ts">
export default {
  head: { title: 'Credit - Ryuichi Amejima' },
}
</script>

<template>
  <MainContainer>
    <h1 v-text="pageTitle" class="mb-5" />
    <v-row class="mb-5">
      <v-col cols="12" sm="6" md="4" v-for="(credit, index) of creditList" :key="`${index}-${credit.link}`">
        <v-card :color="cardBackGroundTheme" class="rounded-lg pa-5 overflow-hidden" flat>
          <v-img class="mx-auto rounded-lg" :src="credit.url" max-width="100%" :aspect-ratio="16/9" eager />
          <v-card-text class="pb-0">
            <div v-html="credit.link" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </MainContainer>
</template>
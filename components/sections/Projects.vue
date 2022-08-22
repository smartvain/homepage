<script setup lang="ts">
import SectionTitleAnimation from '../animations/SectionTitleAnimation.vue';
import SectionDetailAnimation from '../animations/SectionDetailAnimation.vue';
import ProjectsContentsAnimation from '../animations/ProjectsContentsAnimation.vue';
import { useContext } from '@nuxtjs/composition-api';
import { inject } from 'vue';
import { ProjectType } from '~/types/common';
import { darkModePropertiesKey } from '~/store';

const { $vuetify } = useContext()

const darkModeProperties = inject(darkModePropertiesKey)
if (!darkModeProperties) throw Error('darkModeProperties is undefined')
const { cardBackGroundTheme } = darkModeProperties($vuetify)

defineProps<{ isOpen: boolean }>()

const sectionTitle  = 'PROJECTS'
const sectionDetail = 'These are my temporary projects.'

const projects: ProjectType[] = [
  { title: 'My sample project1',
    url: require('@/assets/images/projects/sample-project.png'),
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  { title: 'My sample project2',
    url: require('@/assets/images/projects/sample-project.png'),
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  { title: 'My sample project3',
    url: require('@/assets/images/projects/sample-project.png'),
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
]
</script>

<template>
  <div class="section-area projects-area">
    <v-row justify="start">
      <v-col cols="12" align="center">
        <SectionTitleAnimation>
          <h1 v-show="isOpen" v-text="sectionTitle" class="section-title" />
        </SectionTitleAnimation>
        <SectionDetailAnimation>
          <p v-show="isOpen" v-text="sectionDetail" class="section-detail" />
        </SectionDetailAnimation>
      </v-col>
      <v-col v-for="(project, index) of projects" :key="`${index}-${project.title}`" cols="12" sm="4">
        <SectionDetailAnimation>
          <v-card v-show="isOpen" :color="cardBackGroundTheme" class="rounded-lg pa-5 overflow-hidden" flat >
            <v-hover v-slot="{ hover }">
              <ProjectsContentsAnimation :style="{ '--project-appear-second': `${(index + 1) * .2}s` }">
                <div v-show="isOpen">
                  <v-img class="mx-auto rounded-lg" :src="project.url" max-width="100%" :aspect-ratio="16/9" eager>
                    <v-expand-transition>
                      <div v-if="hover" class="transition-fast-in-fast-out hover-gradient" />
                    </v-expand-transition>
                    <v-expand-transition>
                      <div v-if="hover" class="transition-fast-in-fast-out hover-text d-flex align-center text-subtitle-1 white--text px-3">
                        {{ project.desc }}
                      </div>
                    </v-expand-transition>
                  </v-img>
                </div>
              </ProjectsContentsAnimation>
            </v-hover>
            <v-card-title class="justify-center pb-0">{{ project.title }}</v-card-title>
          </v-card>
        </SectionDetailAnimation>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.projects-area {
  min-height: 41.5rem;
  padding-bottom: 3.5rem;
}

.hover-gradient {
  position: absolute;
  top: 0;
  opacity: .5;
  height: 100%;
  width: 100%;
  background: linear-gradient(#9f44a9, #4e376b);
}

.hover-text {
  position: absolute;
  bottom: 0;
  opacity: .9;
  height: 100%;
  width: 100%;
}
</style>
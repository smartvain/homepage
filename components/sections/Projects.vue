<script setup lang="ts">
import { ProjectType } from '~/types/common';

const sectionTitle  = 'PROJECTS'
const sectionDetail = 'These are my temporary projects.'

const projects: ProjectType[] = [
  { title: 'My sample project1', url: require('@/assets/images/sample-project.jpg'), desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  { title: 'My sample project2', url: require('@/assets/images/sample-project.jpg'), desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  { title: 'My sample project3', url: require('@/assets/images/sample-project.jpg'), desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
]
</script>

<template>
  <v-row justify="start" name="projects-area" class="section-area projects-area">
    <v-col cols="12" align="center">
      <h1 v-text="sectionTitle" class="section-title section-title-top-area" />
      <p v-text="sectionDetail" class="section-description section-description-top-area" />
    </v-col>
    <v-col v-for="(project, index) of projects" :key="`${index}${project.title}`" cols="4">
      <v-card class="rounded-lg pa-5 overflow-hidden" height="300" flat>
        <v-hover v-slot="{ hover }">
          <v-img class="mx-auto rounded-lg" :src="project.url" max-width="100%" :aspect-ratio="16/9">
            <v-expand-transition>
              <div v-if="hover" class="transition-fast-in-fast-out gradient-reveal" />
            </v-expand-transition>
            <v-expand-transition>
              <div v-if="hover" class="transition-fast-in-fast-out text-reveal d-flex text-subtitle-1 white--text px-3">
                {{ project.desc }}
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
        <v-card-title class="justify-center">{{ project.title }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.projects-area {
  min-height: 45rem;
}

.gradient-reveal {
  position: absolute;
  top: 0;
  opacity: .5;
  height: 100%;
  width: 100%;
  background: linear-gradient(#9f44a9, #4e376b);
}

.text-reveal {
  position: absolute;
  bottom: 0;
  opacity: .9;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
<script setup lang="ts">
const detail = 'These are my temporary projects.'
const projects = [
  { title: 'sample1', url: require('@/assets/images/sample-project.jpg'), desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  { title: 'sample2', url: require('@/assets/images/sample-project.jpg'), desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  { title: 'sample3', url: require('@/assets/images/sample-project.jpg'), desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: 'sample4', url: require('@/assets/images/sample-project.jpg'), desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  { title: 'sample5', url: require('@/assets/images/sample-project.jpg'), desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
]
</script>

<template>
  <v-row justify="start" align="center" name="projects-area" class="section-area projects-area">
    <v-col cols="12" align="center">
      <h1 class="section-title section-title-top-area">PROJECTS</h1>
      <p v-text="detail" class="section-description section-description-top-area mt-11" />
    </v-col>
    <v-col v-for="project in projects" cols="4" align-self="start">
      <v-card class="rounded-lg pa-5 overflow-y-auto" height="500" flat>
        <v-img class="mx-auto rounded-lg" :src="project.url" max-width="100%" :aspect-ratio="16/9"></v-img>
        <v-card-title class="justify-center">{{ project.title }}</v-card-title>
        <v-card-text class="text-subtitle-1">{{ project.desc }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.projects-area {
  min-height: 77rem;
}
</style>
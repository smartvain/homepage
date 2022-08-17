<script setup lang="ts">
import TopSection from '@/components/sections/Top.vue'
import SkillsSection from '@/components/sections/Skills.vue'
import ProjectsSection from '@/components/sections/Projects.vue'
import ContactSection from '@/components/sections/Contact.vue'
import { ComponentPublicInstance, onMounted, ref } from 'vue'

const skillsSection   = ref<ComponentPublicInstance>()
const projectsSection = ref<ComponentPublicInstance>()
const contactSection  = ref<ComponentPublicInstance>()
const skillsTop   = ref<number>(0)
const projectsTop = ref<number>(0)
const contactTop  = ref<number>(0)

onMounted(() => {
  if (skillsSection.value) {
    skillsTop.value = skillsSection.value.$el.getBoundingClientRect().top
  }
  if (projectsSection.value) {
    projectsTop.value = projectsSection.value.$el.getBoundingClientRect().top
  }
  if (contactSection.value) {
    contactTop.value = contactSection.value.$el.getBoundingClientRect().top
  }
})

</script>

<template>
  <v-container fluid style="width: 93%; max-width: 102rem;">
    <TopSection />
    <SkillsSection ref="skillsSection" />
    <ProjectsSection ref="projectsSection" class="section-top-crevice" />
    <ContactSection ref="contactSection" class="section-top-crevice" />
  </v-container>
</template>

<style scoped lang="scss">
.section-top-crevice {
  margin-top: 8rem;
}
</style>
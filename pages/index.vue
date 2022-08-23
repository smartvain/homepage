<script setup lang="ts">
import TopSection from '@/components/sections/Top.vue'
import SkillsSection from '@/components/sections/Skills.vue'
import ProjectsSection from '@/components/sections/Projects.vue'
import ContactSection from '@/components/sections/Contact.vue'
import { ComponentPublicInstance, inject, onMounted, reactive, ref } from 'vue'
import { topLengthsSetKey } from '~/store'

const skillsSection   = ref<ComponentPublicInstance>()
const projectsSection = ref<ComponentPublicInstance>()
const contactSection  = ref<ComponentPublicInstance>()
const isOpenSection   = reactive({ skills: false, projects: false, contact: false })

const topLengthsSet = inject(topLengthsSetKey)
if (!topLengthsSet) throw new Error('topLengthsSet is undefined')
const { setTopLengths, topLengths } = topLengthsSet

const setTopLengthsSkills   = (): void => {
  if (skillsSection.value)   setTopLengths('skills', skillsSection.value.$el.getBoundingClientRect().top + window.pageYOffset)
}
const setTopLengthsProjects = (): void => {
  if (projectsSection.value) setTopLengths('projects', projectsSection.value.$el.getBoundingClientRect().top + window.pageYOffset)
}
const setTopLengthsContact  = (): void => {
  if (contactSection.value)  setTopLengths('contact', contactSection.value.$el.getBoundingClientRect().top + window.pageYOffset)
}

const scrollAmountPlus = 650
const onScroll = (): void => {
  const scrollAmount = window.scrollY + scrollAmountPlus
    setTopLengthsSkills()
    setTopLengthsProjects()
    setTopLengthsContact()
  
  if (scrollAmount >= topLengths.skills && !isOpenSection.skills) {
    isOpenSection.skills = true
  }
  else if (scrollAmount >= topLengths.projects && !isOpenSection.projects) {
    isOpenSection.projects = true
  }
  else if (scrollAmount >= topLengths.contact && !isOpenSection.contact) {
    isOpenSection.contact = true
  }
}

onMounted(() => {
  setTopLengthsSkills()
  setTopLengthsProjects()
  setTopLengthsContact()
})
</script>

<template>
  <v-container fluid style="width: 93%; max-width: 102rem;">
    <TopSection />
    <SkillsSection v-scroll="onScroll" :isOpen="isOpenSection.skills" ref="skillsSection" />
    <ProjectsSection v-scroll="onScroll" :isOpen="isOpenSection.projects" ref="projectsSection" />
    <ContactSection v-scroll="onScroll" :isOpen="isOpenSection.contact" ref="contactSection" />
  </v-container>
</template>
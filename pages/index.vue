<script setup lang="ts">
import TopSection from '@/components/sections/Top.vue'
import SkillsSection from '@/components/sections/Skills.vue'
import ProjectsSection from '@/components/sections/Projects.vue'
import ContactSection from '@/components/sections/Contact.vue'
import MainContainer from '~/components/items/MainContainer.vue'
import { ComponentPublicInstance, inject, onMounted, ref } from 'vue'
import { topLengthsSetKey, openSectionsSetKey } from '~/store'

const skillsSection   = ref<ComponentPublicInstance>()
const projectsSection = ref<ComponentPublicInstance>()
const contactSection  = ref<ComponentPublicInstance>()

const openSectionsSet = inject(openSectionsSetKey)
const topLengthsSet   = inject(topLengthsSetKey)
if (!topLengthsSet)   throw new Error('topLengthsSet is undefined')
if (!openSectionsSet) throw new Error('openSectionsSet is undefined')
const { setTopLengths, topLengths }     = topLengthsSet
const { isOpenSections, switchSection } = openSectionsSet

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
  setTopLengthsSkills()
  setTopLengthsProjects()
  setTopLengthsContact()
  
  const scrollAmount = window.scrollY + scrollAmountPlus
  if (scrollAmount >= topLengths.skills && !isOpenSections.skills)          switchSection('skills', true)
  else if (scrollAmount >= topLengths.projects && !isOpenSections.projects) switchSection('projects', true)
  else if (scrollAmount >= topLengths.contact && !isOpenSections.contact)   switchSection('contact', true)
}

onMounted(() => {
  setTopLengthsSkills()
  setTopLengthsProjects()
  setTopLengthsContact()
})
</script>

<script lang="ts">
export default {
  head: { title: 'Ryuichi Amejima - Home page' },
}
</script>

<template>
  <MainContainer>
    <TopSection :isOpen="isOpenSections.top" />
    <SkillsSection v-scroll="onScroll" :isOpen="isOpenSections.skills" ref="skillsSection" />
    <ProjectsSection v-scroll="onScroll" :isOpen="isOpenSections.projects" ref="projectsSection" />
    <ContactSection v-scroll="onScroll" :isOpen="isOpenSections.contact" ref="contactSection" />
  </MainContainer>
</template>
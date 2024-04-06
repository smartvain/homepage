<script setup lang="ts">
import { ComponentPublicInstance, inject, onMounted, ref } from 'vue'
import { topLengthsSetKey, openSectionsSetKey } from '~/store'
import Top from '@/components/sections/Top.vue'
import Skills from '@/components/sections/Skills.vue'
import Projects from '@/components/sections/Projects.vue'
import Contact from '@/components/sections/Contact.vue'
import MainContainer from '~/components/items/MainContainer.vue'

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
  if (skillsSection.value)   setTopLengths('skills', skillsSection.value.$el.getBoundingClientRect().top + window.scrollY)
}
const setTopLengthsProjects = (): void => {
  if (projectsSection.value) setTopLengths('projects', projectsSection.value.$el.getBoundingClientRect().top + window.scrollY)
}
const setTopLengthsContact  = (): void => {
  if (contactSection.value)  setTopLengths('contact', contactSection.value.$el.getBoundingClientRect().top + window.scrollY)
}

const scrollAmountPlus = ref(0)
const onScroll = (): void => {
  setTopLengthsSkills()
  setTopLengthsProjects()
  setTopLengthsContact()

  const scrollAmount = window.scrollY + scrollAmountPlus.value
  if (scrollAmount >= topLengths.skills && !isOpenSections.skills)          switchSection('skills', true)
  else if (scrollAmount >= topLengths.projects && !isOpenSections.projects) switchSection('projects', true)
  else if (scrollAmount >= topLengths.contact && !isOpenSections.contact)   switchSection('contact', true)
}

onMounted(() => {
  setTopLengthsSkills()
  setTopLengthsProjects()
  setTopLengthsContact()
  scrollAmountPlus.value = window.innerHeight
})
</script>

<script lang="ts">
export default {
  head: { title: 'Ryuichi Amejima - Home page' },
}
</script>

<template>
  <MainContainer>
    <Top :isOpen="isOpenSections.top" />
    <Skills v-scroll="onScroll" :isOpen="isOpenSections.skills" ref="skillsSection" />
    <Projects v-scroll="onScroll" :isOpen="isOpenSections.projects" ref="projectsSection" />
    <Contact v-scroll="onScroll" :isOpen="isOpenSections.contact" ref="contactSection" />
  </MainContainer>
</template>
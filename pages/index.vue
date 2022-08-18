<script setup lang="ts">
import TopSection from '@/components/sections/Top.vue'
import SkillsSection from '@/components/sections/Skills.vue'
import ProjectsSection from '@/components/sections/Projects.vue'
import ContactSection from '@/components/sections/Contact.vue'
import { ComponentPublicInstance, inject, onMounted, ref } from 'vue'
import { topLengthsSetKey } from '~/store'

const skillsSection   = ref<ComponentPublicInstance>()
const projectsSection = ref<ComponentPublicInstance>()
const contactSection  = ref<ComponentPublicInstance>()

onMounted(() => {
  const state = inject(topLengthsSetKey)
  if (!state) throw new Error('state is undefined')
  const { setTopLengths } = state

  if (skillsSection.value) {
    setTopLengths('skills', skillsSection.value?.$el.getBoundingClientRect().top)
  }
  if (projectsSection.value) {
    setTopLengths('projects', projectsSection.value.$el.getBoundingClientRect().top)
  }
  if (contactSection.value) {
    setTopLengths('contact', contactSection.value.$el.getBoundingClientRect().top)
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
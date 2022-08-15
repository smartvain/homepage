<script setup lang="ts">
import TopSection from '@/components/sections/Top.vue'
import SkillsSection from '@/components/sections/Skills.vue'
import ProjectsSection from '@/components/sections/Projects.vue'
import ContactSection from '@/components/sections/Contact.vue'
</script>

<template>
  <v-container fluid style="width: 93%; max-width: 102rem;">
    <TopSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </v-container>
</template>

<style scoped lang="scss">
</style>
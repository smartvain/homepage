<script setup lang="ts">
const detail = 'These are my temporary projects.'
</script>

<template>
  <v-row justify="center" align="center" name="projects-area" class="section-area projects-area">
    <v-col cols="12" align="center">
      <h1 class="section-title section-title-top-area">PROJECTS</h1>
      <p v-text="detail" class="section-description section-description-top-area mt-11" />
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
</style>
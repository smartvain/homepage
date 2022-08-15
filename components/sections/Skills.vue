<script setup lang="ts">
const detail = 'Skills I can handle are listed here.'
</script>

<template>
  <v-row justify="center" align="center" name="skills-area" class="section-area skills-area">
    <v-col cols="7" align="center">
      <div style="position: relative;">
        <img style="width: 65rem" :src="require('@/assets/images/skill-space.png')" class="skill-space">
        <img style="width: 65rem" :src="require('@/assets/images/skill-astronaut.png')" class="skill-astronaut">
      </div>
    </v-col>
    <v-col cols="5" align="center">
      <h1 class="section-title section-title-top-area">SKILLS</h1>
      <p v-text="detail" class="section-description section-description-top-area mt-16" />
    </v-col>
  </v-row>
</template>

<style scope lang="scss">
.skill-space {
  position: absolute;
  top: 0;
  right: 0;
}

.skill-astronaut {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
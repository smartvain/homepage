<template>
  <transition name="projects-contents">
    <slot />
  </transition>
</template>

<style scoped lang="scss">
.projects-contents-enter-active, .projects-contents-leave-active {
  transition: transform 1s, opacity .6s;
  opacity: 1;
  transform: translateY(0);
  transition-delay: var(--project-appear-second);
}
.projects-contents-enter, .projects-contents-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
</style>
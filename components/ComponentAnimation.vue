<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: transform 1s, opacity .6s;
  opacity: 1;
  transform: translateY(0);
  animation-delay: 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
</style>
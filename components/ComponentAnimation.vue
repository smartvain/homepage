<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  animation-delay: 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
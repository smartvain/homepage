<template>
  <transition name="main-image-left">
    <slot />
  </transition>
</template>

<style scoped lang="scss">
.main-image-left-enter-active, .main-image-left-leave-active {
  transition: transform 1s, opacity .6s;
  opacity: 1;
  transform: translateX(0);
}
.main-image-left-enter, .main-image-left-leave-to {
  opacity: 0;
  transform: translateX(-2rem);
}
</style>
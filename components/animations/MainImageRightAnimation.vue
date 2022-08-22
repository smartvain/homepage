<template>
  <transition name="main-image-right">
    <slot />
  </transition>
</template>

<style scoped lang="scss">
.main-image-right-enter-active, .main-image-right-leave-active {
  transition: transform 1s, opacity .6s;
  opacity: 1;
  transform: translateX(0);
}
.main-image-right-enter, .main-image-right-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}
</style>
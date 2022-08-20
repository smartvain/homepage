<template>
  <transition name="section-title">
    <slot></slot>
  </transition>
</template>

<style scoped lang="scss">
.section-title-enter-active, .section-title-leave-active {
  transition: transform 1s, opacity .6s;
  opacity: 1;
  transform: translateY(0) scaleY(1.2);
  transition-delay: .5s;
}
.section-title-enter, .section-title-leave-to {
  opacity: 0;
  transform: translateY(2rem) scaleY(1.2);
}
</style>
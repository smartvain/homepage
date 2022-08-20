<template>
  <transition name="section-detail">
    <slot></slot>
  </transition>
</template>

<style scoped lang="scss">
.section-detail-enter-active, .section-detail-leave-active {
  transition: transform 1s, opacity .6s;
  opacity: 1;
  transform: translateY(0);
}
.section-detail-enter, .section-detail-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
</style>
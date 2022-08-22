<script setup lang="ts">
const starsCount = 10
</script>

<template>
  <div><span v-for="n of starsCount" class="shooting-star" /></div>
</template>

<style scoped lang="scss">
.shooting-star {
  position: absolute;
  top: 10%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
  animation: 4s shooting linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }

  // &:nth-child(1) {
  //   top: 0;
  //   right: 0;
  //   left: initial;
  //   animation-delay: 0;
  //   animation-duration: 1s;
  // }

  &:nth-child(2) {
    top: 0;
    right: 80px;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
  }

  &:nth-child(3) {
    top: 80px;
    right: 0px;
    left: initial;
    animation-delay: 0.4s;
    animation-duration: 2s;
  }

  // &:nth-child(4) {
  //   top: 0;
  //   right: 180px;
  //   left: initial;
  //   animation-delay: 0.6s;
  //   animation-duration: 1.5s;
  // }

  // &:nth-child(5) {
  //   top: 0;
  //   right: 400px;
  //   left: initial;
  //   animation-delay: 0.8s;
  //   animation-duration: 2.5s;
  // }

  &:nth-child(6) {
    top: 0;
    right: 600px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 3s;
  }

  &:nth-child(7) {
    top: 300px;
    right: 0px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 1.75s;
  }

  // &:nth-child(8) {
  //   top: 0px;
  //   right: 700px;
  //   left: initial;
  //   animation-delay: 1.4s;
  //   animation-duration: 1.25s;
  // }

  &:nth-child(9) {
    top: 0px;
    right: 1000px;
    left: initial;
    animation-delay: 0.75s;
    animation-duration: 2.25s;
  }

  &:nth-child(10) {
    top: 0px;
    right: 1000px;
    left: initial;
    animation-delay: 2.75s;
    animation-duration: 2.25s;
  }
}

@keyframes shooting {
  0% {
    transform: rotate(325deg) translateX(0);
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: rotate(325deg) translateX(-2000px);
    opacity: 0;
  }
}
</style>
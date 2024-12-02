<template>
  <Transition name="fade">
    <slot />
  </Transition>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease;
}
</style>

<template>
  <Transition name="register">
    <slot />
  </Transition>
</template>

<style>
.register-enter-active,
.register-leave-active {
  transition: all 0.5s ease;
}

.register-enter-from,
.register-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>

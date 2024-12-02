<script setup>
defineProps(['isMenuOpen']);
defineEmits(['toggleMenu']);
</script>

<template>
  <button
    type="button"
    title="Menu"
    name="menu"
    :class="['menu-btn', { open: isMenuOpen }]"
    aria-label="Toggle menu"
    @click="$emit('toggleMenu')"
    @keydown.enter="toggleMenu"
    @keydown.space.prevent="toggleMenu"
  >
    <span class="menu-btn__burger"></span>
  </button>
</template>

<style scoped>
.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background: var(--blue-main);
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  text-align: left;
}

.menu-btn__burger {
  width: 24px;
  height: 3px;
  background: var(--bw-white);
  border-radius: 2px;
  transition: all 0.5s ease-in-out;
}

.menu-btn__burger::before,
.menu-btn__burger::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 3px;
  background: var(--bw-white);
  border-radius: 2px;
  transition: all 0.5s ease-in-out;
}

.menu-btn__burger::before {
  transform: translateY(-6px);
}

.menu-btn__burger::after {
  transform: translateY(6px);
}

.menu-btn.open .menu-btn__burger {
  transform: translateX(-24px);
  background: transparent;
  box-shadow: none;
}

.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(17px, -17px);
}

.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(17px, 17px);
}

@media screen and (min-width: 1000px) {
  .menu-btn {
    display: none;
  }
}
</style>

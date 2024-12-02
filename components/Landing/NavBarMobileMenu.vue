<script setup>
defineProps(['menuItems']);
defineEmits(['toggleMenu', 'onClickRegister']);
</script>

<template>
  <div class="mobile-menu">
    <div class="mobile-menu__content">
      <ul class="nav__list-mobile">
        <li
          v-for="item in menuItems"
          :key="item.title"
          class="nav__item-mobile"
        >
          <NuxtLink
            class="nav__link-mobile"
            :to="item.link"
            @click="$emit('toggleMenu')"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bw-white);
  z-index: 100;
}
ul {
  list-style-type: none;
  padding: 0;
}
.mobile-menu__content {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.nav__list-mobile {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.nav__link-mobile {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--blue-main);
  text-decoration: none;
  transition: color 0.3s ease;
}
.nav__link-mobile:hover {
  color: var(--blue-darker);
}
.login-button {
  width: 228px;
}
</style>

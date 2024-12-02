<script setup>
const isMenuOpen = ref(false);
const route = useRoute();
const isBetaPage = computed(() => route.path === '/beta-page');

const menuItemsDefault = [
  {
    title: 'Process',
    link: '/#how-we-do-it',
  },
  {
    title: 'FAQ',
    link: '/#faq',
  },
  {
    title: 'Beta',
    link: '/#join-waitlist',
  },
  {
    title: 'Contacts',
    link: '/#contacts',
  },
];

const menuItemsBeta = [
  {
    title: 'Process',
    link: '#showcase',
  },
  {
    title: 'FAQ',
    link: '#faq',
  },
  {
    title: 'Contacts',
    link: '#contacts',
  },
];

const menuItems = computed(() =>
  isBetaPage.value ? menuItemsBeta : menuItemsDefault,
);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  manageNoScroll();
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar-content">
      <NuxtLink to="/" class="logo">
        <img
          src="/MX_logo_blue.png"
          alt="MX logo"
          width="75.3"
          height="41"
        />
      </NuxtLink>
      <ul class="nav__list">
        <li
          v-for="item in menuItems"
          :key="item.title"
          class="nav__item"
        >
          <NuxtLink class="nav__link" :to="item.link">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <div class="placeholder-for-login-button" />
      <LandingNavBarMenuButton :is-menu-open="isMenuOpen" @click="toggleMenu" />
    </div>
  </nav>
  <Transition name="mobile-menu">
    <LandingNavBarMobileMenu
      v-if="isMenuOpen"
      class="mobile-menu"
      :menu-items="menuItems"
      @toggle-menu="toggleMenu"
    />
  </Transition>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  opacity: 0.98;
  background: var(--bw-white);
  border-bottom: 1px solid var(--blue-main);
}
.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0 24px;
  max-width: var(--max-width-default);
  margin: 0 auto;
}

.logo {
  font-weight: 800;
  font-size: 48px;
  line-height: 52px;
  color: var(--bw-black);
}

.nav__list {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav__item {
  padding: 0;
  margin: 0;
}

.nav__link {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--blue-main);
  text-decoration: none;
  transition: color 0.3s linear;
}
.nav__link:hover {
  color: var(--blue-darker);
}

.nav__login-button {
  display: none;
}
.profile-pic-wrapper {
  display: none;
}
.nav__dashboard-link {
  display: none;
}
.nav__dashboard-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--blue-main);
  padding: 12px;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  transition: color 0.3s linear;
}
.nav__dashboard-link:hover {
  color: var(--blue-darker);
}
@media screen and (min-width: 1000px) {
  .nav__list {
    display: flex;
    gap: 48px;
  }

  .nav__login-button {
    display: flex;
    width: 228px;
  }

  .mobile-menu {
    display: none;
  }
  .profile-pic-wrapper {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #d9d9d9;
    overflow: hidden;
  }
  .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateX(100%);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.6s ease;
}
</style>

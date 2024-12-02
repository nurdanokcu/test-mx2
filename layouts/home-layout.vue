<template>
  <div class="layout">
    <LandingNavBar />
    <div class="main">
      <slot />
    </div>
    <div class="links">
      <NuxtLink
        to="https://www.propaganda-solutions.com/"
        target="blank"
        class="brand"
      >
        <span class="brand-text"> Made by </span>
        <img
          src="/PS_logo.webp"
          alt="propaganda solutions logo"
          width="30"
          height="22"
        />
      </NuxtLink>
      <div class="links-impressum">
        <NuxtLink
          to="/impressum"
          target="blank"
          class="link"
        >
          Impressum
        </NuxtLink>
        <NuxtLink
          to="/terms-of-service#cookies"
          target="blank"
          class="link"
        >
          Cookies
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.main {
  margin-top: var(--header-height);
}
.layout-menu {
  display: none;
}
.links {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: 100%;
  gap: 40px;
}
.brand {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.brand-text {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: var(--bw-black);
}
.links-impressum {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.link {
  color: var(--blue-main);
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  transition: color 0.3s ease;
}
.link:hover {
  color: var(--blue-darker);
}
.link:active {
  color: var(--blue-darkest);
}
@media screen and (min-width: 700px) {
  .links {
    flex-direction: row;
    justify-content: space-between;
    padding: 24px 84px;
    max-width: var(--max-width-dashboard);
    margin: 0 auto;
  }
}
</style>

<script setup>
definePageMeta({
  layout: 'home-layout',
});

useHead({
  style: ['body{background: var(--home-background);}'],
});
</script>

<template>
  <main>
    <div class="beta-content">
      <LandingBetaWelcome />
      <div id="showcase" class="showcase-wrapper">
        <LandingShowcase showcase-title="You’ll get to feel it first" />
      </div>
      <LandingGuide />
      <LandingFaqComp />
      <LandingTheFooter />
    </div>
  </main>
</template>

<style scoped>
.showcase-wrapper {
  margin-bottom: 88px;
}
</style>

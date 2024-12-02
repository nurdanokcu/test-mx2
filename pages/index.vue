<script setup>
definePageMeta({
  layout: 'home-layout',
});

useHead({
  style: ['body{background: var(--home-background);}'],
});
</script>

<template>
  <main class="home">
    <LandingHeaderComp />
    <div class="showcase-wrapper">
      <LandingShowcase showcase-title="Let us show you" />
    </div>
    <LandingWhyUs />
    <LandingBenefits />
    <LandingHowWeDoIt />
    <LandingGuide />
    <LandingJoinBeta />
    <LandingFaqComp />
    <LandingCountDown />
    <LandingTheFooter />
  </main>
</template>

<style scoped>
.showcase-wrapper {
  margin-bottom: 200px;
}
@media screen and (min-width: 1000px) {
  .showcase-wrapper {
    margin-bottom: 160px;
  }
}
</style>

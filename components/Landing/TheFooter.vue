<template>
  <div id="contacts" class="footer-container">
    <div class="footer-content">
      <LandingTheFooterContactUs class="footer-contact-us" />
      <LandingTheFooterContactAddress />
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  padding: 120px 0 0 0;
  margin-bottom: 24px;
}

.footer-content {
  box-sizing: border-box;
  background: var(--home-section-background);
  border-radius: 10px;
  padding: 32px;
}
@media (min-width: 700px) {
  .footer-content {
    margin: 0 16px;
  }
}
@media (min-width: 1000px) {
  .footer-content {
    padding: 54px;
    display: flex;
    justify-content: space-between;
    gap: 100px;
    margin: 0 auto;
    max-width: var(--max-width-dashboard);
  }
  .footer-contact-us {
    flex-grow: 1;
  }
}

@media (min-width: 1400px) {
  .footer-content {
    gap: 250px;
  }

  .footer-container {
    padding: 120px 80px 0 80px;
  }
}
</style>

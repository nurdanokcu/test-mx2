<template>
  <div id="faq" class="faq-container">
    <div class="faq-content">
      <p class="faq-heading">
        FAQ
      </p>
      <p class="faq-text">
        Frequently asked questions
      </p>
      <div class="line" />
      <div>
        <LandingFaqCards />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.faq-container {
  width: 100%;
}
.faq-content {
  padding: 80px 16px;
  max-width: 1000px;
  margin: 0 auto;
}
.faq-heading {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  color: var(--bw-black);
  text-align: center;
}
.faq-text {
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  color: var(--bw-black);
  text-align: center;
  margin-bottom: 30px;
}
.line {
  width: 75%;
  height: 1px;
  background-color: var(--blue-main);
  margin: auto;
  margin-bottom: 40px;
}
@media (min-width: 700px) {
  .faq-content {
    padding: 80px 24px;
  }
  .line {
    width: 65%;
  }
}
</style>

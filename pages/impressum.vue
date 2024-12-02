<script setup>
definePageMeta({
  layout: 'home-layout',
});
useHead({
  style: ['body{background: var(--home-background);}'],
  title: 'MX² | Impressum',
});
</script>

<template>
  <div class="impressum">
    <div class="impressum-header">
      <h1 class="impressum-title">
        Impressum
      </h1>
      <div class="impressum-contact">
        <div>
          <p class="impressum-bold">
            Propaganda Solutions GmbH is located at:
          </p>
          <a
            class="impressum-link"
            target="_blank"
            title="Click to open location in Google Maps"
            href="https://goo.gl/maps/7iattr6gLkhtyXsa6"
          >
            Propaganda Solutions GmbHReinhardtstraße 48 Berlin, Germany
          </a>
        </div>
        <div>
          <p class="impressum-bold">
            You can contact us here:
          </p>
          <a
            class="impressum-link"
            title="Click to send us an email"
            href="mailto:info@propaganda-solutions.com"
          >
            info@propaganda-solutions.com
          </a>
        </div>
      </div>
    </div>
    <div class="impressum-content">
      <a
        class="impressum-link"
        target="_blank"
        title="Click to open location in Google Maps"
        href="tel:+493092103672"
      >
        Tel: +49 (0) 30 92103672
      </a>
      <div>
        <p>
          <span class="impressum-bold"> Managing Director </span>
          Thorsten Nolte
        </p>
        <p>
          <span class="impressum-bold">
            Registered office of the company:
          </span>
          Berlin
          <br />
          Charlottenburg Local Court - HRB 214869 B -
        </p>
      </div>
      <p>
        Access to and use of this website is subject to the following terms and
        conditions and applicable law. Unless otherwise noted, all content on
        this site, including the text, images and their arrangement, are the
        property of Propaganda Solutions GmbH. All trademarks used and mentioned
        on this site are the property of their respective owners. Nothing
        contained on this site should be construed as conferring by implication,
        estoppel or otherwise any license or right to any property of Propaganda
        Solutions GmbH or any third party that is protected by copyright,
        patent, trademark or other right.
      </p>
      <div class="impressum-external">
        <p>Contents of external websites</p>
        <p>
          Propaganda Solutions GmbH has no control over websites or advertisers
          that link to or from our site and is not responsible for the privacy
          practices and/or the content of such websites.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.impressum {
  box-sizing: border-box;
  padding: 60px 24px;
  min-height: calc(100vh - var(--header-height) - 72px);
}
.impressum-header {
  margin-bottom: 40px;
}
.impressum-contact {
  color: var(--bw-black);
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
}
.impressum-title {
  color: var(--bw-black);
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 52px;
}
.impressum-contact {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.impressum-bold {
  font-weight: 700;
}
.impressum-link {
  color: var(--bw-black);
  text-decoration: none;
  transition: color 0.2s ease;
}
.impressum-link:hover {
  color: var(--blue-main);
}
.impressum-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
  color: #1f1f1f;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
}
.impressum-external {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 12px;
  font-weight: 400;
}
@media screen and (min-width: 700px) {
  .impressum {
    padding: 60px 80px;
    max-width: 1600px;
    margin: 0 auto;
  }
  .impressum-header {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
}
</style>

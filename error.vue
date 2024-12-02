<script setup lang="ts">
import { newUserGuide1 } from '~/assets/images/newUserGuide';

const error = useError();

const httpError = error.value as {
  url: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  description: string;
  data?: any;
} | null;
</script>

<template>
  <div>
    <!-- <LayoutTheHeader /> -->
    <LandingNavBar />
    <main v-if="httpError?.statusCode === 404" class="error">
      <div class="error-body">
        <div class="error-content">
          <p class="error-message">
            Not found
          </p>
          <h1 class="error-title">
            404
          </h1>
          <p class="error-subtitle">
            Oops!
          </p>
          <p class="error-description">
            It looks like you've taken a wrong turn. Don't worry, our marketing
            team isn't lost in the abyss - they're just taking a creative
            detour! Stay tuned while we get things back on track.
          </p>
        </div>
        <div class="error-image-wrapper">
          <img
            class="error-image"
            :src="newUserGuide1"
            alt="404 image"
          />
        </div>
      </div>
      <div class="error-footer">
        <div class="footer-enter">
          <span>Enter</span>
          <IconsGeneralKeyboardEnter />
        </div>
        <NuxtLink
          class="footer-button"
          aria-label="Go Back Home"
          to="/"
        >
          <CommonLinkSpan
            :text="'Go Back Home'"
            :has-focus="true"
            :is-filled="true"
          >
            <IconsGeneralArrow color="white" />
          </CommonLinkSpan>
        </NuxtLink>
      </div>
    </main>
    <div v-else class="main">
      Oops, something went wrong.
      <br />
      <br />
      {{ error }}
    </div>
  </div>
</template>

<style scoped>
.main {
  margin: 0 auto;
  max-width: 1200px;
  padding: 24px;
  margin-top: var(--header-height);
}
.error {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 24px;
  min-height: calc(100vh - var(--header-height));
  max-width: 1600px;
}
.error-body {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  padding: 24px 0;
}
.error-content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 420px;
}
.error-message {
  color: rgba(0, 0, 0, 0.3);
  font-size: 48px;
  font-weight: 100;
  line-height: normal;
}
.error-title {
  color: var(--blue-main);
  font-size: 128px;
  font-weight: 100;
  line-height: normal;
}
.error-subtitle {
  color: var(--blue-main);
  font-size: 48px;
  font-weight: 800;
  line-height: normal;
}
.error-description {
  color: var(--bw-black);
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
}
.error-image-wrapper {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 250px;
}
.error-image {
  box-sizing: border-box;
  object-fit: contain;
  width: 100%;
  height: auto;
}
.error-footer {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}
.footer-enter {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  border: 1px solid var(--base-light-frenchgrayI);
  border-radius: 8px;
  color: var(--bw-gray);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.footer-button {
  width: fit-content;
}
@media screen and (min-width: 1000px) {
  .error {
    padding: 48px 80px;
  }
  .error-body {
    padding: 48px 0;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
@media screen and (min-width: 1200px) {
  .error {
    margin: var(--header-height) auto 0 auto;
  }
}
</style>

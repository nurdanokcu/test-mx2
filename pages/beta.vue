<script setup lang="ts">
definePageMeta({
  layout: false,
});

const { confirmEmail } = landingApi();
const hasError = ref(false);
const loading = ref(true);

const route = useRoute();
const token = route.query.confirmation_token as string;
if (!token) {
  navigateTo('/');
}
if (token) {
  const { error, data } = await confirmEmail(token);
  if (data.value) {
    loading.value = false;
    navigateTo('/beta-page');
  }
  if (error.value) {
    hasError.value = true;
    loading.value = false;
  }
}
</script>

<template>
  <main class="confirmation-page">
    <div v-if="loading">
      <CommonLoadingIndicator class="loading-wrapper" />
      <p>Please wait while we confirm your e-mail</p>
    </div>
    <div v-if="hasError" class="error">
      <IconsGeneralError />
      An error occurred while confirming your e-mail,
      <br />
      please try again later or contact us at
      <br />
      <a href="mailto:info@propaganda-solutions.com">
        info@propaganda-solutions.com
      </a>
    </div>
  </main>
</template>

<style>
.confirmation-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
}
.loading-wrapper {
  margin-bottom: 48px;
}
</style>

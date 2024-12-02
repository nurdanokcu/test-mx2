<script setup lang="ts">
const description = 'MX² Project revolutionizes online advertising with the power of AI. Specializing in ad campaigns across Google, Facebook, Instagram, You Tube, Tik Tok - we deliver targeted, efficient, and impactful advertising solutions. Experience the future of internet marketing with MX²\'s innovative AI technology.';
useHead({
  meta: [
    {
      name: 'charset',
      content: 'utf-8',
      tagPriority: 0,
    },
    {
      name: 'twitter:card',
      content: 'summary',
      tagPriority: 0,
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
      tagPriority: 0,
    },
    {
      name: 'theme-color',
      content: '#171fd6',
      tagPriority: 0,
    },
    {
      name: 'color-scheme',
      content: 'light',
      tagPriority: 0,
    },
    {
      name: 'description',
      content: description,
      tagPriority: 0,
    },
    {
      name: 'og:title',
      content: 'Internet advertising with AI: Google, Fb, Instagram and others - MX² Project',
      tagPriority: 0,
    },
    {
      name: 'og:description',
      content: description,
      tagPriority: 0,
    },
    {
      name: 'og:type',
      content: 'website',
      tagPriority: 0,
    },
    {
      name: 'twitter:title',
      content: 'Internet advertising with AI: Google, Fb, Instagram and others - MX² Project',
      tagPriority: 0,
    },
    {
      name: 'twitter:description',
      content: description,
      tagPriority: 0,
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :color="'#0000a4'" />
    <NuxtPage />
  </NuxtLayout>
</template>

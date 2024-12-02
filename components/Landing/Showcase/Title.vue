<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h2 class="title">
    {{ title }}
  </h2>
</template>

<style scoped>
.title {
  font-weight: 800;
  font-size: 48px;
  line-height: 52px;
  color: var(--bw-white);
  max-width: 400px;
  margin: 0 auto;
}
</style>

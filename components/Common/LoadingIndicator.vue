<template>
  <div
    :style="
      isFullScreen ? 'height: calc(100vh - var(--header-height))' : 'auto'
    "
    class="loading"
  >
    <div class="loading-indicator" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  isFullScreen: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading-indicator {
  border: 4px solid var(--bw-white);
  border-top: 4px solid var(--blue-main);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

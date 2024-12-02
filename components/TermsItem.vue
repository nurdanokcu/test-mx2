<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<template>
  <div class="terms-item">
    <p class="terms-item-title">
      {{ title }}
    </p>
    <div class="terms-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.terms-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.terms-item-title {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
}
.terms-item-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>

<script setup>
defineProps({
  message: {
    type: String,
    required: false,
    default: '',
  },
  isBold: {
    type: Boolean,
    required: false,
    default: false,
  },
  textColor: {
    type: String,
    required: false,
    default: 'var(--bw-lighter)',
  },
});
</script>

<template>
  <div :class="['error', { 'error-bold': isBold }]">
    <IconsGeneralError />
    <span
      v-if="message"
      class="error-msg"
      :style="{ color: textColor }"
    >
      {{ message }}
    </span>
    <slot />
  </div>
</template>

<style scoped>
.error {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
}

.error-msg {
  font-weight: 300;
  font-size: 14px;
  line-height: 15px;
}

.error-bold {
  align-items: center;
}
.error-bold .error-msg {
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
}
</style>

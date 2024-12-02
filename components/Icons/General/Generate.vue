<script setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: 'var(--purple-ai-related)',
  },
});
</script>

<template>
  <svg
    width="16"
    height="23"
    viewBox="0 0 16 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3.6001V0.600098L4 4.6001L8 8.6001V5.6001C11.31 5.6001 14 8.2901 14 11.6001C14 12.6101 13.75 13.5701 13.3 14.4001L14.76 15.8601C15.54 14.6301 16 13.1701 16 11.6001C16 7.1801 12.42 3.6001 8 3.6001ZM8 17.6001C4.69 17.6001 2 14.9101 2 11.6001C2 10.5901 2.25 9.6301 2.7 8.8001L1.24 7.3401C0.46 8.5701 0 10.0301 0 11.6001C0 16.0201 3.58 19.6001 8 19.6001V22.6001L12 18.6001L8 14.6001V17.6001Z"
      :fill="color"
    />
  </svg>
</template>

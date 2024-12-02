<script setup>
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'var(--bw-black)',
  },
});

const fillColor = computed(() => {
  switch (props.color) {
    case 'blue':
      return 'var(--blue-main)';
    case 'white':
      return 'var(--bw-white)';
    default:
      return props.color;
  }
});
</script>

<template>
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 2V9H3.67L3.08 9.59L2.5 10.17V2H13.5ZM14.5 0H1.5C0.95 0 0.5 0.45 0.5 1V15L4.5 11H14.5C15.05 11 15.5 10.55 15.5 10V1C15.5 0.45 15.05 0 14.5 0ZM19.5 4H17.5V13H4.5V15C4.5 15.55 4.95 16 5.5 16H16.5L20.5 20V5C20.5 4.45 20.05 4 19.5 4Z"
      :fill="fillColor"
    />
  </svg>
</template>

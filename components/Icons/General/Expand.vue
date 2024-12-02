<script setup>
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'var(--bw-black)',
  },
  isRotated: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const fillColor = computed(() => {
  switch (props.color) {
    case 'blue':
      return 'var(--blue-main)';
    case 'white':
      return 'var(--bw-white)';
    case 'black':
      return 'var(--bw-black)';
    default:
      return props.color;
  }
});
</script>

<template>
  <svg
    :class="['expand', { 'expand-rotate': isRotated }]"
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.59 0.590027L6 5.17003L1.41 0.590027L0 2.00003L6 8.00003L12 2.00003L10.59 0.590027Z"
      :fill="fillColor"
    />
  </svg>
</template>

<style scoped>
.expand {
  transition: transform 0.4s ease;
}

.expand-rotate {
  transform: rotate(180deg);
}
</style>

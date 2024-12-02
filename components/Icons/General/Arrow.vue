<script setup lang="ts">
type Directions = 'left' | 'right' | 'top' | 'bottom';
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'var(--bw-black)',
  },
  direction: {
    type: String as PropType<Directions>,
    required: false,
    default: 'left',
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

const rotate = computed(() => {
  switch (props.direction) {
    case 'right':
      return 'rotate(180deg)';
    case 'top':
      return 'rotate(90deg)';
    case 'bottom':
      return 'rotate(-90deg)';
    default:
      return 'rotate(0deg)';
  }
});
</script>

<template>
  <svg
    :style="{ transform: rotate }"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  themeColor: {
    type: String,
    default: 'var(--blue-main)',
  },
  hoverColor: {
    type: String,
    default: 'var(--blue-darker)',
  },
  isFilled: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: '48px',
  },
  fontSize: {
    type: String,
    default: '16px',
  },
  isRowReverse: {
    type: Boolean,
    default: false,
  },
});
const styleObject = computed(() => {
  return {
    '--theme-color': props.themeColor,
    'height': props.height,
    '--hover-color': props.hoverColor,
    'font-size': props.fontSize,
    'flex-direction': props.isRowReverse ? 'row-reverse' : 'row',
  };
});
</script>

<template>
  <span
    :style="styleObject"
    :class="[
      'link-span',
      {
        'link-span--filled': isFilled,
        'link-span--outlined': !isFilled,
      },
    ]"
  >
    <slot />
    <span class="link-span-text">
      {{ text }}
    </span>
  </span>
</template>

<style>
.link-span {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 14px;
  border: 2px solid var(--theme-color);
  border-radius: 12px;
  font-weight: 700;
  transition: all 0.3s ease;
}
.link-span-text {
  text-align: center;
  flex-grow: 1;
}
.link-span:disabled {
  cursor: initial;
  opacity: 0.3;
}
.link-span--filled {
  background-color: var(--theme-color);
  color: var(--bw-white);
}
.link-span--filled .link-span-text {
  color: var(--bw-white);
}
.link-span--filled:hover {
  background-color: var(--hover-color);
}
.link-span--outlined {
  background-color: var(--bw-white);
  color: var(--theme-color);
}
.link-span--outlined:hover {
  background-color: var(--bw-almost-white);
}
.link-span--outlined:active {
  background-color: var(--base-light-frenchgrayI);
}
.link-span--outlined .link-span-text {
  color: var(--theme-color);
}
</style>

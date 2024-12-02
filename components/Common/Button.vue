<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset';

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
    default: 'auto',
  },
  type: {
    type: String as () => ButtonType,
    default: 'button',
  },
  hasFocus: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  fontSize: {
    type: String,
    default: '16px',
  },
  isRowReverse: {
    type: Boolean,
    default: false,
  },
  onGuideMode: {
    type: Boolean,
    default: false,
  },
  minHeight: {
    type: String,
    default: '48px',
  },
});
defineEmits(['onClick']);
const button = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { focused } = useFocus(button, { initialValue: true });

const styleObject = computed(() => {
  return {
    '--theme-color': props.themeColor,
    'minHeight': props.minHeight,
    'height': props.height,
    '--hover-color': props.hoverColor,
    'font-size': props.fontSize,
    'flex-direction': props.isRowReverse ? 'row-reverse' : 'row',
  } as Record<string, string>;
});
</script>

<template>
  <button
    :ref="hasFocus ? 'button' : ''"
    :style="styleObject"
    name="common-button"
    :type="type"
    :aria-label="text"
    :disabled="disabled || onGuideMode"
    :class="[
      'common-button',
      {
        'common-button--filled': isFilled,
        'common-button--outlined': !isFilled,
        'common-button--disabled': disabled,
        'common-button--guide-mode': onGuideMode,
      },
    ]"
    @click="$emit('onClick')"
  >
    <slot></slot>
    <span class="common-button-text">
      {{ text }}
    </span>
  </button>
</template>

<style>
.common-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
  width: 100%;
  padding: 4px 14px;
  border: 2px solid var(--theme-color);
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
}
.common-button-text {
  text-align: center;
  flex-grow: 1;
}
.common-button--disabled {
  cursor: initial;
  opacity: 0.6;
}
.common-button--guide-mode {
  cursor: initial;
}
.common-button--filled {
  background-color: var(--theme-color);
  color: var(--bw-white);
}
.common-button--filled .common-button-text {
  color: var(--bw-white);
}
.common-button--filled:hover {
  background-color: var(--hover-color);
  border: 2px solid var(--hover-color);
}
.common-button--outlined {
  background-color: var(--bw-white);
  color: var(--theme-color);
}
.common-button--outlined:hover {
  background-color: var(--bw-almost-white);
}
.common-button--outlined:active {
  background-color: var(--base-light-frenchgrayI);
}
.common-button--outlined .common-button-text {
  color: var(--theme-color);
}
.common-button--filled:disabled:hover {
  background-color: var(--theme-color);
}
.common-button--outlined:disabled:hover {
  background-color: var(--bw-white);
}
</style>

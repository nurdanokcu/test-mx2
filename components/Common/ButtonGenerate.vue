<script setup lang="ts">
type ThemeType = 'purple' | 'white';

const props = defineProps({
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  text: {
    type: String,
    required: false,
    default: 'Generate',
  },
  theme: {
    type: String as PropType<ThemeType>,
    required: false,
    default: 'purple',
  },
});

defineEmits(['onGenerate']);

const iconColor = computed(() => {
  return props.theme === 'purple'
    ? 'var(--bw-white)'
    : 'var(--purple-ai-related)';
});
</script>

<template>
  <button
    :class="['generate-btn', `generate-btn--${theme}`]"
    type="button"
    title="Click to generate"
    :disabled="disabled"
    @click="$emit('onGenerate')"
    @keydown.enter="$emit('onGenerate')"
  >
    <IconsGeneralGenerate
      :color="iconColor"
      :class="{ 'generate-icon-loading': isLoading }"
    />
    <span class="generate-text">
      {{ isLoading ? "Generating..." : text }}
    </span>
  </button>
</template>

<style scoped>
.generate-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  width: 100%;
  height: 48px;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.generate-btn--purple {
  background: var(--purple-ai-related);
}
.generate-btn--purple .generate-text {
  color: var(--bw-white);
}
.generate-btn--white {
  background: var(--bw-white);
  border: 2px solid var(--purple-ai-related);
}
.generate-btn--white .generate-text {
  color: var(--purple-ai-related);
}
.generate-btn:disabled {
  opacity: 0.5;
  cursor: initial;
}
.generate-icon-loading {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.generate-text {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}
.generate-btn--purple:hover {
  background: var(--purple-dark);
}
.generate-btn--purple:disabled:hover {
  background: var(--purple-ai-related);
}
.generate-btn--purple:active {
  background: var(--purple-darker);
}
.generate-btn--purple:focus {
  background: var(--purple-darker);
}
.generate-btn--white:hover {
  background: var(--hover-dropdown-white);
}
.generate-btn--white:disabled:hover {
  background: var(--bw-white);
}
.generate-btn--white:active {
  background: var(--base-light-frenchgrayI);
}
</style>

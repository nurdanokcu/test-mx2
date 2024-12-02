<script setup>
defineProps({
  checked: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  hasError: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  hasFocus: {
    type: Boolean,
    required: false,
    default: false,
  },
});

defineEmits(['update:checked']);
const input = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { focused } = useFocus(input, { initialValue: true });
</script>

<template>
  <label class="container--label" :for="id">
    <span :class="['container', { 'container-error': hasError }]">
      <input
        :id="id"
        :ref="hasFocus ? 'input' : ''"
        :class="['input', { error: hasError }, { checked: checked }]"
        type="checkbox"
        tabindex="0"
        :aria-label="`label-${id}`"
        :aria-checked="checked"
        :checked="checked"
        title="I agree"
        :disabled="disabled"
        @change="$emit('update:checked', $event.target.checked)"
      />
      <span class="checkmark"></span>
    </span>
    <slot />
  </label>
</template>

<style scoped>
.container {
  display: block;
  position: relative;
  padding-left: 24px;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: var(--bw-white);
  border: 1px solid var(--base-light-frenchgrayI);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.container:hover input ~ .checkmark {
  border: 1px solid var(--bw-lighter);
}
.container-error input ~ .checkmark {
  border: 1px solid var(--red-error);
}

.container input.checked ~ .checkmark {
  background-color: var(--blue-main);
  border: 1px solid var(--blue-main);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input.checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 4px;
  top: 1px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

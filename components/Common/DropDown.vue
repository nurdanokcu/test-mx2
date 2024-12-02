<script setup>
import { vOnClickOutside } from '@vueuse/components';

defineProps({
  title: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  errorMessage: {
    type: String,
    required: false,
    default: null,
  },
  hasFixedHeight: {
    type: Boolean,
    required: false,
    default: false,
  },
  hasOptionDots: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emits = defineEmits(['onSelect']);

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const handleSelect = (value) => {
  emits('onSelect', value);
  showDropdown.value = false;
};

const dropdownHandler = () => {
  showDropdown.value = false;
};
</script>

<template>
  <div class="dropdown">
    <button
      name="dropdown-toggle"
      type="button"
      aria-label="toggle dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      class="dropdown-toggle-button"
      @click.stop="toggleDropdown"
    >
      {{ title }}
      <span class="dropdown-toggle-arrow">
        <IconsGeneralExpand :is-rotated="showDropdown" />
      </span>
    </button>
    <CommonTransitionDropdown>
      <div
        v-if="showDropdown"
        v-on-click-outside.bubble="dropdownHandler"
        role="menu"
        class="dropdown-options"
        :class="{ 'dropdown-options-fixed-height': hasFixedHeight }"
      >
        <div v-if="errorMessage" class="error-message">
          <IconsGeneralError />
          {{ errorMessage }}
        </div>
        <button
          v-for="(option, index) in options"
          :key="`${option}-${index}`"
          type="button"
          name="dropdown-option"
          role="menuitem"
          aria-label="dropdown-option"
          class="dropdown-option"
          :class="{ 'dropdown-option-dots': hasOptionDots }"
          @click="handleSelect(option)"
        >
          {{ option }}
        </button>
      </div>
    </CommonTransitionDropdown>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  width: 100%;
  min-height: 48px;
}
.dropdown-toggle-button {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  gap: 16px;
  border: 2px solid var(--bw-lightest);
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: var(--bw-lighter);
  transition: border-color 0.3s ease;
}
.dropdown-toggle-button:hover {
  border-color: var(--blue-main);
}
.dropdown-toggle-arrow {
  display: inline-block;
}

.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 2px solid var(--base-light-frenchgrayI);
  border-radius: 12px;
  z-index: 5;
}
.dropdown-options-fixed-height {
  height: 172px;
  overflow-y: scroll;
}
.dropdown-option {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 24px;
  text-align: left;
  color: var(--bw-lighter);
  transition: background-color 0.3s ease;
}
.dropdown-option-dots::before {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--bw-lighter);
}
.error-message {
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  color: var(--bw-lighter);
  padding: 8px 24px;
}
.dropdown-option:first-child {
  padding: 12px 24px 8px 24px;
}
.dropdown-option:last-child {
  padding: 8px 24px 12px 24px;
}
.dropdown-option:hover {
  background-color: var(--hover-dropdown-white);
}
.dropdown-option:active {
  background-color: var(--active-dropdown-white);
}
</style>

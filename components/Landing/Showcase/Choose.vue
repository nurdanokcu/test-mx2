<script setup lang="ts">
const { selections } = useShowcase();

defineProps({
  isLoading: {
    type: Boolean,
    required: true,
  },
  errorMessage: {
    type: String,
    required: false,
    default: '',
  },
  limitError: {
    type: Boolean,
    required: false,
    default: false,
  },
  industryOptions: {
    type: Array as PropType<string[]>,
    required: true,
  },
  toneOfVoiceOptions: {
    type: Array as PropType<string[]>,
    required: true,
  },
  errorMessageIndustry: {
    type: String,
    required: false,
    default: '',
  },
  errorMessageToneOfVoice: {
    type: String,
    required: false,
    default: '',
  },
});

defineEmits(['onClick']);

const titleIndustry = computed(() => {
  return selections.value.industry ? selections.value.industry : 'Industry';
});
const titleToneOfVoice = computed(() => {
  return selections.value.tone_of_voice
    ? selections.value.tone_of_voice
    : 'Tone of voice';
});
const handleIndustrySelection = (option: string) => {
  selections.value.industry = option;
};

const handleToneOfVoiceSelection = (option: string) => {
  selections.value.tone_of_voice = option;
};
</script>

<template>
  <div class="first">
    <div class="select-wrapper">
      <p class="select-text">
        Choose to continue:
      </p>
      <LandingShowcaseTooltipTrigger class="tooltip-trigger" />
      <div class="tooltip-content-wrapper">
        <div class="tooltip-content">
          <p class="tooltip-content-text">
            AI leverages all available data to optimize content generation for
            marketing initiatives.
          </p>
          <div class="tooltip-arrow" />
        </div>
      </div>
      <div class="dropdown-wrapper">
        <CommonDropDown
          :title="titleIndustry"
          :options="industryOptions"
          :error-message="errorMessageIndustry"
          :has-fixed-height="true"
          :dropdown-options-ref="'industryOptions'"
          :has-option-dots="true"
          @on-select="handleIndustrySelection"
        />
        <CommonDropDown
          :title="titleToneOfVoice"
          :options="toneOfVoiceOptions"
          :error-message="errorMessageToneOfVoice"
          :dropdown-options-ref="'toneOfVoiceOptions'"
          :has-fixed-height="true"
          :has-option-dots="true"
          @on-select="handleToneOfVoiceSelection"
        />
        <CommonButtonGenerate
          :disabled="isLoading || limitError"
          :is-loading="isLoading"
          @on-generate="$emit('onClick')"
        />
      </div>
      <CommonTransitionError>
        <CommonErrorMessage
          v-if="errorMessage !== ''"
          class="error-message"
          :message="errorMessage"
        />
      </CommonTransitionError>
      <CommonTransitionError>
        <CommonErrorMessage
          v-if="limitError"
          class="error-message"
          :message="'Hello! We’re sorry but the number of requests is limited due to safety. Please wait for the server to respond. Thank you for your understanding.'"
        />
      </CommonTransitionError>
    </div>
  </div>
</template>

<style scoped>
.first {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 400px;
}

.select-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 16px;
  background: var(--bw-white);
  border-radius: 12px;
  box-shadow: 11px 0px 17px 0px rgba(0, 0, 0, 0.25);
}

.select-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--bw-black);
  margin-bottom: 16px;
}

.dropdown-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tooltip-trigger {
  position: absolute;
  top: 10px;
  right: 10px;
}
.tooltip-content-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  transform: translateY(-100%);
}

.tooltip-content {
  position: relative;
  padding: 10px 20px;
  color: var(--bw-white);
  background-color: var(--purple-darker);
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease;
  transition-delay: 0.3s;
}
.tooltip-trigger:hover + .tooltip-content-wrapper .tooltip-content {
  visibility: visible;
  opacity: 1;
}
.tooltip-arrow {
  position: absolute;
  right: 10px;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid var(--purple-darker);
}
.error-message {
  margin-top: 16px;
  justify-content: flex-start;
}
@media screen and (min-width: 1000px) {
  .first {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>

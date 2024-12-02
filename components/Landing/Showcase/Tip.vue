<script setup>
import Typewriter from 'typewriter-effect/dist/core';

const { postData } = useShowcase();
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  isContentVisible: {
    type: Boolean,
    required: true,
  },
  isResetDisabled: {
    type: Boolean,
    required: true,
  },
});
defineEmits(['onReset']);

watch(
  () => props.isContentVisible,
  () => {
    if (props.isContentVisible) {
      const tip = document.getElementById('tip');
      const typewriterTip = new Typewriter(tip, {
        delay: 20,
        cursor: '',
      });

      typewriterTip.typeString(postData.value.tip).start();
    }
  },
);
</script>

<template>
  <div class="fourth">
    <div class="tip-wrapper">
      <LandingShowcaseTooltipTrigger class="tooltip-trigger" />
      <div class="tooltip-content-wrapper tooltip-content-wrapper">
        <div class="tooltip-content tooltip-content--top">
          <p class="tooltip-content-text">
            By leveraging the power of AI, marketers can gain valuable insights
            that help them to make more informed decisions and achieve better
            marketing results.
          </p>
          <div class="tooltip-arrow" />
        </div>
      </div>
      <div class="tip">
        <p class="tip-title">
          Recommendation
        </p>
        <p
          v-show="isContentVisible"
          id="tip"
          class="tip-text"
        >
          {{ postData.tip }}
        </p>
        <div v-if="!isContentVisible" class="skeleton-text">
          <div
            v-for="i in 5"
            :key="i"
            :class="['skeleton-text-line', { 'skeleton-loading': loading }]"
          ></div>
        </div>
      </div>
      <button
        type="button"
        class="tip-reset"
        name="reset"
        aria-label="reset showcase"
        :disabled="isResetDisabled"
        @click="$emit('onReset')"
      >
        <IconsShowcaseReset class="tip-reset-icon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.fourth {
  width: 100%;
  max-width: 410px;
}

.tip-wrapper {
  position: relative;
}

.tip {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: fit-content;
  min-height: 198px;
  gap: 12px;
  padding: 16px 16px 48px 16px;
  overflow: hidden;
  background: var(--bw-white);
  border-radius: 12px;
  color: var(--bw-black);
  box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.25);
}

.tip-title {
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
}

.tip-text {
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
}

.tip-reset {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 82px;
  height: 82px;
  background: #faf9f9;
  border-radius: 50%;
  transition: box-shadow 0.3s ease-in-out;
  transform: translateY(50%);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
}
.tip-reset:disabled {
  cursor: default;
}
.tip-reset:disabled .tip-reset-icon {
  opacity: 0.5;
}
.tip-reset:disabled:hover {
  box-shadow: none;
}

.tip-reset:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.tip-reset:active {
  transform: scale(1.01) translateY(50%);
}

.skeleton-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.skeleton-loading {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    background-color: var(--skeleton-background);
  }
  50% {
    background-color: var(--skeleton-highlight);
  }
  100% {
    background-color: var(--skeleton-background);
  }
}

.skeleton-text-line {
  width: 100%;
  height: 14px;
  background: var(--skeleton-background);
  border-radius: 2px;
}

.skeleton-text-line:nth-child(2) {
  width: 90%;
  animation-delay: 0.1s;
}

.skeleton-text-line:nth-child(4) {
  width: 80%;
  animation-delay: 0.2s;
}

.skeleton-text-line:nth-child(5) {
  width: 92%;
  animation-delay: 0.3s;
}
.tooltip-trigger {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
}
.tooltip-content-wrapper {
  position: absolute;
  top: -24px;
  right: 46px;
  left: -30px;
  z-index: 6;
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
  right: -8px;
  top: 36px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid var(--purple-darker);
}
@media screen and (min-width: 1400px) {
  .tooltip-content-wrapper {
    position: absolute;
    top: -4px;
    right: 0;
    left: 0;
    transform: translateY(-100%);
  }
  .tooltip-arrow {
    position: absolute;
    right: 12px;
    top: 100%;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid var(--purple-darker);
  }
}
</style>

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
});

const startTypeWriter = () => {
  const totalText = document.getElementById('total-text');
  const typewriterTotal = new Typewriter(totalText, {
    delay: 75,
    cursor: '',
  });

  const impressionsText = document.getElementById('impressions-text');
  const typewriterImpressions = new Typewriter(impressionsText, {
    delay: 75,
    cursor: '',
  });

  if (postData.value.total) {
    typewriterTotal.typeString(postData.value.total.toString()).start();
    setTimeout(() => {
      typewriterImpressions.typeString(postData.value.percentage).start();
    }, 500);
  }
};
watch(
  () => props.isContentVisible,
  () => {
    if (props.isContentVisible) {
      startTypeWriter();
    }
  },
);

const getChartStyles = (n) => {
  const height = postData.value.chartData[n - 1];
  const color = n === postData.value.chartData.length ? '#3A9F44' : '#CDD0DD';
  return {
    height: height + 'px',
    backgroundColor: color,
  };
};
</script>

<template>
  <div class="impressions">
    <div class="impressions-header">
      <IconsFormEye />
      <p class="impressions-title">
        Impressions
      </p>
      <LandingShowcaseTooltipTrigger class="tooltip-trigger" />
      <div class="tooltip-content-wrapper">
        <div class="tooltip-content">
          <p class="tooltip-content-text">
            AI analyses data in marketing by collecting and cleansing data,
            segmenting it, analyzing it, personalizing marketing efforts, and
            predicting future trends.
          </p>
          <div class="tooltip-arrow" />
        </div>
      </div>
    </div>
    <div class="impressions-body">
      <div class="impressions-data">
        <p class="impressions-data-title">
          Data for last 7 days
        </p>
        <div class="impressions-data-number">
          <p
            v-show="isContentVisible"
            id="total-text"
            class="impressions-data-number-total"
          >
            {{ postData.total }}
          </p>
          <div
            v-if="!isContentVisible"
            :class="['skeleton-big-number', { 'skeleton-loading': loading }]"
          />
          <span
            v-show="isContentVisible"
            id="impressions-text"
            class="impressions-data-number-new"
          >
            {{ postData.percentage }}
            <IconsGeneralArrowUp class="arrow-up" />
          </span>
          <div
            v-if="!isContentVisible"
            :class="['skeleton-small-number', { 'skeleton-loading': loading }]"
          />
        </div>
      </div>
      <div class="impressions-chart">
        <div v-if="!isContentVisible" class="skeleton-statistics">
          <div
            v-for="n in 7"
            :key="n"
            :class="[
              'skeleton-statistics-line',
              { 'skeleton-loading': loading },
            ]"
          />
        </div>
        <Transition name="rise">
          <div v-if="isContentVisible" class="impressions-statistics">
            <div
              v-for="n in 7"
              :key="n"
              :style="getChartStyles(n)"
              class="impressions-statistics-line"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.impressions {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8px;
  height: 172px;
  max-width: 400px;
  background: var(--bw-white);
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  color: var(--bw-black);
}
.impressions-header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}
.impressions-title {
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
}
.impressions-body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.impressions-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.impressions-data-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  color: var(--base-light-frenchgrayI);
}
.impressions-data-number {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}
.impressions-data-number-total {
  font-weight: 800;
  font-size: 48px;
  line-height: 52px;
  color: var(--bw-black);
}
.impressions-data-number-new {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--green-approval);
}
.arrow-up {
  width: 14px;
  height: 14px;
}
.impressions-chart {
  display: none;
}
.tooltip-trigger {
  position: absolute;
  top: 0;
  right: 0;
}
.tooltip-content-wrapper {
  position: absolute;
  top: -32px;
  right: 36px;
  left: 0;
  z-index: 2;
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
.skeleton-big-number {
  width: 90px;
  height: 52px;
  border-radius: 8px;
  background-color: var(--skeleton-background);
}
.skeleton-small-number {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: var(--skeleton-background);
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
.impressions-statistics,
.skeleton-statistics {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}
.skeleton-statistics-line,
.impressions-statistics-line {
  width: 16px;
  border-radius: 2px;
  background-color: var(--skeleton-background);
}
.skeleton-statistics-line:nth-child(1) {
  animation-delay: 0.2s;
  height: 33px;
}
.skeleton-statistics-line:nth-child(2) {
  height: 70px;
  animation-delay: 0.3s;
}
.skeleton-statistics-line:nth-child(3) {
  animation-delay: 0.4s;
  height: 48px;
}
.skeleton-statistics-line:nth-child(4) {
  animation-delay: 0.5s;
  height: 33px;
}
.skeleton-statistics-line:nth-child(5) {
  animation-delay: 0.6s;
  height: 70px;
}
.skeleton-statistics-line:nth-child(6) {
  animation-delay: 0.7s;
  height: 60px;
}

.skeleton-statistics-line:nth-child(7) {
  animation-delay: 0.7s;
  height: 80px;
}
@media (min-width: 700px) {
  .impressions-chart {
    display: flex;
    justify-content: center;
    width: 50%;
  }
  .impressions-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 4px;
  }
}
@media screen and (min-width: 1000px) {
  .impressions {
    margin: 0 auto;
  }
}
@media screen and (min-width: 1400px) {
  .tooltip-content-wrapper {
    position: absolute;
    top: -12px;
    right: 0;
    left: 0;
    transform: translate(40%, -100%);
  }
  .tooltip-arrow {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid var(--purple-darker);
    position: absolute;
    bottom: 0;
    top: 100%;
    right: calc(50% - 32px);
  }
}
</style>

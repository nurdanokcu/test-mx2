<script setup>
import { guides } from '~/data/Guide.js';

const activeGuideId = ref(2);
const activeGuide = computed(() => {
  return guides.find(guide => guide.id === activeGuideId.value);
});
</script>

<template>
  <div class="guide">
    <div class="guide-head">
      <h4 class="guide-head-title">
        Complete mx&#178; Format Guide
      </h4>
      <p class="guide-head-text">
        Which ad formats can your marketing service flawlessly manage?
      </p>
    </div>
    <div class="guide-body">
      <div class="guide-header">
        <button
          v-for="guide in guides"
          :key="guide.id"
          type="button"
          :aria-label="guide.name"
          :title="`Click to see ${guide.name} ads guide`"
          class="guide-header-social"
          :class="{ active: activeGuideId === guide.id }"
          @click="activeGuideId = guide.id"
        >
          {{ guide.name }}
        </button>
      </div>
      <div class="guide-content">
        <div class="guide-content-logo">
          <img
            width="40"
            height="40"
            :src="activeGuide.logo"
            :alt="`${activeGuide.name} Logo`"
          />
        </div>
        <LandingGuideContent :active-guide="activeGuide" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.guide {
  padding: 0 16px;
  margin-bottom: 140px;
}
.guide-head {
  margin-bottom: 32px;
  color: var(--bw-black);
}
.guide-head-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  margin-bottom: 16px;
}
.guide-head-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}
.guide-header {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.guide-header-social {
  padding: 8px 16px;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #000;
  border-radius: 12px 12px 0px 0px;
  transition: all 0.3s linear;
}
.guide-header-social.active {
  background-color: var(--bw-white);
  color: var(--blue-main);
}
.guide-content {
  padding: 24px;
  background: var(--bw-white);
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
}
.guide-content-logo {
  display: flex;
  justify-content: flex-end;
}
@media (min-width: 700px) {
  .guide {
    padding: 0 24px;
  }
  .guide-header {
    justify-content: flex-end;
    padding: 0 24px;
  }
}
@media (min-width: 1000px) {
  .guide {
    padding: 0 80px;
    max-width: 1440px;
    margin: 0 auto 160px;
  }
}
</style>

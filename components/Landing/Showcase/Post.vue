<script setup>
import Typewriter from 'typewriter-effect/dist/core';

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

const { postData } = useShowcase();

const delayTimeForTypewriter = computed(() => {
  const textLength = postData.value.post_text.length;
  return 2000 / textLength;
});

watch(
  () => props.isContentVisible,
  () => {
    if (props.isContentVisible) {
      const postText = document.getElementById('post-text');
      const typewriter = new Typewriter(postText, {
        delay: delayTimeForTypewriter.value,
        cursor: '',
      });

      typewriter.typeString(postData.value.post_text).start();
    }
  },
);
</script>

<template>
  <div class="post">
    <div class="showcase-arrow-desktop-1" />
    <div class="post-body">
      <div class="post-header">
        <IconsGeneralExpand color="white" class="post-header-icon" />
        <div class="post-header-title-wrapper">
          <div class="post-header-title" />
        </div>
      </div>
      <div class="post-content">
        <div class="post-profile">
          <div class="post-profile-left">
            <div class="post-profile-image" />
            <div class="post-profile-name">
              <div class="post-profile-name-line" />
              <div class="post-profile-name-line" />
            </div>
          </div>
          <div class="post-profile-right">
            <div
              v-for="i in 3"
              :key="i"
              class="post-profile-dot"
            />
          </div>
        </div>
        <div class="post-body-image">
          <div v-if="isContentVisible" class="tooltip-container-1">
            <LandingShowcaseTooltipTrigger class="tooltip-trigger--top" />
            <div class="tooltip-content-wrapper tooltip-content-wrapper--top">
              <div class="tooltip-content tooltip-content--top">
                <p class="tooltip-content-text">
                  AI can be used to pick the best images for marketing based on
                  what has been successful in the past. Computer vision
                  algorithms look at the images and decide which ones have the
                  right features, and machine learning algorithms learn which
                  images have worked best in the past.
                </p>
                <div class="tooltip-arrow--top" />
              </div>
            </div>
          </div>
          <div class="post-image-container">
            <img
              v-if="isContentVisible"
              class="post-image"
              :src="postData.post_image"
              alt="picture"
            />
            <div
              v-else
              :class="['skeleton-image', { 'skeleton-loading': loading }]"
            />
          </div>
          <div class="post-image-info">
            <div class="post-image-info-text" />
            <IconsGeneralExpand color="white" class="post-image-info-icon" />
          </div>
        </div>
        <div class="post-body-text">
          <div v-if="isContentVisible" class="tooltip-container-2">
            <LandingShowcaseTooltipTrigger class="tooltip-trigger--bottom" />
            <div
              class="tooltip-content-wrapper tooltip-content-wrapper--bottom"
            >
              <div class="tooltip-content tooltip-content--bottom">
                <p class="tooltip-content-text">
                  AI-powered natural language generation tools is used to create
                  personalized and targeted messages for each customer segment
                  and demographic, helping to maximize conversions and
                  campaigns.
                </p>
                <div class="tooltip-arrow--bottom" />
              </div>
            </div>
          </div>
          <p
            v-show="isContentVisible"
            id="post-text"
            class="post-text"
          >
            {{ postData.post_text }}
          </p>
          <div v-if="!isContentVisible">
            <div
              v-for="i in 4"
              :key="i"
              :class="['skeleton-text-line', { 'skeleton-loading': loading }]"
            />
          </div>
        </div>
      </div>
      <div class="post-footer">
        <div
          v-for="i in 5"
          :key="i"
          class="post-footer-dot"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  width: 100%;
  min-width: 200px;
  max-width: 250px;
  position: relative;
}
.post-body {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
}
.post-header {
  display: flex;
  align-items: center;
  padding: 10px;
  height: 40px;
  background: var(--skeleton-background);
  border-radius: 10px 10px 0px 0px;
}
.post-header-icon {
  transform: rotate(90deg);
}
.post-header-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.post-header-title {
  width: 100px;
  height: 6px;
  background: var(--bw-white);
}
.post-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-profile-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.post-profile-image {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--blue-main);
}
.post-profile-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.post-profile-name-line {
  width: 80px;
  height: 6px;
  background: var(--blue-main);
}
.post-profile-name-line:nth-child(2) {
  height: 5px;
}
.post-profile-right {
  display: flex;
  align-items: center;
  gap: 2px;
}
.post-profile-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--blue-main);
}
.post-content {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  gap: 12px;
  padding: 8px;
  border-radius: 12px;
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
.post-body-image {
  position: relative;
}
.post-image-container {
  border-radius: 2px;
  height: 260px;
  overflow: hidden;
}

.post-image {
  width: 100%;
  height: 100%;
  overflow: visible;
  object-fit: cover;
  object-position: center;
}

.post-text {
  width: 82%;
  min-height: 72px;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: var(--bw-black);
}

.skeleton-image {
  width: 100%;
  height: 260px;
  background: var(--skeleton-background);
}
.post-image-info {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 30px;
  width: 100%;
  background-color: var(--blue-main);
}
.post-image-info-text {
  width: 60px;
  height: 8px;
  background: var(--blue-lightest);
}
.post-image-info-icon {
  transform: rotate(-90deg);
}

.post-body-text {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-text-line {
  width: 100%;
  height: 14px;
  background: var(--skeleton-background);
  border-radius: 2px;
  margin-bottom: 4px;
}

.skeleton-text-line:nth-child(2) {
  width: 90%;
}

.skeleton-text-line:nth-child(3) {
  width: 80%;
}

.tooltip-trigger--top,
.tooltip-trigger--bottom {
  position: absolute;
  top: 4px;
  right: 4px;
}
.tooltip-content-wrapper--top {
  position: absolute;
  top: -24px;
  right: 40px;
  left: -60px;
  z-index: 6;
}
.tooltip-content-wrapper--bottom {
  position: absolute;
  top: -100px;
  right: 40px;
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
.tooltip-trigger--top:hover
  + .tooltip-content-wrapper--top
  .tooltip-content--top {
  visibility: visible;
  opacity: 1;
}
.tooltip-trigger--bottom:hover
  + .tooltip-content-wrapper--bottom
  .tooltip-content--bottom {
  visibility: visible;
  opacity: 1;
}
.tooltip-arrow--top {
  position: absolute;
  right: -8px;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid var(--purple-darker);
}
.tooltip-arrow--bottom {
  position: absolute;
  right: -8px;
  top: 104px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid var(--purple-darker);
}
.post-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: var(--skeleton-background);
  border-radius: 0px 0px 10px 10px;
}
.post-footer-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--bw-white);
}
@media screen and (min-width: 1400px) {
  .post {
    margin: 0 auto;
    max-width: unset;
  }
  .tooltip-content-wrapper--top {
    position: absolute;
    top: -12px;
    transform: translateY(-100%);
    right: -80px;
    left: -80px;
    z-index: 6;
  }
  .tooltip-arrow--top,
  .tooltip-arrow--bottom {
    position: absolute;
    top: 100%;
    right: 80px;
    bottom: -12px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid var(--purple-darker);
  }
  .tooltip-content-wrapper--bottom {
    position: absolute;
    top: -12px;
    transform: translateX(70%);
    right: -110px;
    left: 0;
    z-index: 6;
  }
  .tooltip-arrow--bottom {
    position: absolute;
    top: 12px;
    right: 0;
    left: -16px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid var(--purple-darker);
  }
}
</style>

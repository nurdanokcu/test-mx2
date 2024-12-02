<script setup>
defineProps({
  activeGuide: {
    type: Object,
    required: true,
  },
  activeGuideContent: {
    type: Object,
    required: true,
  },
});
defineEmits(['handleClick']);
</script>

<template>
  <div class="guide-content-desktop">
    <div class="guide-titles">
      <button
        v-for="guide in activeGuide.content"
        :key="guide.id"
        type="button"
        :title="`Click to see ${guide.title}`"
        class="guide-title"
        :class="{
          'guide-title-active': guide.id === activeGuideContent.id,
        }"
        @click="$emit('handleClick', guide.id)"
      >
        {{ guide.title }}
      </button>
    </div>
    <div class="desktop-line" />

    <div class="guide-desktop-description">
      <p class="guide-desktop-text">
        {{ activeGuideContent.text }}
      </p>
      <div class="guide-desktop-image-wrapper">
        <img
          class="guide-desktop-image"
          :src="activeGuideContent.image"
          :alt="`${activeGuideContent.title}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.guide-content-desktop {
  display: none;
}

.guide-titles {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 27%;
  gap: 8px;
}

.guide-title {
  text-align: left;
  font-weight: 200;
  font-size: 20px;
  line-height: 22px;
  padding: 8px;
  width: 100%;
  transition: all 0.3s linear;
}

.guide-title-active {
  font-weight: 700;
  font-size: 24px;
}
.desktop-line {
  width: 1px;
  background-color: var(--blue-main);
}
.guide-desktop-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  padding: 0 16px;
}
.guide-desktop-text {
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  max-width: 400px;
}

.guide-desktop-image-wrapper {
  min-width: 350px;
  height: 50vw;
  max-height: 500px;
}
.guide-desktop-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (min-width: 700px) {
  .guide-content-desktop {
    display: flex;
    justify-content: space-between;
  }
}
@media (min-width: 1000px) {
  .guide-content-desktop {
    gap: 24px;
  }
  .guide-desktop-description {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
@media (min-width: 1400px) {
  .guide-content-desktop {
    gap: 80px;
  }
  .guide-desktop-description {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
</style>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = [Pagination];
defineProps({
  slides: {
    type: Array,
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
  <div class="guide-content-mobile">
    <Swiper
      ref="swiper"
      class="guide-carousel"
      :slides-per-view="1"
      :free-mode="true"
      :keyboard="{
        enabled: true,
      }"
      :pagination="{
        type: 'bullets',
        clickable: true,
      }"
      :modules="modules"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="guide-slide"
      >
        <button
          v-for="ad in slide"
          :key="ad.id"
          type="button"
          :title="`Click to see ${slide[0].title}`"
          class="guide-content-button"
          :class="{
            'guide-content-button-active': ad.id === activeGuideContent.id,
          }"
          @click="$emit('handleClick', ad.id)"
        >
          {{ ad.title }}
        </button>
      </swiper-slide>
    </Swiper>
    <div class="mobile-line" />
    <div class="guide-content-description">
      <p class="guide-content-text">
        {{ activeGuideContent.text }}
      </p>
      <div class="guide-content-image-wrapper">
        <img
          class="guide-content-image"
          :src="activeGuideContent.image"
          :alt="`${activeGuideContent.title}`"
        />
      </div>
    </div>
  </div>
</template>

<style>
.guide-slide {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.guide-content-button {
  font-weight: 200;
  font-size: 20px;
  line-height: 22px;
  color: #000;
  transition: all 0.2s linear;
}

.guide-content-button-active {
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
}

.guide-carousel {
  margin-bottom: 16px;
}
.mobile-line {
  width: 80%;
  height: 1px;
  margin: 0 auto;
  background-color: var(--blue-main);
}
.guide-carousel .swiper-pagination {
  margin-top: 16px;
  position: static;
}

.guide-carousel .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border: 1px solid var(--blue-main);
  background-color: var(--bw-white);
  opacity: 1;
}

.guide-carousel .swiper-pagination-bullet-active {
  background-color: var(--blue-main);
}
.guide-content-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.guide-content-text {
  padding-top: 24px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  min-height: 160px;
}
.guide-content-image-wrapper {
  max-width: 250px;
  max-height: 400px;
  width: 100%;
}
.guide-content-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media (min-width: 700px) {
  .guide-content-mobile {
    display: none;
  }
}
</style>

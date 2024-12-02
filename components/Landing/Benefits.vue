<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import benefits from '~/data/benefits';

const modules = [Pagination];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customPagination = (swiper, current, total) => {
  const slidesPerView = swiper.params.slidesPerView;
  const totalSlides = swiper.slides.length;

  const whiteBullets = Array.from(
    { length: slidesPerView },
    (_, i) => current + i,
  );

  let paginationHtml = '';
  for (let i = 1; i <= totalSlides; i++) {
    const bulletClass = whiteBullets.includes(i)
      ? 'swiper-pagination-bullet swiper-pagination-bullet-white'
      : 'swiper-pagination-bullet swiper-pagination-bullet-blue';
    paginationHtml += `<span class="${bulletClass}"></span>`;
  }

  return paginationHtml;
};
</script>

<template>
  <div class="benefits">
    <h3 class="benefits-title">
      Benefits
    </h3>
    <div class="benefits-swiper">
      <Swiper
        ref="swiper"
        :slides-per-view="1"
        :free-mode="true"
        :space-between="10"
        :grab-cursor="true"
        :keyboard="{
          enabled: true,
        }"
        :pagination="{
          type: 'custom',
          clickable: true,
          renderCustom: customPagination,
        }"
        :breakpoints="{
          700: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }"
        :modules="modules"
        class="benefits-swiper"
      >
        <swiper-slide v-for="(benefit, index) in benefits" :key="benefit.id">
          <LandingBenefitsSingle
            :image="benefit.image"
            :title="benefit.title"
            :subtitle="benefit.subtitle"
            :description="benefit.description"
            :image-alt="benefit.imageAlt"
            :class="`benefits-single-${index + 1}`"
          />
        </swiper-slide>
      </Swiper>
      <div class="swiper-pagination" />
    </div>
  </div>
</template>

<style>
.benefits {
  color: var(--bw-black);
  max-width: 420px;
  margin: 0 auto 120px;
}

.benefits-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  text-align: center;
}

.benefits-title::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--blue-main);
  margin: 24px auto 0;
}

.benefits-swiper .swiper-pagination-progressbar-fill {
  background-color: var(--blue-main);
}

.benefits-swiper .swiper-wrapper {
  margin-bottom: 52px;
  height: 372px;
  box-sizing: border-box;
}

.benefits-swiper .swiper-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.benefits-swiper .swiper-pagination-bullet {
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  background: var(--blue-main);
  border: 2px solid var(--blue-main);
  opacity: 1;
}

.benefits-swiper .swiper-pagination-bullet-blue {
  background: var(--blue-main);
  border: 2px solid var(--blue-main);
}

.benefits-swiper .swiper-pagination-bullet-white {
  background: var(--bw-white);
  border: 2px solid var(--blue-main);
}

.benefits-swiper .swiper-pagination-bullet-active {
  background: var(--bw-white);
}

@media screen and (min-width: 700px) {
  .benefits {
    max-width: var(--max-width-dashboard);
    margin: 0 auto 160px;
  }

  .benefits-title::after {
    content: "";
    display: block;
    width: 80%;
    height: 1px;
    background-color: var(--blue-main);
    margin: 40px auto 0;
  }

  .benefits-swiper .swiper-slide:not(:last-child) {
    border-right: 1px solid var(--blue-main);
  }
}

@media screen and (min-width: 1400px) {
  .benefits {
    max-width: var(--max-width-dashboard);
  }
}
</style>

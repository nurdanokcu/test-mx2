<script setup>
const props = defineProps({
  activeGuide: {
    type: Object,
    required: true,
  },
});
const slides = computed(() => {
  const itemsPerSlide = 3;
  const activeGuide = props.activeGuide.content;

  const dividedSlides = [];
  for (let i = 0; i < activeGuide.length; i += itemsPerSlide) {
    const slide = activeGuide.slice(i, i + itemsPerSlide);
    dividedSlides.push(slide);
  }

  return dividedSlides;
});
const activeGuideContent = ref(props.activeGuide.content[0]);

const handleClick = (id) => {
  const foundData = props.activeGuide.content.find(item => item.id === id);
  activeGuideContent.value = foundData;
};

watch(
  () => props.activeGuide,
  () => {
    activeGuideContent.value = props.activeGuide.content[0];
  },
);
</script>

<template>
  <div class="guide-content-inner">
    <LandingGuideContentMobile
      :slides="slides"
      :active-guide-content="activeGuideContent"
      @handle-click="handleClick"
    />
    <LandingGuideContentDesktop
      :active-guide="activeGuide"
      :active-guide-content="activeGuideContent"
      @handle-click="handleClick"
    />
  </div>
</template>

<style>
.guide-content-inner {
  padding: 0 24px 24px 24px;
}
</style>

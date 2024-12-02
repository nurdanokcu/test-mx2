<script setup>
defineProps(['title', 'subtitle', 'description', 'image', 'imageAlt']);
</script>

<template>
  <div class="benefit">
    <div class="benefit-title-container">
      <h4 class="benefit-title">
        {{ title }}
      </h4>
      <img
        width="150"
        height="150"
        class="benefit-image"
        :src="image"
        :alt="imageAlt"
      />
    </div>
    <p class="benefit-subtitle">
      {{ subtitle }}
    </p>
    <p class="benefit-description">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.benefit {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  max-width: 420px;
  margin: 0 auto;
}
.benefit-title-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.benefit-title {
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
}
.benefit-subtitle {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000;
}
.benefit-description {
  font-weight: 300;
  font-size: 14px;
  line-height: 15px;
}
</style>

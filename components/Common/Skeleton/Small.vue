<template>
  <div class="skeleton">
    <div class="skeleton-titles">
      <div class="skeleton-title" />
      <div class="skeleton-title" />
    </div>
    <div class="skeleton-content">
      <div class="skeleton-text" />
      <div class="skeleton-number" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.skeleton {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 200px;
  padding: 8px;
  background: var(--bw-white);
  border-top: 2px solid #171fd6;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.skeleton-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.skeleton-titles {
  display: flex;
  justify-content: space-between;
}

.skeleton-title {
  width: 30%;
  height: 14px;
  background: var(--skeleton-background);
  border-radius: 2px;
}

.skeleton-text {
  width: 100%;
  height: 14px;
  background: var(--skeleton-background);
  border-radius: 2px;
}

.skeleton-number {
  width: 100%;
  height: 60px;
  background: var(--skeleton-background);
  border-radius: 2px;
}
</style>

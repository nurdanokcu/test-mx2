<template>
  <div class="skeleton">
    <div class="skeleton-body">
      <div class="skeleton-titles">
        <div class="skeleton-title" />
        <div class="skeleton-title" />
      </div>
      <div class="skeleton-middle">
        <div class="skeleton-content">
          <div class="skeleton-text" />
          <div class="skeleton-number" />
        </div>
        <div class="skeleton-middle-column">
          <div class="skeleton-middle-column-item" />
          <div class="skeleton-middle-column-item" />
          <div class="skeleton-middle-column-item" />
        </div>
      </div>
      <div class="skeleton-bottom" />
    </div>
    <div class="skeleton-footer">
      <div class="skeleton-progress" />
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 410px;
  background: var(--bw-white);
  border-top: 2px solid #171fd6;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  overflow: hidden;
}

.skeleton-body {
  padding: 8px;
}

.skeleton-middle {
  display: flex;
}

.skeleton-middle-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 50%;
  align-items: center;
  justify-content: center;
}

.skeleton-middle-column-item {
  width: 100%;
  height: 26px;
  background: var(--skeleton-background);
  border-radius: 2px;
}

.skeleton-middle-column-item:nth-child(2) {
  height: 34px;
}

.skeleton-middle-column-item:nth-child(3) {
  height: 38px;
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
  width: 38px;
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

.skeleton-bottom {
  width: 120px;
  height: 14px;
  margin: 0 auto;
  background: var(--skeleton-background);
  border-radius: 2px;
}

.skeleton-footer {
  height: 8px;
  background: #d2d2d5;
}

.skeleton-progress {
  height: 100%;
  width: 30%;
  opacity: 1;
  background: #343847;
}
</style>

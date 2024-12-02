<template>
  <div class="skeleton">
    <div class="skeleton-body">
      <div class="skeleton-titles">
        <div class="skeleton-title" />
        <div class="skeleton-title" />
      </div>
      <div class="skeleton-middle">
        <div class="skeleton-graph">
          <IconsGeneralSkeletonArrow class="skeleton-arrow" />
          <div class="skeleton-line-1" />
          <div class="skeleton-line-2" />
          <div class="skeleton-line-3" />
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
  height: 100%;
  width: 100%;
  max-width: 410px;
  background: var(--bw-white);
  border-top: 2px solid var(--blue-main);
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  overflow: hidden;
}

.skeleton-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
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

.skeleton-middle {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skeleton-middle-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 50%;
  margin: 0 auto;
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

.skeleton-bottom {
  max-width: 120px;
  width: 100%;
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
  background: var(--bw-lighter);
}
.skeleton-graph {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border-left: 1px solid var(--base-light-frenchgrayII);
  border-bottom: 1px solid var(--base-light-frenchgrayII);
  max-width: 320px;
  margin: 0 auto;
}

.skeleton-line-1,
.skeleton-line-2,
.skeleton-line-3 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    var(--base-light-frenchgrayII) 0px,
    var(--base-light-frenchgrayII) 10px,
    transparent 10px,
    transparent 20px
  );
}

.skeleton-line-1 {
  top: 25%;
}

.skeleton-line-2 {
  top: 50%;
}

.skeleton-line-3 {
  top: 75%;
}
</style>

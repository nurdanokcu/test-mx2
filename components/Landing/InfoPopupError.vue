<script setup>
defineEmits(['onClick']);
</script>

<template>
  <div class="error-container">
    <div class="error-head">
      <button
        type="button"
        class="close-image"
        @click="$emit('onClick')"
      >
        <IconsGeneralClose />
      </button>
    </div>
    <p class="text">
      <IconsGeneralError />
      "Oops! We were unable to sign you up this time.
      <br />
      Please try again later or contact our support team at
      <a href="mailto:info@propaganda-solutions.com">
        info@propaganda-solutions.com
      </a>
    </p>
    <div class="sign">
      <p>Your MX&#178; Team</p>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  background-color: white;
  display: inline-block;
  color: black;
  padding: 30px 30px;
  max-width: 786px;
  margin: 0px 30px;
}
.error-head {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.text {
  margin: 20px 0px;
  font-size: 14px;
  line-height: 18px;
}
.sign {
  text-align: end;
  margin: 20px 0px;
}
.sign p {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--blue-main);
}

.close-image {
  padding: 16px;
}
@media (min-width: 768px) {
  .text {
    font-size: 16px;
    line-height: 20px;
  }
}
@media (min-width: 1024px) {
  .error-container {
    padding: 56px 48px;
    margin: 0px;
  }
}
</style>

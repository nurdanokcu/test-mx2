<script setup>
defineEmits(['onClick']);
</script>

<template>
  <div class="thanks-container">
    <div class="thanks-head">
      <p class="thank-heading">
        We will notify you!
      </p>
      <button
        type="button"
        class="close-image"
        @click="$emit('onClick')"
      >
        <IconsGeneralClose />
      </button>
    </div>
    <p class="text">
      Thank you for signing up to receive a notification when our project
      launches! We are excited to have you as part of our community and we can't
      wait to share our platform with you.
    </p>
    <p class="text">
      Our team is working hard to create a product that meets your needs and
      exceeds your expectations. We are confident that you will love our
      platform as much as we do, and we can't wait for you to explore all of its
      features.
    </p>
    <div class="sign">
      <p>Your MX&#178; Team</p>
    </div>
  </div>
</template>

<style scoped>
.thanks-container {
  background-color: white;
  display: inline-block;
  color: black;
  padding: 30px 30px;
  max-width: 786px;
  margin: 0px 30px;
}

.thanks-head {
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;
}

.thank-heading {
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 36px;
  color: var(--bw-black);
}

.blue {
  color: var(--blue-main);
}

.bold {
  font-weight: bold;
}

.close-image {
  align-self: flex-start;
  padding: 16px;
}

.text {
  text-align: start;
  margin: 20px 0px;
  font-size: 14px;
  font-weight: 300;
}

.sign {
  text-align: end;
  margin: 20px 0px;
}

.sign p {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--blue-main);
}

@media (min-width: 768px) {
  .thank-heading {
    font-size: 48px;
    line-height: 52px;
  }

  .text {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .thanks-container {
    padding: 56px 48px;
    margin: 0px;
  }
}
</style>

<script setup>
defineEmits(['onClick']);
</script>

<template>
  <div class="seen-container">
    <div class="seen-head">
      <p class="seen-heading">
        We've seen you before!
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
      Thank you for your interest in our program. We're excited to inform you
      that you are already a part of our waitlist!
    </p>
    <p class="text">
      To get started, please check your email for important information about
      accessing our beta platform. If you have any questions or concerns, don't
      hesitate to reach out to our support team.
    </p>
    <div class="sign">
      <p>Your MX&#178; Team</p>
    </div>
  </div>
</template>

<style scoped>
.seen-container {
  background-color: white;
  display: inline-block;
  color: black;
  padding: 30px 30px;
  max-width: 786px;
  margin: 0px 30px;
}

.seen-head {
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.seen-heading {
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 36px;
  color: var(--bw-black);
}

.close-image {
  align-self: flex-start;
  padding: 16px;
}

.text {
  text-align: start;
  font-size: 14px;
  margin: 20px 0px;
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
@media (min-width: 768px) {
  .seen-heading {
    font-size: 48px;
    line-height: 52px;
  }

  .text {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .seen-container {
    padding: 56px 48px;
    margin: 0px;
  }
}
</style>

<script setup>
defineEmits(['onClick']);
</script>

<template>
  <div class="thanks-container">
    <div class="thanks-head">
      <p class="thank-heading">
        Thank you for joining our<br />
        <span class="blue"> waitlist!</span>
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
      Thank you for expressing your interest in joining the waitlist for our
      AI-powered marketing service! By signing up, you're taking a significant
      step towards accessing revolutionary technology designed to transform your
      marketing efforts.
    </p>
    <p class="text">
      <span class="bold">Please keep an eye on your email.</span> We will send
      you detailed instructions on how to prepare for access and how to share
      your valuable feedback with us. Additionally, you'll receive a
      notification as soon as access is granted to you.
    </p>
    <p class="text">
      We are excited to show you whats coming!
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

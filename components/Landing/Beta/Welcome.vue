<template>
  <div class="welcometobeta">
    <div class="welcometobeta-text">
      <h1 class="welcometobeta-h1">
        <span>You're All Set!</span> Welcome to the Waitlist.
      </h1>
      <p class="welcometobeta-p">
        Fantastic! Your email is confirmed, and you're officially on the
        waitlist for our AI-powered marketing service. Your early interest is
        greatly appreciated, and we're thrilled to have you with us as we
        prepare to launch this innovative tool. Stay tuned for updates and
        further instructions as we move closer to granting you access.
      </p>
      <br />
      <p class="welcometobeta-p">
        We're committed to keeping you in the loop with all the latest
        developments. Thank you for embarking on this journey with us.
      </p>
    </div>
    <div class="welcometobeta-img-wrapper">
      <img
        class="welcometobeta-img"
        src="~/assets/images/beta/marketing-image.webp"
        alt="marketing-image"
      />
    </div>
  </div>
</template>

<style scoped>
.welcometobeta {
  padding: 100px 24px 0;
  margin-bottom: 88px;
}
.welcometobeta-text {
  color: var(--bw-black);
  margin-bottom: 50px;
}
.welcometobeta-h1 {
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  margin-bottom: 80px;
}
.welcometobeta-h1 span {
  color: var(--blue-main);
}
.welcometobeta-p {
  font-weight: 300;
  font-size: 14px;
  line-height: 15px;
  max-width: 500px;
}
.welcometobeta-img-wrapper {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.welcometobeta-img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

@media (min-width: 700px) {
  .welcometobeta-h1 {
    margin-bottom: 30px;
  }
}
@media (min-width: 1000px) {
  .welcometobeta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 88px;
  }
}
@media (min-width: 1400px) {
  .welcometobeta {
    max-width: var(--max-width-dashboard);
    margin: 0 auto;
    margin-bottom: 120px;
  }
  .welcometobeta-img-wrapper {
    max-width: 500px;
  }
}
</style>

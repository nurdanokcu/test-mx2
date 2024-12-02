<template>
  <header class="header">
    <div class="header-left">
      <h1 class="main-title">
        <span class="span-title">Experience</span> the next dimension in Digital
        Marketing
      </h1>
      <p class="header-text">
        mx&#178; is the worlds first end to end AI Powered digital marketing
        platform. Built specifically to take the time consuming mundane and
        complex tasks off your hands. Use it to elevate your current marketing
        setup or use it as your cost effective and impactful marketing team.
        Either way the power of mx&#178; will elevate your marketing to the next
        dimension.
      </p>
    </div>
    <NuxtLink to="#join-waitlist" class="button-wrapper">
      <CommonLinkSpan text="Join waitlist" :is-filled="true">
        <IconsGeneralArrow color="white" direction="right" />
      </CommonLinkSpan>
    </NuxtLink>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 52px;
  padding: 136px 32px 0;
  margin-bottom: 132px;
}

.main-title {
  max-width: 520px;
  font-weight: 700;
  font-size: 42px;
  line-height: 48px;
  margin-bottom: 52px;
  color: var(--bw-black);
}

.span-title {
  color: var(--blue-main);
}

.header-text {
  max-width: 520px;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: var(--bw-lightest);
}
.button-wrapper {
  width: 260px;
}

@media screen and (min-width: 700px) {
  .header {
    padding: 136px 80px 0;
  }

  .main-title {
    margin-bottom: 8px;
    font-size: 48px;
    line-height: 52px;
  }
}

@media screen and (min-width: 1000px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 148px;
  }
}

@media screen and (min-width: 1400px) {
  .header {
    max-width: 1440px;
    padding: 136px 80px 0;
    margin: 0 auto 160px;
  }

  .header-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    gap: 100px;
  }

  .header-text {
    width: 40%;
  }
}
</style>

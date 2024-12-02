<template>
  <div class="why-us">
    <h3 class="why-us-title">
      Why us?
    </h3>
    <h4 class="why-us-subtitle">
      “Marketing is complex” says no one <span>using mx&#178;</span>
    </h4>
    <div class="why-us-text">
      <p class="why-us-paragraph">
        We're not just another marketing service - we're a team of AI-powered
        superheroes, here to simplify your marketing efforts and save you time.
        With our platform, you can say goodbye to the headaches of managing
        multiple channels and platforms. Our all-in-one solution brings
        everything together in one place, making it easier than ever to
        streamline your marketing efforts.
      </p>
      <p class="why-us-paragraph">
        Introducing our revolutionary tool, the epitome of cutting-edge AI
        technology, designed to streamline all your digital marketing needs. Our
        tool effortlessly takes charge of the entire marketing process from
        ideating and developing captivating creatives, to setting up and
        optimizing ads across prominent platforms like Google, Meta, and more.
        It doesn't stop there - it also schedules and executes strategic posts
        across various channels, ensuring your message reaches the right
        audience at the right time. This all-in-one solution automates and
        enhances your marketing endeavors, giving you the freedom to focus on
        what truly matters – growing your business. Harness the power of
        automation and AI to transform your digital marketing landscape and
        drive impressive results.
      </p>
    </div>
  </div>
</template>

<style scoped>
.why-us {
  display: flex;
  flex-direction: column;
  color: var(--bw-black);
  padding: 0 16px;
  margin-bottom: 120px;
}
.why-us-title {
  width: fit-content;
  padding: 16px 48px;
  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.15);
  border-radius: 0px 60px 60px 60px;
  font-weight: 800;
  font-size: 48px;
  line-height: 52px;
  margin: 0 0 48px auto;
}
.why-us-subtitle {
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  margin-bottom: 32px;
}
.why-us-subtitle span {
  color: var(--blue-main);
}
.why-us-text {
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-weight: 300;
  font-size: 14px;
  line-height: 15px;
}

@media screen and (min-width: 700px) {
  .why-us {
    max-width: 1044px;
    margin: 0 auto 160px;
    padding: 0 24px;
  }
  .why-us-title {
    margin: 0 0 0 auto;
  }
  .why-us-subtitle {
    width: 50%;
    margin: 0;
  }
  .why-us-text {
    flex-direction: row;
  }
  .why-us-paragraph {
    flex: 0 0 48%;
    align-self: flex-end;
  }
}

@media screen and (min-width: 1400px) {
  .why-us {
    width: 80%;
    max-width: var(--max-width-dashboard);
  }
}
</style>

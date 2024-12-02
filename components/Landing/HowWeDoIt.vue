<script setup>
const processData = [
  {
    number: 1,
    title: 'Fill in a short brief',
    class: 'brief',
    items: [
      'Tells us about your business',
      'Tell us about your audience',
      'Give us some competitive URLS',
      'Tell us what you want to achieve',
    ],
  },
  {
    number: 2,
    title: 'Set up campaign',
    class: 'campaign',
    items: [
      'Pick or let our AI recommend the right platforms and tactics for your campaign',
      'Accept or adjust as you see fit',
      'Once happy just press “next”',
    ],
  },
  {
    number: 3,
    title: 'Lets get creative',
    class: 'creative',
    items: [
      'Use MX² to help you develop your advertising creative and social posts',
      'Once happy press “next”',
    ],
  },
  {
    number: 4,
    title: 'Sit back & relax',
    class: 'relax',
    items: [
      'MX² will automatically setup and run the campaigns based on your final approval',
      'Data will flow into the tool near immediate and you can watch your campaign in real time',
      'Once patterns emerge in the data MX² will start making AI powered recommendation for optimization',
      'At a click of a button you can accept these recommendation and they will automatically be actioned',
      'Alternatively use MX² to optimize yourself',
      'Unparalleled ease, insight and flexibility at your fingertips',
    ],
  },
];
</script>

<template>
  <div class="process">
    <div id="how-we-do-it" class="process-hidden"></div>
    <div class="process-title-wrapper">
      <h3 class="process-title">
        How we do it?
      </h3>
      <NuxtLink href="#join-waitlist" class="button-wrapper">
        <CommonLinkSpan text="Join waitlist" theme="white">
          <IconsGeneralAssignment />
        </CommonLinkSpan>
      </NuxtLink>
    </div>
    <div class="process-content">
      <div
        v-for="data in processData"
        :key="data.number"
        :class="data.class"
        class="data"
      >
        <div class="data-number-wrapper">
          <div class="data-line" />
          <h4 class="data-number">
            {{ data.number }}
          </h4>
        </div>
        <div class="data-text">
          <h5 class="data-title">
            {{ data.title }}
          </h5>
          <ul>
            <li
              v-for="item in data.items"
              :key="item"
              class="data-item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.process {
  position: relative;
  padding: 64px 16px;
  background: var(--home-section-background);
  color: #fff;
  margin: 0 0 120px;
}
.process-hidden {
  position: absolute;
  top: -80px;
}

.process-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 52px;
}

.process-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  color: var(--bw-white);
}

ul {
  list-style-type: disc;
  padding-inline-start: 24px;
  margin: 8px;
}

.process-content {
  width: fit-content;
  margin: 0 auto;
}

.data {
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
}

.data-number-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.data-line {
  width: 1px;
  height: 100%;
  background: #fff;
}

.data-number {
  font-weight: 800;
  font-size: 48px;
  line-height: 40px;
}

.data-text {
  padding: 52px 0;
}

.data-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
}

.data-item {
  font-weight: 300;
  font-size: 14px;
  line-height: 15px;
}
.button-wrapper {
  width: 260px;
}

@media screen and (min-width: 700px) {
  .process {
    padding: 64px 24px;
    margin: 0 0 160px;
  }

  .process-title-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
    margin: 0 auto 52px;
  }
  .sit-relax .data-text {
    padding: 24px 0 0;
  }
}

@media screen and (min-width: 1200px) {
  .process {
    padding: 64px 80px;
  }

  .process-content {
    position: relative;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #fff;
    max-width: 1600px;
    margin: 0 auto;
  }

  .data {
    margin: 0;
    width: 25%;
  }
  .data-text {
    padding: 16px 0;
  }
  .data-number-wrapper {
    flex-direction: column-reverse;
  }
  .process-title-wrapper {
    max-width: 1600px;
  }
  .process-content::before {
    content: "";
    position: absolute;
    display: block;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 1px solid #faf9f9;
    border-radius: 100%;
    top: 100%;
    left: -20px;
    transform: translateY(-50%);
  }
  .brief {
    margin: 9% 0 0 0;
  }
  .campaign {
    margin: 6% 0 0 0;
  }
  .creative {
    margin: 3% 0 0 0;
  }
  .relax {
    margin: 0;
  }
}
</style>

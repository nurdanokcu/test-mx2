<script setup>
import { Collapse } from 'vue-collapsed';
import { FAQ } from '~/data/FaqTexts';

const questions = reactive(
  FAQ.map((item, index) => ({
    ...item,
    isExpanded: index === 0,
  })),
);
function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded
      = index === selectedIndex ? !questions[index].isExpanded : false;
  });
}
</script>

<template>
  <div>
    <div class="faq-cards">
      <div
        v-for="(question, index) in questions"
        :key="question.title"
        class="Section"
      >
        <button
          type="button"
          title="Click to expand/collapse"
          :aria-expanded="question.isExpanded"
          class="question"
          @click="handleAccordion(index)"
        >
          <span class="question-text">
            {{ question.question }}
          </span>
          <IconsGeneralExpand :is-rotated="question.isExpanded" />
        </button>

        <Collapse
          as="section"
          :when="question.isExpanded"
          class="answer"
        >
          <p>
            {{ question.answer }}
          </p>
        </Collapse>
      </div>
    </div>
  </div>
  <div class="faq-button">
    <a href="#contacts">
      <CommonLinkSpan text="Ask a Question" :is-filled="true">
        <IconsGeneralQuestionAnswer color="white" />
      </CommonLinkSpan>
    </a>
  </div>
</template>

<style scoped>
.faq-cards {
  margin-bottom: 16px;
}
.faq-button {
  margin-left: auto;
  width: 260px;
}
.question {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  margin-top: 30px;
  border-bottom: 1px solid var(--base-light-frenchgrayI);
}
.question-text {
  text-align: left;
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  color: var(--bw-lighter);
}
.answer {
  transition: height 0.4s cubic-bezier(0.33, 1, 0.68, 1);
}
.answer p {
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #000;
  padding: 24px 16px 0 16px;
}
</style>

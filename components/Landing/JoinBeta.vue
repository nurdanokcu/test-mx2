<script setup lang="ts">
// Global imports
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const { joinBeta } = landingApi();

// States
const isSeen = ref(false);
const isSuccessful = ref(false);
const isLoading = ref(false);
const showPopup = ref(false);
const newsletterChecked = ref(false);
const requestError = ref(false);
const isSubmitted = ref(false);

// Computed values
const { errors, defineField, handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup
        .string()
        .email('Invalid email format. Please enter a valid email address.')
        .required('Email is required'),
      terms: yup
        .boolean()
        .required('Please agree with our Terms and Conditions')
        .oneOf([true], 'Please agree with our Terms and Conditions'),
    }),
  ),
});
const [emailQuery, emailAttrs] = defineField('email');
const [terms, termsAttrs] = defineField('terms');
emailQuery.value = '';
terms.value = false;

const hasEmailError = computed(
  () => Boolean(errors.value.email) && isSubmitted.value,
);
const hasTermsError = computed(
  () => Boolean(errors.value.terms) && isSubmitted.value,
);

const earlyAccessData = computed(() => {
  return {
    email: emailQuery.value || '',
    allow_email_marketing: Number(newsletterChecked.value),
  };
});

// Functions
const sendEmail = handleSubmit(async () => {
  isLoading.value = true;
  try {
    const data = await joinBeta(earlyAccessData.value);
    if (
      data.message.toLowerCase()
      === 'you have just been added to our early access list.'
    ) {
      isSuccessful.value = true;
    } else if (
      data.message.toLowerCase() === 'you are already in our early access list.'
    ) {
      isSeen.value = true;
    }
    showPopup.value = !showPopup.value;
    resetForm({
      values: {
        email: '',
        terms: false,
      },
      touched: {
        email: false,
        terms: false,
      },
    });
    newsletterChecked.value = false;
    isSubmitted.value = false;
    isLoading.value = false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    requestError.value = true;
    isLoading.value = false;
    showPopup.value = true;
  }
});

async function handleSendEmail() {
  isSubmitted.value = true;
  await sendEmail();
}

function close() {
  isSuccessful.value = false;
  isSeen.value = false;
  showPopup.value = false;
}
</script>

<template>
  <div class="beta-container">
    <div id="join-waitlist" class="beta-hidden" />
    <div class="beta-content">
      <p class="beta-heading">
        Join Waitlist
      </p>
      <p class="beta-text">
        Get Early Access To mx&#178;
      </p>
    </div>

    <div class="beta-form">
      <div class="beta-form-input-button">
        <div
          class="input-wrapper"
          :class="[{ 'input-wrapper-error': hasEmailError }]"
        >
          <IconsFormMail />
          <input
            v-model="emailQuery"
            class="input-email"
            aria-label="Email"
            placeholder="example@gmail.com"
            type="text"
            name="email"
            v-bind="emailAttrs"
            @keydown.enter="handleSendEmail"
          >
        </div>

        <LandingSubmitButton
          :is-loading="isLoading"
          aria-label-text="Join wait list"
          type="button"
          @on-click="handleSendEmail"
        />
      </div>
      <CommonTransitionError>
        <div v-if="hasEmailError" class="error-message">
          <IconsGeneralError color="var(--red-lighter)" />
          <p>{{ errors.email }}</p>
        </div>
      </CommonTransitionError>
      <div class="beta-checkboxes">
        <CommonCheckbox
          id="beta-newsletter"
          v-model:checked="newsletterChecked"
          class="beta-checkbox"
        >
          <span class="beta-checkbox-label"> Subscribe to our newsletter </span>
        </CommonCheckbox>
        <CommonCheckbox
          id="beta-agreement"
          v-model:checked="terms"
          class="beta-checkbox"
          :has-error="hasTermsError"
          v-bind="termsAttrs"
        >
          <span class="beta-checkbox-label">
            I agree with
            <NuxtLink
              target="_blank"
              class="beta-checkbox-link"
              to="/terms-of-service"
            >
              Terms and Conditions
            </NuxtLink>
          </span>
        </CommonCheckbox>
        <CommonTransitionError>
          <div v-if="hasTermsError" class="error-message-terms">
            <IconsGeneralError color="var(--red-lighter)" />
            <p>{{ errors.terms }}</p>
          </div>
        </CommonTransitionError>
      </div>
    </div>
    <CommonTransitionFade>
      <CommonPopup v-if="showPopup" @on-close="close">
        <LandingInfoPopupSeenBefore v-if="isSeen" @on-click="close" />
        <LandingInfoPopupThankYou v-if="isSuccessful" @on-click="close" />
        <LandingInfoPopupError v-if="requestError" @on-click="close" />
      </CommonPopup>
    </CommonTransitionFade>
  </div>
</template>

<style scoped>
.beta-container {
  position: relative;
  background: var(--home-section-background);
  text-align: center;
  color: var(--bw-white);
  padding: 50px 0px;
}

.beta-hidden {
  position: absolute;
  top: -80px;
}

.beta-content {
  padding: 16px 16px 20px 16px;
}

.beta-heading {
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
}

.beta-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-top: 30px;
}

.beta-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto 0px auto;
  padding: 0 16px;
  max-width: 500px;
}

.beta-form-input-button {
  display: flex;
  align-items: center;
}

.input-wrapper {
  align-items: center;
  display: flex;
  border-bottom: 2px solid var(--bw-white);
  border-radius: 15px;
  width: 100%;
  margin-right: 32px;
  padding-left: 16px;
  padding-bottom: 12px;
  transition: border-bottom 0.3s ease;
}

.input-wrapper-error {
  border-bottom: 2px solid var(--red-lighter);
}

.input-email {
  margin-left: 6px;
  width: 100%;
  color: var(--bw-white);
  caret-color: var(--bw-white);
  font-size: 17px;
  font-weight: 500;
}

.input-email::placeholder {
  color: var(--bw-white);
  opacity: 0.35;
  font-size: 17px;
}

.input-email:focus {
  outline: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--bw-white);
}

.error-message,
.error-message-terms {
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
}

.error-message-terms {
  position: absolute;
  bottom: -32px;
}

.beta-checkboxes {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
}

.beta-checkbox {
  display: flex;
  align-items: center;
}

.beta-checkbox-label {
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
}

.beta-checkbox-link {
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: var(--bw-white);
  transition: color 0.3s ease;
}

.beta-checkbox-link:hover {
  color: var(--base-light-frenchgrayI);
}

.beta-checkbox-link:active {
  color: var(--base-light-frenchgrayII);
}

@media (min-width: 700px) {
  .beta-text {
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
  }
}
</style>

<script setup lang="ts">
// Global imports
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const { subscribeBeta } = landingApi();

// States
const isLoading = ref(false);
const isSeen = ref(false);
const isSuccessful = ref(false);
const showPopup = ref(false);
const requestError = ref(false);
const isSubmitted = ref(false);
const launchDate = new Date('2024-12-25').getTime();
const timeLeft = ref(0);

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
const daysLeft = computed(() => {
  return Math.floor(timeLeft.value / (1000 * 60 * 60 * 24));
});

// Functions
const sendEmail = handleSubmit(async () => {
  if (!emailQuery.value) {
    return;
  }
  isLoading.value = true;
  try {
    const data = await subscribeBeta(emailQuery.value);
    if (
      data.message.toLowerCase()
      === 'you are already in our exclusive access list.'
    ) {
      isSeen.value = true;
    } else {
      isSuccessful.value = true;
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
    isLoading.value = false;
  } catch (error) {
    requestError.value = true;
    isLoading.value = false;
    showPopup.value = true;
  }
});
const handleSendEmail = async () => {
  isSubmitted.value = true;
  await sendEmail();
};

function close() {
  isSuccessful.value = false;
  isSeen.value = false;
  showPopup.value = false;
}

const updateCountdown = () => {
  const now = new Date().getTime();
  if (launchDate - now <= 0) {
    timeLeft.value = 0;
    return;
  }
  timeLeft.value = launchDate - now;
};

// Lifecycle hooks
let intervalId: NodeJS.Timeout;
onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="countdown-beta-container">
    <div class="countdown-beta">
      <div>
        <div class="countdown-beta-content">
          <p class="countdown-beta-heading">
            Get Notified When mx&#178; Launches:
          </p>
          <p class="countdown-beta-text">
            Sign Up Now for Exclusive Access
          </p>
        </div>
        <div class="countdown-form">
          <div class="countdown-form-input-button">
            <div
              :class="[
                'input-wrapper',
                { 'input-wrapper-error': hasEmailError },
              ]"
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
              />
            </div>
            <LandingSubmitButton
              :is-loading="isLoading"
              :aria-label-text="'Submit'"
              :type="'button'"
              @on-click="handleSendEmail"
            />
          </div>
          <CommonTransitionError>
            <div v-if="hasEmailError" class="error-message">
              <IconsGeneralError color="var(--red-lighter)" />
              <p>{{ errors.email }}</p>
            </div>
          </CommonTransitionError>
          <div class="countdown-checkboxes">
            <CommonCheckbox
              id="countdown-checkbox"
              v-model:checked="terms"
              class="countdown-checkbox"
              :has-error="hasTermsError"
              :aria-label="'I agree with Terms and Conditions'"
              v-bind="termsAttrs"
            >
              <span class="countdown-checkbox-label">
                I agree with
                <NuxtLink
                  target="_blank"
                  class="countdown-checkbox-link"
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
      </div>
      <div class="count-down-card">
        <div class="count">
          <div class="days">
            <span>{{ daysLeft }}</span>
            <p class="day">
              days
            </p>
          </div>
          <p class="days-text">
            to start of new AI-marketing era
          </p>
        </div>
      </div>
    </div>
    <CommonTransitionFade>
      <CommonPopup v-if="showPopup" @on-close="close">
        <LandingInfoPopupNotify v-if="isSuccessful" @on-click="close" />
        <LandingInfoPopupSeenBeforeSubscribe v-if="isSeen" @on-click="close" />
        <LandingInfoPopupError v-if="requestError" @on-click="close" />
      </CommonPopup>
    </CommonTransitionFade>
  </div>
</template>

<style scoped>
.countdown-beta-container {
  padding: 50px 0px;
}
.countdown-beta-container {
  background: var(--home-section-background);
  text-align: center;
  color: var(--bw-white);
}
.countdown-beta {
  max-width: var(--max-width-dashboard);
  margin: auto;
}
.countdown-beta-content {
  padding: 0px 30px;
}
.countdown-beta-heading {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  color: var(--bw-white);
}
.countdown-beta-text {
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: var(--bw-white);
  margin: 20px 0px;
}
.countdown-form {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 32px auto 0px auto;
  padding: 0 16px;
  width: 100%;
  max-width: 500px;
}
.countdown-form-input-button {
  display: flex;
  align-items: center;
  box-sizing: border-box;
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
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
}
.error-message-terms {
  position: absolute;
  bottom: -20px;
}
.countdown-checkboxes {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
}
.countdown-checkbox {
  display: flex;
  align-items: center;
}
.countdown-checkbox-label {
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
}
.countdown-checkbox-link {
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: var(--bw-white);
  transition: color 0.3s ease;
}
.countdown-checkbox-link:hover {
  color: var(--base-light-frenchgrayI);
}
.countdown-checkbox-link:active {
  color: var(--base-light-frenchgrayII);
}

.count-down-card {
  border-radius: 20px;
  background-color: var(--bw-white);
  max-width: 327px;
  margin: 50px auto;
  text-align: start;
}
.count {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 16px;
}
.days span {
  font-weight: 700;
  font-size: 96px;
  line-height: 104px;
  color: var(--blue-darker);
}
.day {
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  color: var(--blue-darker);
}
.days-text {
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: var(--blue-darker);
}

@media (min-width: 700px) {
  .countdown-beta-heading {
    text-align: start;
  }
  .countdown-beta-text {
    margin: 20px 0px;
    text-align: start;
  }
  .count-down-card {
    max-width: 380px;
  }
  .countdown-beta-content {
    width: 432px;
    margin: auto;
  }
  .error {
    width: 384px;
    margin: auto;
  }
  .countdown-beta {
    margin: auto;
    width: 500px;
  }
}
@media (min-width: 1000px) {
  .countdown-beta-container {
    padding: 0px;
  }
  .countdown-beta {
    display: grid;
    grid-template-columns: 2.3fr 2fr;
    padding: 48px 40px;

    margin: auto;
    width: auto;
  }
  .countdown-beta-content {
    text-align: start;
    padding: 0px;
    width: auto;
  }
  .count-down-card {
    align-self: center;
    margin: 17px;
    justify-self: center;
  }
  .countdown-form {
    padding: 0;
    margin: 68px 0 0 0;
  }
}
@media (min-width: 1400px) {
  .countdown-beta {
    display: grid;
    grid-template-columns: 4fr 2fr;
    padding: 48px 100px;
  }
}
</style>

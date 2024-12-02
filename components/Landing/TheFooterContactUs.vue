<script setup>
// Global imports
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { useReCaptcha } from 'vue-recaptcha-v3';

const { sendContactForm } = landingApi();
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

// States
const isLoading = ref(false);
const recaptchaError = ref(false);
const isMessageSent = ref(false);
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
      name: yup.string().required('Name is required'),
      message: yup.string().required('Message is required'),
    }),
  ),
});
const [email, emailAttrs] = defineField('email');
const [name, nameAttrs] = defineField('name');
const [message, messageAttrs] = defineField('message');
email.value = '';
name.value = '';
message.value = '';

const hasEmailError = computed(
  () => Boolean(errors.value.email) && isSubmitted.value,
);
const hasNameError = computed(
  () => Boolean(errors.value.name) && isSubmitted.value,
);
const hasMessageError = computed(
  () => Boolean(errors.value.message) && isSubmitted.value,
);

// Functions
const reset = () => {
  resetForm({
    values: {
      email: '',
      name: '',
      message: '',
    },
    touched: {
      email: false,
      name: false,
      message: false,
    },
  });
  isSubmitted.value = false;
  requestError.value = false;
  recaptchaError.value = false;
};

const submitForm = handleSubmit(async () => {
  isLoading.value = true;

  await recaptchaLoaded();
  const token = await executeRecaptcha('submit');
  if (!token) {
    recaptchaError.value = true;
    return;
  }
  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  if (token) {
    try {
      const data = await sendContactForm(formData);
      if (data.status === 'success') {
        isMessageSent.value = true;
        reset();
      }
    } catch (error) {
      requestError.value = true;
    } finally {
      isLoading.value = false;
    }
  }
});

const handleSubmitForm = async () => {
  isSubmitted.value = true;
  await submitForm();
};
const tryAgain = async () => {
  isMessageSent.value = false;
  requestError.value = false;
  recaptchaError.value = false;
  await handleSubmitForm();
};
</script>

<template>
  <div class="footer">
    <div class="inputs-container">
      <div>
        <p class="footer-heading">
          Let’s work together!
        </p>
        <p class="footer-subheading">
          We’ll be happy to answer your questions.
        </p>
        <div v-if="!isMessageSent" class="contact-us-line" />
      </div>

      <form @submit.prevent="handleSubmitForm">
        <div :class="{ invisible: isMessageSent }">
          <div class="contact-form-item">
            <label for="contact-name">What's your name?</label>
            <div :class="['input-name', { error: hasNameError }]">
              <IconsFormPerson color="white" />
              <input
                id="contact-name"
                v-model="name"
                v-bind="nameAttrs"
                type="text"
                name="name"
                autocomplete="name"
                placeholder="Type your full name"
              />
            </div>
            <CommonTransitionError>
              <div v-if="hasNameError" class="error">
                <IconsGeneralError color="var(--red-lighter)" />
                <p>{{ errors.name }}</p>
              </div>
            </CommonTransitionError>
          </div>
          <div class="contact-form-item">
            <label for="contact-mail">What's your email address?</label>
            <div :class="['input-email', { error: hasEmailError }]">
              <IconsFormMail />
              <input
                id="contact-mail"
                v-model="email"
                v-bind="emailAttrs"
                type="text"
                name="email"
                autocomplete="email"
                placeholder="example@gmail.com"
              />
            </div>
            <CommonTransitionError>
              <div v-if="hasEmailError" class="error">
                <IconsGeneralError color="var(--red-lighter)" />
                <p>{{ errors.email }}</p>
              </div>
            </CommonTransitionError>
          </div>
          <div class="contact-form-item">
            <label for="contact-message">Tell us what you think</label>
            <textarea
              id="contact-message"
              v-model="message"
              v-bind="messageAttrs"
              :class="{ error: hasMessageError }"
              name="message"
              rows="6"
              class="contact-message"
              placeholder="Type your message"
            ></textarea>
            <CommonTransitionError>
              <div v-if="hasMessageError" class="error">
                <IconsGeneralError color="var(--red-lighter)" />
                <p>{{ errors.message }}</p>
              </div>
            </CommonTransitionError>
          </div>
        </div>
        <p v-if="isMessageSent" class="success">
          Thank you for contacting us ! We will get back to you as soon as we
          can.
        </p>
        <div class="input-button">
          <CommonButton
            v-if="!requestError && !isMessageSent && !recaptchaError"
            :disabled="isLoading"
            :text="!isLoading ? 'Send Message' : 'Sending...'"
            theme="white"
            type="submit"
          >
            <IconsGeneralLoading v-if="isLoading" color="blue" />
            <IconsGeneralMessageSent v-else />
          </CommonButton>
          <div v-if="isMessageSent" class="message-sent">
            <IconsGeneralMessageSent />
            <span>Message Sent</span>
          </div>
        </div>
        <div v-if="requestError" class="request-error">
          <div class="request-error-text">
            <IconsGeneralError color="var(--red-lighter)" />
            <div>
              Sorry, there was a problem sending your message.
              <br />
              Please try again later or contact us at
              <br />
              <a href="mailto:info@propaganda-solutions.com">
                info@propaganda-solutions.com
              </a>
            </div>
          </div>
          <CommonButton
            class="reset-button"
            text="Try Again"
            theme="white"
            @on-click="tryAgain"
          />
        </div>
        <div v-if="recaptchaError" class="request-error">
          <div class="request-error-text">
            <IconsGeneralError color="var(--red-lighter)" />
            <div>
              Sorry, we couldn’t verify that you’re not a robot.
              <br />
              Please try again later or contact us at
              <br />
              <a href="mailto:info@propaganda-solutions.com">
                info@propaganda-solutions.com
              </a>
            </div>
          </div>
          <CommonButton
            class="reset-button"
            text="Try Again"
            theme="white"
            @on-click="tryAgain"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.footer-heading {
  font-weight: 800;
  font-size: 48px;
  line-height: 52px;
  color: var(--bw-white);
  margin-bottom: 20px;
}

.footer-subheading {
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: var(--bw-white);
  margin: 30px 0px;
}

.contact-us-line {
  width: 78%;
  height: 1px;
  background-color: var(--bw-white);
  margin: 20px 0px;
}

label {
  display: flex;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: var(--bw-white);
  margin-bottom: 16px;
}

.success {
  color: var(--bw-white);
  display: inline-block;
  font-size: 15px;
}

.error {
  display: flex;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--bw-white);
  margin-top: 8px;
}

.contact-form-item {
  margin-bottom: 16px;
}

.input-name,
.input-email {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 2px solid var(--bw-white);
  border-radius: 10px;
  caret-color: var(--bw-white);
  transition: all 0.3s linear;
}
.input-name.error,
.input-email.error {
  border-bottom: 2px solid var(--red-lighter);
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--bw-white);
}

input {
  margin-left: 3px;
  width: 100%;
  color: var(--bw-white);
  font-size: 16px;
  font-weight: 500;
}

input::placeholder,
textarea::placeholder {
  color: var(--bw-white);
  opacity: 0.35;
  font-size: 16px;
  font-weight: 500;
}

input:focus {
  outline: none;
  background-color: transparent !important;
}

textarea {
  box-sizing: border-box;
  padding: 12px 16px;
  border: 2px solid var(--bw-white);
  border-radius: 10px;
  width: 100%;
  color: var(--bw-white);
  font-size: 16px;
  font-weight: 500;
  caret-color: var(--bw-white);
  transition: all 0.3s linear;
  resize: vertical;
}
textarea.error {
  border: 2px solid var(--red-lighter);
}

.input-button {
  margin: 20px 0 0 auto;
  width: 260px;
}

.invisible {
  display: none;
}

.request-error {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--bw-white);
}
.request-error-text {
  display: flex;
  gap: 12px;
}
.reset-button {
  max-width: 162px;
}
.message-sent {
  opacity: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 700;
  color: var(--blue-main);
  font-size: 16px;
  background-color: var(--bw-white);
  color: var(--blue-main);
}
.message-sent span {
  text-align: center;
  flex-grow: 1;
}
@media screen and (min-width: 700px) {
  .request-error {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
}

@media (min-width: 1000px) {
  .inputs-container {
    max-width: 600px;
  }

  .contact-us-line {
    width: 52%;
    margin: 34px 0px;
  }

  .invisible {
    display: block;
    visibility: hidden;
  }
}
</style>

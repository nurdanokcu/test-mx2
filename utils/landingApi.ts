interface BetaResponse {
  status: string;
  message: string;
}
interface EarlyAccessType {
  email: string;
  allow_email_marketing: number;
}
export const landingApi = () => {
  const joinBeta = async (data: EarlyAccessType) => {
    const response = await fetchWrapper('/api/v1/early-accesses', {
      method: 'POST',
      body: data,
    });
    return response as BetaResponse;
  };

  const confirmEmail = async (token: string) => {
    const response = await useApiFetch('/api/v1/confirm-early-accesses', {
      method: 'POST',
      query: { confirmation_token: token },
    });
    return response;
  };

  const subscribeBeta = async (email: string) => {
    const response = await fetchWrapper('/api/v1/subscribe', {
      method: 'POST',
      body: { email },
    });
    return response as BetaResponse;
  };

  interface ContactForm {
    name: string;
    email: string;
    message: string;
  }
  const sendContactForm = async (data: ContactForm) => {
    const response = await fetchWrapper('/api/v1/contacts', {
      method: 'POST',
      body: data,
    });
    return response;
  };

  return {
    joinBeta,
    confirmEmail,
    subscribeBeta,
    sendContactForm,
  };
};

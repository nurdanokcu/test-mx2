type ResponseGenerateTips = {
  tips: string;
};

type ResponseOptions = {
  data: {
    id: number;
    name: string;
  }[];
};
type DataGeneratePost = {
  industry: string;
  tone_of_voice: string;
};

type ResponseGeneratePost = {
  post_image: string;
  post_text: string;
  post_date: string;
  post_time: string;
};

type ResponseGenerateRecommendation = {
  impressions: number;
  percentage_impression: number;
  recommendation: string;
};

export const showcaseApi = () => {
  const fetchToneOfVoiceOptions = async () => {
    const response = await fetchWrapper('/api/v1/tone-of-voices', {
      method: 'GET',
    });
    return response as ResponseOptions;
  };

  const generatePost = async (data: DataGeneratePost) => {
    const response = await fetchWrapper('/api/v1/demo-requests', {
      method: 'POST',
      body: data,
    });
    return response as ResponseGeneratePost;
  };

  const generateTips = async () => {
    const response = await fetchWrapper('/api/v1/tips', {
      method: 'GET',
    });
    return response as ResponseGenerateTips;
  };

  const generateRecommendation = async () => {
    const response = await fetchWrapper('/api/v1/recommendation', {
      method: 'GET',
    });
    return response as ResponseGenerateRecommendation;
  };

  return {
    fetchToneOfVoiceOptions,
    generatePost,
    generateTips,
    generateRecommendation,
  };
};

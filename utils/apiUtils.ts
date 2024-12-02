import type { AsyncData } from '~/types/asyncData';

export const useApiFetch = async (request: string, opts: any) => {
  const config = useRuntimeConfig();
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  return await useFetch(request, {
    headers: defaultHeaders,
    baseURL: config.public.baseURL,
    ...opts,
  });
};

export const fetchWrapper = async <T>(endpoint: string, options: any) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseURL;
  const finalUrl = `${baseUrl}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  return await $fetch<T>(finalUrl, {
    headers: defaultHeaders,
    ...options,
  });
};

export const makeGetRequest = async <Response>(
  url: string,
): Promise<Response> => {
  const config = useRuntimeConfig();
  const token = useCookie('mx-auth');
  const finalUrl = `${config.public.baseURL}${url}`;
  const response = await $fetch<Response>(finalUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  return response;
};

export const makeGetRequestUseFetch = async <Response, Error>(
  url: string,
): Promise<AsyncData<Response, Error>> => {
  const token = useCookie('mx-auth');
  const config = useRuntimeConfig();
  const finalUrl = `${config.public.baseURL}${url}`;
  const response = await useFetch(finalUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token.value}`,
    },
  });
  return response as AsyncData<Response, Error>;
};

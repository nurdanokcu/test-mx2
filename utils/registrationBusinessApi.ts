type ResponseFetchType = {
  status: string;
  data: {
    id: number;
    name: string;
  }[];
};

export const registrationBusinessApi = () => {
  const fetchIndustryOptions = async () => {
    const response = await fetchWrapper<ResponseFetchType>(
      '/api/v1/industries',
      {
        method: 'GET',
      },
    );
    return response;
  };

  return {
    fetchIndustryOptions,
  };
};

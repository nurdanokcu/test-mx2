export type AsyncData<DataT, ErrorT> = {
  data: Ref<DataT | null>;
  pending: Ref<boolean>;
  error: Ref<ErrorT | null>;
};

export type TypeErrorMessage = {
  message: string;
  data: {
    message: string;
    status?: string;
    errors: {
      [key: string]: string[];
    };
  };
  statusCode: number;
};

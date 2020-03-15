export interface ApiResponse<T> {
  success: boolean;
  body: T;
  error?: {
    id: string,
    message: string;
  };
}


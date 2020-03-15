export interface ApiRequest {
  // payload: T;
}

function generateApiRequest<T>(payload: T): T & ApiRequest  {
  let result = <T> {};
  return result;
}

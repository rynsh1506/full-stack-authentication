import {AxiosError} from "axios";

export interface ResponseError {
  statusCode: string;
  message: string;
  error: string;
}

export const handleApiError = (error: AxiosError<ResponseError>) => {
  if (error.response) {
    const {data, status} = error.response;
    console.error(`Request failed with status ${status}`);
    throw data.message || "Unknown error";
  } else if (error.request) {
    console.error("Request made but no response received");
    throw new Error("Network error");
  } else {
    console.error("Error setting up request");
    throw new Error("Request setup error");
  }
};

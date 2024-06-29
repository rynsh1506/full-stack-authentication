import axios, {AxiosError} from "axios";
import {API_BASE_URL} from "../config";
import {handleApiError, ResponseError} from "./error";

export const registerUser = async (
  username: string,
  password: string
): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/register`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError<ResponseError>);
  }
};

export const loginUser = async (
  username: string,
  password: string
): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError<ResponseError>);
  }
};

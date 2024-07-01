import axios from "axios";

import {API_BASE_URL} from "../config";

interface User {
  id: number;
  name: string;
  username: string;
}

export const getUser = async (userId: number): Promise<User> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/${userId}`);

    return response.data as User;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user");
  }
};

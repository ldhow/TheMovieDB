import axios from "axios";
import { DEFAULT_BASE_URL } from "~/constants/endpoints";

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || DEFAULT_BASE_URL, // replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.READ_ACCESS_TOKEN}`
  },
  timeout: 50000
});

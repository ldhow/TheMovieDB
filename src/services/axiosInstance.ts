import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_BASE_URL
  , // replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.EXPO_READ_ACCESS_TOKEN}`
  },
  timeout: 50000
});

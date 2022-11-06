import axios from "axios";

import { BASE_URL, JSON_TYPE } from "../constant";

export const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": JSON_TYPE,
  },
});

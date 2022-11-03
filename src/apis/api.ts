import axios from "axios";

// const BASE_URL = "https://preonboarding.platdev.net/api/cars";
const BASE_URL = "https://preonboarding.platdev.net/api";
const JSON_TYPE = "application/json";

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": JSON_TYPE,
  },
});

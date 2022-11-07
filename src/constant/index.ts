import { CategoryType } from "../types";

export const BASE_URL = "https://preonboarding.platdev.net/api";
export const JSON_TYPE = "application/json";

export const CATEGORY_LIST: Array<CategoryType> = [
  "전체",
  "소형",
  "중형",
  "대형",
  "SUV",
];

export const CATEGORY_ID: Record<CategoryType, number> = {
  전체: 0,
  소형: 1,
  중형: 2,
  대형: 3,
  SUV: 4,
};

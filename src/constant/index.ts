import {
  CategoryParam,
  CategoryType,
  FuelENGType,
  FuelKORType,
  SegmentENGType,
  SegmentKORType,
} from "../types";

export const category: Array<CategoryType> = [
  "전체",
  "소형",
  "중형",
  "대형",
  "SUV",
];

export const categoryMap: Record<CategoryType, CategoryParam> = {
  전체: null,
  소형: "C",
  중형: "D",
  대형: "E",
  SUV: "SUV",
};

export const segmentMap: Record<SegmentENGType, SegmentKORType> = {
  C: "소형",
  D: "중형",
  E: "대형",
  SUV: "SUV",
};

export const fuelMap: Record<FuelENGType, FuelKORType> = {
  gasoline: "가솔린",
  ev: "전기",
  hybrid: "하이브리드",
};

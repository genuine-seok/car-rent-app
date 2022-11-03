import { CategoryType, FuelENGType, SegmentENGType } from "../types";

export const getFormattedPrice = (n: number) => n.toLocaleString("ko-KR");

export const getStartDate = (date: Date) => {
  const newDate = new Date(date);
  const month = newDate.getMonth();
  const day = newDate.getDay();
  const week = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  return `${month}월 ${day}일 (${week[day]})부터`;
};

export const isNewCar = (date: Date) => {
  const newDate = new Date(date);
  const today = new Date();
  const gap = today.getDay() - newDate.getDay();
  return gap < 1;
};

export const priceByMonth = (amount: number) =>
  `월 ${getFormattedPrice(amount)}원 부터`;

export const getCategoryBySegment = (str: SegmentENGType) => {
  switch (str) {
    case "C":
      return "소형";
    case "D":
      return "중형";
    case "E":
      return "대형";
    case "SUV":
      return "SUV";
    default:
      throw new Error("유효하지 않은 Segment 타입입니다.");
  }
};
export const getSegmentByCategory = (str: CategoryType) => {
  switch (str) {
    case "전체":
      return null;
    case "소형":
      return "C";
    case "중형":
      return "D";
    case "대형":
      return "E";
    case "SUV":
      return "SUV";
    default:
      throw new Error("유효하지 않은 Category 타입입니다.");
  }
};
export const getStringByFuelType = (str: FuelENGType) => {
  switch (str) {
    case "gasoline":
      return "가솔린";
    case "ev":
      return "전기";
    case "hybrid":
      return "하이브리드";
    default:
      throw new Error("유효하지 않은 FuelType 타입입니다.");
  }
};

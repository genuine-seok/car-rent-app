export type CategoryType = "전체" | "소형" | "중형" | "대형" | "SUV";
export type CategoryParam = null | "C" | "D" | "E" | "SUV";

export type SegmentENGType = "C" | "D" | "E" | "SUV";
export type SegmentKORType = "소형" | "중형" | "대형" | "SUV";
export type SegmentType = Record<SegmentENGType, SegmentKORType>;

export type FuelENGType = "gasoline" | "ev" | "hybrid";
export type FuelKORType = "가솔린" | "전기" | "하이브리드";
export type FuelType = Record<FuelENGType, FuelKORType>;

export type AttributeType = {
  brand: string;
  name: string;
  segment: SegmentENGType;
  fuelType: FuelENGType;
  imageUrl: string;
};
export type InsuranceType = {
  name: string;
  description: string;
};
export type AdditionalProductsType = {
  name: string;
  amount: number;
};

export type CarDataType = {
  id: number;
  amount: number;
  attribute: AttributeType;
  startDate: Date;
  createdAt: Date;
  insurance?: InsuranceType[];
  additionalProducts?: AdditionalProductsType[];
};

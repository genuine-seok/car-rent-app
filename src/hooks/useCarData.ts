import { AxiosError, AxiosResponse } from "axios";
import { QueryKey, useQuery } from "react-query";

import { httpClient } from "../apis/api";
import { CarServiceImp } from "../apis/CarService";
import { CarDataType, CategoryParam } from "../types";

const carService = new CarServiceImp(httpClient);
const getCarDatas = async ({ queryKey }: { queryKey: QueryKey }) => {
  // TODO: 추가적인 파라미터 대응
  // getCars로 전달한 인자 params 객체의 키:값을 동적으로 생성
  const res = await carService.getCars({ segment: queryKey[1] });
  return res;
};

type CarDataPayload = {
  payload: CarDataType[];
};

// TODO: useUI 훅의 category 상태를 이용해, 동적으로 queryKey를 생성하고,
// api 요청(파라미터)를 보낼 수 있도록 변경한 후, 각 slide에서 useCarData를 이용해
// 비동기 통신 결과값을 이용하도록 변경
// TODO: FuelType 등 추가적인 파라미터 대응
export const useCarData = (segment: CategoryParam) => {
  return useQuery<AxiosResponse<CarDataPayload>, AxiosError>({
    queryKey: [`get-cars-${segment}`, segment],
    queryFn: getCarDatas,
  });
};

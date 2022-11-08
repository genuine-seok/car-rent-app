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

// TODO: FuelType 등 추가적인 파라미터 대응
export const useCarData = (segment: CategoryParam) => {
  return useQuery<AxiosResponse<CarDataPayload>, AxiosError>({
    queryKey: [`get-cars-${segment}`, segment],
    queryFn: getCarDatas,
    staleTime: 20 * 1000,
    retry: false,
    refetchOnWindowFocus: false,
  });
};

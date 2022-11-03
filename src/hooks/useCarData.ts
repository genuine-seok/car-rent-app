import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

import CarService from "../apis/CarService";
import { CarDataType, CategoryParam } from "../types";

type CarDataPayload = {
  payload: CarDataType[];
};

export const useCarData = (segment: CategoryParam) => {
  const params = {
    segment,
  };
  return useQuery<AxiosResponse<CarDataPayload>, AxiosError>(
    [`get-cars-${segment}`, segment],
    async () => {
      const res = await CarService.getCar(params);
      return res;
    }
  );
};

/* eslint-disable class-methods-use-this */
import { client } from "./api";

interface CarService {
  getCar(params?: any): Promise<any>;
}

class CarServiceImp implements CarService {
  getCar(params?: any): Promise<any> {
    return client.get("/cars", { params });
  }
}

export default new CarServiceImp();

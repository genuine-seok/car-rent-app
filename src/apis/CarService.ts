import { AxiosInstance } from "axios";

interface CarService {
  getCars(params?: any): Promise<any>;
}

export class CarServiceImp implements CarService {
  private httpClient;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  getCars(params?: any): Promise<any> {
    return this.httpClient.get("/cars", { params });
  }
}

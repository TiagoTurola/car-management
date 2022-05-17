import { instance } from "./axios-instance";

export interface ICarInfo {
  id: number;
  placa: string;
  marca: string;
  cor: string;
}

export interface IRegisterCar {
  id?: number;
  placa: string;
  marca: string;
  cor: string;
}

export async function fetchAllCars() {
  const { data } = await instance.get("/carros").catch((error) => {
    throw error;
  });
  return data;
}

export async function saveCar(carInfo: IRegisterCar) {
  const { data } = await instance.post("/carros", carInfo).catch((error) => {
    throw error;
  });
  return data;
}

export async function deleteCar(id: number) {
  await instance.delete(`/carros/${id}`).catch((error) => {
    throw error;
  });
}

export async function updateCar(id: number, carro: IRegisterCar) {
  const { data } = await instance
    .patch(`/carros/${id}`, carro)
    .catch((error) => {
      throw error;
    });
  return data;
}

export async function getCarById(id: number) {
  const { data } = await instance.get(`/carros/${id}`).catch((error) => {
    throw error;
  });
  return data;
}

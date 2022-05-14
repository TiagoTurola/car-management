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

export async function getCar() {
  const { data } = await instance.get("/carros").catch((error) => {
    throw error;
  });
  return data;
}

export async function saveCar(carInfo: IRegisterCar) {
  const { data } = await instance.post("/carros", carInfo).catch((error) => {
    throw new Error(error.message);
  });
  return data;
}

export async function deleteCar(id: number) {
  await instance.delete(`/carros/${id}`).catch((error) => {
    throw new Error(error.message);
  });
}

export async function updateCar(id: number) {
  const { data } = await instance.patch(`/carros/${id}`).catch((error) => {
    throw new Error(error.message);
  });
  return data;
}

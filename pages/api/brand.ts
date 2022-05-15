import { instance } from "./axios-instance";

export interface IBrandInfo {
  id?: number;
  name: string;
}

export async function getBrand() {
  const { data } = await instance.get("/marcas").catch((error) => {
    throw new Error(error.message);
  });
  return data;
}

export async function saveBrand(brandInfo: IBrandInfo) {
  const { data } = await instance.post("/marcas", brandInfo).catch((error) => {
    throw new Error(error.message);
  });
  return data;
}

export async function deleteBrand(id: number) {
  await instance.delete(`/marcas/${id}`).catch((error) => {
    throw new Error(error.message);
  });
}

export async function updateBrand(id: number, brandInfo: IBrandInfo) {
  const { data } = await instance
    .patch(`/marcas/${id}`, brandInfo)
    .catch((error) => {
      throw new Error(error.message);
    });
  return data;
}

export async function getBrandById(id: number) {
  const { data } = await instance.get(`/marcas/${id}`).catch((error) => {
    throw error;
  });
  return data;
}

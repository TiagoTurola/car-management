import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, InputContent, Label, Div } from "./styles";
import { getCarById, ICarInfo, IRegisterCar } from "../../pages/api/cars";
import { fetchAllBrands, IBrandInfo } from "../../pages/api/brands";
import Input from "../core/inputs";
import Button from "../core/buttons";

interface IEditCarProps {
  submit?: (id: number, value: IRegisterCar) => void;
}

const EditCar = ({ submit }: IEditCarProps) => {
  const router = useRouter();
  const { ["editar-carro"]: id } = router.query;
  const [dataCar, setDataCar] = useState<ICarInfo>();
  const [carPlate, setCarPlate] = useState<string>("");
  const [carBrand, setCarBrand] = useState<string>("");
  const [carColor, setCarColor] = useState<string>("");
  const [listBrands, setListBrands] = useState<IBrandInfo[]>([]);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    router.push("/");
    event.preventDefault();
    submit?.(Number(id), {
      placa: carPlate,
      marca: carBrand,
      cor: carColor,
    } as IRegisterCar);
  };

  async function fetchBrands() {
    await fetchAllBrands().then((res) => setListBrands(res));
  }

  async function getById() {
    await getCarById(Number(id)).then((res) => {
      setDataCar(res);
      setCarColor(res.cor);
      setCarBrand(res.marca);
      setCarPlate(res.placa);
    });
  }

  useEffect(() => {
    if (!dataCar) {
      getById();
    }
    fetchBrands();
  }, []);

  return (
    <Container onSubmit={submitForm}>
      <InputContent>
        <Label>Placa</Label>
        <Input
          type="text"
          value={carPlate}
          onChange={(data) => setCarPlate(data.currentTarget.value)}
        />
      </InputContent>
      <InputContent>
        <Label>Marca</Label>
        <select
          name="marcas"
          id=""
          onChange={(data) => setCarBrand(data.currentTarget.value)}
        >
          <option value={carBrand}>{carBrand}</option>

          {listBrands.map((brand) => {
            return (
              <option key={brand.name} value={brand.name}>
                {brand.name}
              </option>
            );
          })}
        </select>
      </InputContent>
      <InputContent>
        <Label>Cor</Label>
        <Input
          type="text"
          value={carColor}
          onChange={(data) => setCarColor(data.currentTarget.value)}
        />
      </InputContent>
      <Div>
        <Button type="submit" texto="Salvar" />

        <Button path="/carros" texto="Voltar" />
      </Div>
    </Container>
  );
};

export default EditCar;

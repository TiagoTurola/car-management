import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, InputContent, Label, Button, Div, Select } from "./styles";
import { IRegisterCar } from "../../pages/api/cars";
import { fetchAllBrands, IBrandInfo } from "../../pages/api/brands";

interface INewCarProps {
  submit?: (value: IRegisterCar) => void;
}

const NewCar = ({ submit }: INewCarProps) => {
  const router = useRouter();
  const [carPlate, setCarPlate] = useState<string>("");
  const [carBrand, setCarBrand] = useState<string>("");
  const [carColor, setCarColor] = useState<string>("");
  const [listBrands, setListBrands] = useState<IBrandInfo[]>([]);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    router.push("/");
    event.preventDefault();
    submit?.({
      placa: carPlate,
      marca: carBrand,
      cor: carColor,
    } as IRegisterCar);
  };

  async function fetchBrands() {
    await fetchAllBrands().then((res) => setListBrands(res));
  }

  useEffect(() => {
    fetchBrands();
  }, [listBrands.length]);

  return (
    <Container onSubmit={submitForm}>
      <h1>Novo Carro</h1>
      <InputContent>
        <Label>Placa</Label>
        <input
          type="text"
          value={carPlate}
          onChange={(data) => setCarPlate(data.currentTarget.value)}
        />
      </InputContent>
      <InputContent>
        <Label>Marca</Label>
        <Select
          name="marcas"
          id=""
          onChange={(data) => setCarBrand(data.currentTarget.value)}
        >
          <option value="Selecione uma marca"></option>

          {listBrands.map((marca) => {
            return (
              <option key={marca.name} value={marca.name}>
                {marca.name}
              </option>
            );
          })}
        </Select>
      </InputContent>
      <InputContent>
        <Label>Cor</Label>
        <input
          type="text"
          value={carColor}
          onChange={(data) => setCarColor(data.currentTarget.value)}
        />
      </InputContent>
      <Div>
        <Button type="submit">Salvar</Button>

        <Link href="/carros">
          <Button>Voltar</Button>
        </Link>
      </Div>
    </Container>
  );
};

export default NewCar;

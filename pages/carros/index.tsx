import Link from "next/link";
import type { NextPage } from "next";
import Header from "../../components/header";
import TableCar from "../../components/tableCar";
import Title from "../../components/title";
import Button from "../../components/core/buttons";
import {
  Container,
  ContentTextButtonHeader,
  InputContent,
  Label,
  Select,
} from "./styles";
import { useEffect, useState } from "react";
import { fetchAllBrands, IBrandInfo } from "../api/brands";
import Input from "../../components/core/inputs";

const CarPage: NextPage = () => {
  const [filterPlate, setFilterPlate] = useState<string>("");
  const [filterBrand, setFilterBrand] = useState<string>("");
  const [listBrands, setListBrands] = useState<IBrandInfo[]>([]);

  async function fetchBrands() {
    await fetchAllBrands().then((res) => setListBrands(res));
  }

  useEffect(() => {
    fetchBrands();
  }, [listBrands.length]);

  return (
    <>
      <Header />
      <ContentTextButtonHeader>
        <Title title="Carros" />
        <Button type="button" path="/carros/novo" texto="Novo Carro" />
      </ContentTextButtonHeader>
      <Container>
        <InputContent>
          <Label>Filtrar por placa</Label>
          <Input
            type="text"
            onChange={(event) => setFilterPlate(event.currentTarget.value)}
          />
        </InputContent>
        <InputContent>
          <Label>Filtrar por marca</Label>
          <Select
            name="Brand"
            onChange={(event) => setFilterBrand(event.currentTarget.value)}
          >
            <option value="Todos">Todos</option>
            {listBrands.map((marca) => {
              return (
                <option key={marca.name} value={marca.name}>
                  {marca.name}
                </option>
              );
            })}
          </Select>
        </InputContent>
      </Container>
      <TableCar filterPlate={filterPlate} filterBrand={filterBrand} />
    </>
  );
};

export default CarPage;

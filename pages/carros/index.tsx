import Link from "next/link";
import type { NextPage } from "next";
import Header from "../../components/header";
import TableCar from "../../components/tableCar";
import Title from "../../components/title";
import {
  Button,
  Container,
  ContentTextButtonHeader,
  InputContent,
  Label,
  Select,
} from "./styles";
import { useEffect, useState } from "react";
import { fetchAllBrands, IBrandInfo } from "../api/brands";

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
        <Title title={"Carros"}></Title>
        <Button>
          <Link href="/carros/novo">Novo Carro</Link>
        </Button>
      </ContentTextButtonHeader>
      <Container>
        <InputContent>
          <Label>Filtrar por placa</Label>
          <input
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

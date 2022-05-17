import type { NextPage } from "next";
import Header from "../../components/header";
import CarTitle from "../../components/carTitle";
import TableCar from "../../components/tableCar";
import { Container, InputContent, Label } from "./styles";
import { useState } from "react";

const CarPage: NextPage = () => {
  const [filterPlate, setFilterPlate] = useState<string>("");
  const [filterBrand, setFilterBrand] = useState<string>("");

  return (
    <>
      <Header />
      <CarTitle />
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
          <input
            type="text"
            onChange={(event) => setFilterBrand(event.currentTarget.value)}
          />
        </InputContent>
      </Container>
      <TableCar filterPlate={filterPlate} filterBrand={filterBrand} />
    </>
  );
};

export default CarPage;

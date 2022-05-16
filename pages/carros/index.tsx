import type { NextPage } from "next";
import Header from "../../components/header";
import Conteudo from "../../components/conteudo-carro";
import Input from "../../components/input";
import TabelaCarro from "../../components/tabela-carro";
import { Container, InputContent, Label } from "./styles";
import { useState } from "react";

const Carros: NextPage = () => {

  const [filterPlate, setFilterPlate] = useState<string>("");
  const [filterBrand, setFilterBrand] = useState<string>("");

  return (
    <>
      <Header />
      <Conteudo />
      <Container>
        <InputContent>
          <Label>Filtrar por placa</Label>
          <input type="text" onChange={(event) => setFilterPlate(event.currentTarget.value)}/>
        </InputContent>
        <InputContent>
          <Label>Filtrar por marca</Label>
          <input type="text" onChange={(event) => setFilterBrand(event.currentTarget.value)}/>
        </InputContent>
      </Container>
      <TabelaCarro filterPlate={filterPlate} filterBrand={filterBrand}/>
    </>
  );
};

export default Carros;

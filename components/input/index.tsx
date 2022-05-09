import React from "react";
import { Container, InputContent, Label } from "./styles";

const Input = () => {
  return (
    <Container>
      <InputContent>
        <Label>Filtrar por placa</Label>
        <input type="text"/>
      </InputContent>
      <InputContent>
        <Label>Filtrar por marca</Label>
        <input type="text"/>
      </InputContent>
    </Container>
  );
};

export default Input;

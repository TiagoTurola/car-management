import React from "react";
import Link from 'next/link';
import { Container, InputContent, Label, Button, Div } from "./styles";

const NovoCarro = () => {
  return (
    <Container>
      <h1>Novo Carro</h1>
      <InputContent>
        <Label>Placa</Label>
        <input type="text"/>
      </InputContent>
      <InputContent>
        <Label>Marca</Label>
        <select name="marcas" id=""></select>
      </InputContent>
      <InputContent>
        <Label>Cor</Label>
        <input type="text"/>
      </InputContent>
      <Div>
        <Button>
          <Link href="/carros">Salvar</Link>
        </Button>
        <Button>
          <Link href="/carros">Voltar</Link>
        </Button>
      </Div>
    </Container>
  );
};

export default NovoCarro;

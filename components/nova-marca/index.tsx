import React from "react";
import Link from 'next/link';
import { Container, InputContent, Label, Button, Div } from "./styles";

const NovaMarca = () => {
  return (
    <Container>
      <h1>Nova Marca</h1>
      <InputContent>
        <Label>ID</Label>
        <input type="text"/>
      </InputContent>
      <InputContent>
        <Label>Marca</Label>
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

export default NovaMarca;

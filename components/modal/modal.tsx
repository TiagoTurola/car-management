import React from "react";
import { Container, Button } from "./styles";

const Modal = () => {
  return (
    <>
      <Container>
        <h1>Tem certeza que deseja excluir este carro?</h1>
        <h3>Essa ação não poderá ser desfeita.</h3>
        <Button>Sim</Button>
        <Button>Não</Button>
      </Container>
    </>
  );
};

export default Modal;

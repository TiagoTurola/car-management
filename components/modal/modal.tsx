import React from "react";
import { Container, Button, Content, ContentButton, Title} from "./styles";

interface IModalProps {
  isOpen: boolean;
  isCar?: boolean;
  closeModal: () => void;
  deleteData: () => void;
}

const Modal = ({ closeModal, deleteData, isOpen, isCar }: IModalProps) => {
  return (
    <>
      <Container
        style={isOpen ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <Content>
          <Title>
            Tem certeza que deseja excluir
            {isCar && isCar === true ? " este carro" : " esta marca"}?
          </Title>
          <p>Essa ação não poderá ser desfeita.</p>
          <ContentButton>
          <Button
            onClick={() => {
              closeModal();
              deleteData();
            }}
          >
            Sim
          </Button>
          <Button
            onClick={() => {
              closeModal();
            }}
          >
            Não
          </Button>
          </ContentButton>
        </Content>
      </Container>
    </>
  );
};

export default Modal;

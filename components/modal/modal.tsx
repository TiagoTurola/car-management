import React from "react";
import { Container, Content, ContentButton, Title } from "./styles";
import Input from "../core/inputs";
import Button from "../core/buttons";

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
              texto="Sim"
              onClick={() => {
                closeModal();
                deleteData();
              }}
            />
            <Button
              texto="Não"
              onClick={() => {
                closeModal();
              }}
            />
          </ContentButton>
        </Content>
      </Container>
    </>
  );
};

export default Modal;

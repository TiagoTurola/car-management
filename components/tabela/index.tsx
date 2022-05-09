import Link from "next/link";
import React from "react";
import { Table, Thead, Tr, Th, Tbody, Td, Button } from "./styles";

const Tabela = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Placa</Th>
          <Th>Cor</Th>
          <Th>Marca</Th>
          <Th>Ações</Th>
        </Tr>
        <Tr>
          <Td>EXT-1801</Td>
          <Td>Azul</Td>
          <Td>Fiat</Td>
          <Td>
              <Button>Editar</Button>
              <Button>Excluir</Button>
          </Td>
        </Tr>
      </Thead>
    </Table>
  );
};

export default Tabela;

import Link from "next/link";
import React from "react";
import { Table, Thead, Tr, Th, Tbody, Td, Button } from "./styles";

const TabelaMarca = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Marca</Th>
          <Th>Ações</Th>
        </Tr>
      </ Thead>
      <Tbody>
        <Tr>
          <Td>Fiat</Td>
          <Td>
              <Button>Editar</Button>
              <Button>Excluir</Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default TabelaMarca;

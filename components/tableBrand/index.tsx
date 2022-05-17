import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  deleteBrand,
  fetchAllBrands,
  IBrandInfo,
} from "../../pages/api/brands";
import { Table, Thead, Tr, Th, Tbody, Td, Button } from "./styles";

const TableBrand = () => {
  const [listBrands, setListBrands] = useState<IBrandInfo[]>([]);

  async function fetchBrands() {
    await fetchAllBrands()
      .then((data) => setListBrands(data))
      .catch((error) => {
        console.log(error.message);
      });
  }

  async function deleteBrandById(id: number) {
    await deleteBrand(id).catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(() => {
    fetchBrands();
  }, [listBrands.length]);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Marca</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {listBrands.map((brand, index) => {
          return (
            <>
              <Tr key={index}>
                <Td>{brand.name}</Td>
                <Td>
                  <Link href={`/marcas/editar/${brand.id}`}>
                    <Button>Editar</Button>
                  </Link>
                  <Button
                    onClick={() => {
                      deleteBrandById(Number(brand.id));
                      fetchBrands();
                    }}
                  >
                    Excluir
                  </Button>
                </Td>
              </Tr>
            </>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default TableBrand;

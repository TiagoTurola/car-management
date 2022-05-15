import Link from "next/link";
import React, { useEffect, useState } from "react";
import { deleteBrand, getBrand, IBrandInfo } from "../../pages/api/brand";
import { Table, Thead, Tr, Th, Tbody, Td, Button } from "./styles";

const TabelaMarca = () => {
  const [brandList, setBrandList] = useState<IBrandInfo[]>([]);

  async function getBrandList() {
    await getBrand()
      .then((data) => setBrandList(data))
      .catch((error) => {
        console.log(error.message);
      });
  }

  async function deleteBrandList(id: number) {
    await deleteBrand(id).catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(() => {
    getBrandList();
  }, [brandList.length]);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Marca</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {brandList.map((brand, index) => {
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
                      deleteBrandList(brand.id);
                      getBrandList();
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

export default TabelaMarca;

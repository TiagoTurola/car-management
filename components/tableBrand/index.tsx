import React, { useEffect, useState } from "react";
import {
  deleteBrand,
  fetchAllBrands,
  IBrandInfo,
} from "../../pages/api/brands";
import { Table, Thead, Tr, Th, Tbody, Td, TdBrand } from "./styles";
import Modal from "../../components/modal/modal";
import Button from "../core/buttons";

const TableBrand = () => {
  const [listBrands, setListBrands] = useState<IBrandInfo[]>([]);
  const [dataBrand, setDataBrand] = useState<IBrandInfo>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <>
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
                  <TdBrand>{brand.name}</TdBrand>
                  <Td>
                    <Button
                      path={`/marcas/editar/${brand.id}`}
                      texto="Editar"
                    />
                    <Button
                      texto="Excluir"
                      onClick={() => {
                        setDataBrand(brand);
                        setIsOpen(true);
                      }}
                    />
                  </Td>
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>
      <Modal
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
        deleteData={() => {
          deleteBrandById(Number(dataBrand?.id));
          fetchBrands();
        }}
      />
    </>
  );
};

export default TableBrand;

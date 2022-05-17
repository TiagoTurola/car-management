import Link from "next/link";
import React, { useEffect, useState } from "react";
import { deleteCar, fetchAllCars, ICarInfo } from "../../pages/api/cars";
import { Table, Thead, Tr, Th, Tbody, Td, Button } from "./styles";

interface ITableCarProps {
  filterPlate: string;
  filterBrand: string;
}

const TableCar = ({ filterPlate, filterBrand }: ITableCarProps) => {
  let [listCars, setListCars] = useState<ICarInfo[]>([]);

  if (filterPlate) {
    listCars = listCars.filter((car) =>
      car.placa.toLowerCase().includes(filterPlate.toLowerCase())
    );
  } else if (filterBrand) {
    listCars = listCars.filter((car) =>
      car.marca.toLowerCase().includes(filterBrand.toLowerCase())
    );
  }

  async function fetchCars() {
    await fetchAllCars()
      .then((data) => setListCars(data))
      .catch((error) => {
        console.log(error.message);
      });
  }

  async function deleteCarById(id: number) {
    await deleteCar(id).catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(() => {
    fetchCars();
  }, [listCars.length]);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Placa</Th>
          <Th>Cor</Th>
          <Th>Marca</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {listCars.map((car, index) => {
          return (
            <>
              <Tr key={index}>
                <Td>{car.placa}</Td>
                <Td>{car.cor}</Td>
                <Td>{car.marca}</Td>
                <Td>
                  <Link href={`/carros/editar/${car.id}`}>
                    <Button>Editar</Button>
                  </Link>
                  <Button
                    onClick={() => {
                      deleteCarById(car.id);
                      fetchCars();
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

export default TableCar;

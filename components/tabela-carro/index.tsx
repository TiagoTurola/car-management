import Link from "next/link";
import React, { useEffect, useState } from "react";
import { deleteCar, getCar, ICarInfo } from "../../pages/api/car";
import { Table, Thead, Tr, Th, Tbody, Td, Button } from "./styles";

interface ITableCarProps {
  filterPlate: string;
  filterBrand: string;
}

const TabelaCarro = ({ filterPlate, filterBrand }: ITableCarProps) => {
  let [carList, setCarList] = useState<ICarInfo[]>([]);
  if (filterPlate) {
    carList = carList.filter((car) =>
      car.placa.toLowerCase().includes(filterPlate.toLowerCase())
    );
  } else if (filterBrand) {
    carList = carList.filter((car) =>
      car.marca.toLowerCase().includes(filterBrand.toLowerCase())
    );
  }

  async function getCarList() {
    await getCar()
      .then((data) => setCarList(data))
      .catch((error) => {
        console.log(error.message);
      });
  }

  async function deleteCarList(id: number) {
    await deleteCar(id).catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(() => {
    getCarList();
  }, [carList.length]);

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
        {carList.map((car, index) => {
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
                      deleteCarList(car.id);
                      getCarList();
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

export default TabelaCarro;

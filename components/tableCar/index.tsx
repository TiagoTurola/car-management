import React, { useEffect, useState } from "react";
import { deleteCar, fetchAllCars, ICarInfo } from "../../pages/api/cars";
import { Table, Thead, Tr, Th, Tbody, Td } from "./styles";
import Modal from "../../components/modal/modal";
import Button from "../../components/core/buttons";

interface ITableCarProps {
  filterPlate: string;
  filterBrand: string;
}

const TableCar = ({ filterPlate, filterBrand }: ITableCarProps) => {
  let [listCars, setListCars] = useState<ICarInfo[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dataCar, setDataCar] = useState<ICarInfo>();

  if (filterPlate && filterBrand && !filterBrand.includes("Todos")) {
    listCars = listCars.filter(
      (car) =>
        car.placa.toLowerCase().includes(filterPlate.toLowerCase()) &&
        car.marca.toLowerCase().includes(filterBrand.toLowerCase())
    );
  } else if (filterPlate) {
    listCars = listCars.filter((car) =>
      car.placa.toLowerCase().includes(filterPlate.toLowerCase())
    );
  } else if (filterBrand && !filterBrand.includes("Todos")) {
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
    <>
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
                    <Button texto="Editar" path={`/carros/editar/${car.id}`} />

                    <Button
                      texto="Excluir"
                      onClick={() => {
                        setDataCar(car);
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
        isCar={true}
        closeModal={() => {
          setIsOpen(false);
        }}
        deleteData={() => {
          deleteCarById(Number(dataCar?.id));
          fetchCars();
        }}
      />
    </>
  );
};

export default TableCar;

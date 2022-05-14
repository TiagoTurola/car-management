import type { NextPage } from "next";
import Header from "../../../components/header";
import Conteudo from "../../../components/novo-carro";
import { IRegisterCar, saveCar } from "../../api/car";

const Editar: NextPage = () => {
  async function salvarCarro(data: IRegisterCar) {
    await saveCar(data)
      .then(() => {
        console.log("ok");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      <Conteudo
        enviar={(data) => {
          salvarCarro(data);
        }}
      />
    </>
  );
};

export default Editar;

import type { NextPage } from "next";
import Header from "../../../components/header";
import Conteudo from "../../../components/conteudo-editar-carro";
import { IRegisterCar, updateCar } from "../../api/car";

const Editar: NextPage = () => {
  async function atualizarCarro(id: number, data: IRegisterCar) {
    await updateCar(id, data)
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
        enviar={(id, data) => {
          atualizarCarro(id, data);
        }}
      />
    </>
  );
};

export default Editar;

import type { NextPage } from "next";
import Header from "../../../components/header";
import Conteudo from "../../../components/editCar";
import { IRegisterCar, updateCar } from "../../api/cars";

const EditCarPage: NextPage = () => {
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
        submit={(id, data) => {
          atualizarCarro(id, data);
        }}
      />
    </>
  );
};

export default EditCarPage;

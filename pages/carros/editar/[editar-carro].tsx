import type { NextPage } from "next";
import Header from "../../../components/header";
import Conteudo from "../../../components/editCar";
import { IRegisterCar, updateCar } from "../../api/cars";
import Title from "../../../components/title";
import { Div } from "./styles";

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
      <Div>
      <Title title={"Editar Carros"}></Title>
      <Conteudo
        submit={(id, data) => {
          atualizarCarro(id, data);
        }}
      />
      </Div>
    </>
  );
};

export default EditCarPage;

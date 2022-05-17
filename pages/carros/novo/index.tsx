import type { NextPage } from "next";
import Header from "../../../components/header";
import Conteudo from "../../../components/newCar";
import { IRegisterCar, saveCar } from "../../api/cars";

const NewCarPage: NextPage = () => {
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
        submit={(data) => {
          salvarCarro(data);
        }}
      />
    </>
  );
};

export default NewCarPage;

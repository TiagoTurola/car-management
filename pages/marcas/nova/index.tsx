import type { NextPage } from "next";
import Header from "../../../components/header";
import Conteudo from "../../../components/nova-marca";
import { IBrandInfo, saveBrand } from "../../api/brand";

const Novo: NextPage = () => {
  async function salvarMarca(data: IBrandInfo) {
    await saveBrand(data)
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
          salvarMarca(data);
        }}
      />
    </>
  );
};

export default Novo;

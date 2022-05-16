import type { NextPage } from "next";
import Header from "../../../components/header";
import Conteudo from "../../../components/conteudo-editar-marca";
import { IBrandInfo, updateBrand } from "../../api/brand";

const EditarMarca: NextPage = () => {
  async function atualizarMarca(id: number, data: IBrandInfo) {
    await updateBrand(id, data)
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
          atualizarMarca(id, data);
        }}
      />
    </>
  );
};

export default EditarMarca;
